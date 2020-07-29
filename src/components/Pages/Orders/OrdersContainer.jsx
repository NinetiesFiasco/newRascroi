
import React from 'react'
import {connect} from 'react-redux'
import Orders from './Orders'

class OrdersContainer extends React.Component{
  render(){
    return <Orders 
      example = {this.props.example}
    />
    
  }
}

const mstp = (state) => {
  return {
    example: state.reducer.example
  }
}

export default connect(mstp,{})(OrdersContainer)