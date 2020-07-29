import {ordersAPI} from '../api/api'
//import {stopSubmit} from 'redux-form'

const prfx = (val) => 'appName.reducerName.'
const GET_ORDERS = prfx('GET_ORDERS')

const initialState = {
  orders: [],
}

function reducer (state=initialState, action){
  switch(action.type){
    case GET_ORDERS: return {
      ...state,
      orders: action.payload
    }
    default: return state
  }
}

export const getOrdersSuccess = (payload) => ({type: GET_ORDERS,payload})

export const getOrders = (form) => async (dispatch) => {
  const response = await ordersAPI.query(form)
  if (response.status === 200){
    dispatch(getOrdersSuccess(response.data))
  }
}

export default reducer