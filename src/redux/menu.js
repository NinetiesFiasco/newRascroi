// Стартовое состояние
let initialState = {
  links: [
    {name:"Главная",to:"/"},
    {name:"О нас",to:"/about"},
    {name:"Туториал",to:"/tutorial"},
    {name:"Заказы",to:"/cart"},
    {name:"Examle",to:"/example"},
    {name:"Логин",to:"/login"},
    {name:"Регистрация",to:"/registration"}
  ]
};

// Редюсер 
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
  }
}

// Возврат редюсера по умолчанию
export default reducer;