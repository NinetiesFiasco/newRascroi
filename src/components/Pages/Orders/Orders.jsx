import React from 'react'
import s from './Orders.module.css'

const Orders = ({orders}) => {

  ordersUI = orders.map((o,key)=><div key={key}>key {key}</div>)

  return (
    <div>
      <h1>Заказы</h1>
      {ordersUI}
    </div>
  );
};

export default Orders