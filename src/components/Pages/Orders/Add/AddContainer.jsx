import React from 'react'
import Add from './Add'
import { connect } from 'react-redux'
import { addNewCart } from '../../../../redux/orders'


class AddContainer extends React.Component{
  render(){
    return <Add 
      addNewCart = {this.props.addNewCart}
    />
  }
}

const mstp = (state) => {
  return {

  }
}

export default connect(mstp,{addNewCart})(AddContainer)