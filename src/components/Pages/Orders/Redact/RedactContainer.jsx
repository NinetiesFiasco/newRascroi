import React from 'react'
import {connect} from 'react-redux'
import Redact from './Redact'

import {setRedactedIndex,updateCart} from '../../../../redux/orders'

class RedactContainer extends React.Component{
  render(){
    return <Redact 
      redactedIndex = {this.props.redactedIndex}
      updateCart = {this.props.updateCart}
      setRedactedIndex = {this.props.setRedactedIndex}
      carts = {this.props.carts}
    />
    
  }
}

const mstp = (state) => {
  return {
    redactedIndex: state.orders.redactedIndex,
    carts: state.orders.carts
  }
}

export default connect(mstp,{setRedactedIndex,updateCart})(RedactContainer)
