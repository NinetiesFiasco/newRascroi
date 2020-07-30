const {
  client,
  ObjectID
} = require('../../../dbConfig/mongo.js');

const Collection = client().db("RaskroiAccount").collection("Carts");

var add = (cart, callBack) => {
  Collection.insertOne({
    name: cart.name,
    comment: cart.comment,
    login: cart.login,
    dateadd: cart.dateadd
  }, function(err, result){
      callBack(err,result.ops[0]);
  });
};

var update  = (id,cart,callBack) => {
  Collection.updateOne({"_id":ObjectID(id)},{$set:cart},function(err,result){
    callBack(err,result.ops);
  });
};

var del = (id,login,callBack) => {
 Collection.deleteOne({"_id":ObjectID(id),"login":login},function(err,result){
   return callBack(err,result.ops);
 })
};

var get = (id,callBack) =>{
  Collection.findOne({"_id":ObjectID(id)}, (err,result)=>{
    return callBack(err,result.ops);
  });
};

var getAll = (login,callBack) =>{
  Collection.find({"login":login}).toArray(function(err, results){
    return callBack(err,results);
  });
};

module.exports = {
  add: add,
  update: update,
  delete: del,
  get: get,
  getAll: getAll
};