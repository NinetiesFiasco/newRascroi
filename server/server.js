// Подгружаем файл конфигурации
require("dotenv").config();

// Конфигурация базы Mongo
const mongo = require('./dbConfig/mongo.js');

const path = require('path');

// Redis для хранения Сессии
const {
  redisClient,
  redisConnect
} = require("./dbConfig/redis.js");

// Мои токены
const {validateToken} = require('./api/account/tokens/tok.js');

const express = require('express');
const app = express();

const PORT = process.env.SERVER_PORT || 5000;

// Понимаем JSON тело запроса 
const bodyParser = require('body-parser');
// Читаем куки 
const cookieParser = require('cookie-parser');

// Добавляем middleWare к серверу
app.use(cookieParser());
app.use(bodyParser.json());


// Статичные файлы сборки
if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
  app.use(express.static(__dirname+'/build'));
  app.get('*', (req, res) => {
    res.sendFile('build/index.html', { root: __dirname })
  });
}

// Первый обработчик проверяет авторизацию
app.use((req, res, next) => {
  var requestToken = req.header("Authorization")
    ? req.header("Authorization")
    : req.cookies.Token;
  
  let token = validateToken(requestToken);

  if (!token){
    res.locals.user = null;
    next();
  }else{
    redisClient().hgetall("rsk:"+token.body.id, function(err, user) {
      res.locals.user = user;
      next();
    });
  }
});


// Коннектим mongo
mongo.connect(() => {
  redisConnect(()=>{
    serverStart();
  });
});

// Запуск сервера
var serverStart = ()=>{
  
  // Конечные точки
  // Подключение маршрутов приложения
  app.use("/api/orders",require('./api/orders/carts/router.js'));
  app.use("/api/orders/armatura",require('./api/orders/armatura/router.js'));
  app.use("/api/orders/rascroi",require('./api/orders/rascroi/router.js'));
  app.use("/api/enter",require('./api/account/enter/router.js'));
  app.use("/api/registration",require('./api/account/registration/router.js'));
  app.use("/api/example",require('./api/example/router.js'));

  // Собственно запуск
  const server = app.listen(process.env.SERVER_PORT,(err)=>{
    if (!err)
      console.log('Servak udachno startanul');
    else
      console.log("Est zaparka: "+err);
  });
  /// при ошибки закрыть соединения с БД
  server.on("error",(err)=>{
    console.log("Zakrivau DB");
    require("./dbConfig/mysql.js").end();
    mongo.close();
    redisClient().quit();
  });
}