import React from 'react'
//import s from './Orders.module.css'
import Add from './Add/AddContainer'
import Redact from './Redact/RedactContainer'


const Orders = (props) => {

  const {carts,showAddingBlockAC,showAddingBlock,deleteCart,setRedactedIndex,redactedIndex} = props;

  const cartsUI = carts.map((c,key)=><Cart 
      key={key} 
      num={key} 
      cart={c} 
      deleteCart={deleteCart}
      setRedactedIndex={setRedactedIndex}
    />)

  return (
    <div>
      <h1>Заказы</h1>

      {cartsUI}

      <button onClick={()=>{showAddingBlockAC(!showAddingBlock)}}>Добавить новый</button>
      {showAddingBlock && <Add />}
      {redactedIndex !== -1 && <Redact />}

    </div>
  );
};

const Cart = ({cart,num,deleteCart,setRedactedIndex}) => {
  return <div>
      <span>{num+1}). {cart.name} {cart.comment}</span>
      <button onClick={()=>{setRedactedIndex(num)}}>Редактировать</button>
      <button>Открыть</button>
      <button onClick={()=>{deleteCart(num)}}>Удалить</button>
    </div>
};

export default Orders