import React from 'react'
import {connect} from 'react-redux'
import Orders from './Orders'

import {
  showAddingBlockAC,
  getOrders,
  deleteCart,
  setRedactedIndex
} from '../../../redux/orders'

class OrdersContainer extends React.Component{
  componentDidMount() {
    this.props.getOrders();
  }
  
  render(){
    return <Orders
      carts = {this.props.carts}
      showAddingBlockAC = {this.props.showAddingBlockAC}
      showAddingBlock = {this.props.showAddingBlock}
      deleteCart = {this.props.deleteCart}
      setRedactedIndex = {this.props.setRedactedIndex}
      redactedIndex = {this.props.redactedIndex}
    />
  }
}

const mstp = (state) => {
  return {
    carts: state.orders.carts,
    showAddingBlock: state.orders.showAddingBlock,
    redactedIndex: state.orders.redactedIndex
  }
}

export default connect(mstp,{
  showAddingBlockAC,
  getOrders,
  deleteCart,
  setRedactedIndex
})(OrdersContainer)