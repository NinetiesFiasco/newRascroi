import {ordersAPI} from '../api/api'
//import {stopSubmit} from 'redux-form'

const prfx = (val) => 'appName.reducerName.'+val
const GET_ORDERS = prfx('GET_ORDERS')
const SHOW_ADDING_BLOCK = prfx('SHOW_ADDING_BLOCK')
const ADD_NEW_CART = prfx('ADD_NEW_CART')
const DELETE_CART = prfx('DELETE_CART')
const SET_REDACTED_INDEX = prfx('SET_REDACTED_INDEX')
const UPDATE_IN_CART = prfx('UPDATE_IN_CART')

const initialState = {
  carts: [],
  showAddingBlock: false,
  redactedIndex: -1
}

function reducer (state=initialState, action){
  switch(action.type){
    case GET_ORDERS: return {
      ...state,
      carts: action.payload
    }
    case SHOW_ADDING_BLOCK: return {
      ...state,
      showAddingBlock: action.payload
    }
    case ADD_NEW_CART: return {
      ...state,
      carts: [...state.carts, action.payload]
    }
    case DELETE_CART: return {
      ...state,
      carts: state.carts.filter((it) => it._id!==action.payload)
    }

    case SET_REDACTED_INDEX: return {      
      ...state,
      ...action.payload
    }
    case UPDATE_IN_CART: 
      let newState = {...state}
      let item = newState.carts[action.index]
      item.name = action.name
      item.comment = action.comment
      return {...newState, carts: [...newState.carts]};

    default: return state
  }
}

export const getOrdersSuccess = (payload) => ({type: GET_ORDERS,payload})
export const showAddingBlockAC = (payload) => ({type: SHOW_ADDING_BLOCK,payload})
export const addNewCartAC = (payload) => ({type: ADD_NEW_CART,payload})
export const deleteCartAC = (payload) => ({type: DELETE_CART,payload})
export const setRedactedIndex = (redactedIndex) => ({type: SET_REDACTED_INDEX,payload: {redactedIndex}})
export const updateCartAC = (name,comment,index) => ({type: UPDATE_IN_CART,index,name,comment})


export const getOrders = () => async (dispatch) => {
  const response = await ordersAPI.getAll()
  if (response.status === 200){
    dispatch(getOrdersSuccess(response.data.data))
  }
}

export const addNewCart = (form) => async (dispatch) => {
  const response = await ordersAPI.add(form)
  if (response.status === 200){
    dispatch(showAddingBlockAC(false))
    dispatch(addNewCartAC(response.data.data))
  }
}

export const deleteCart = (idInArr) => async (dispatch,getState) => {
  const _id = getState().orders.carts[idInArr]._id;
  const response = await ordersAPI.delete(_id)
  if (response.status === 200) {
    dispatch(deleteCartAC(_id))
  }
}

export const updateCart = (form,redactedIndex) => async (dispatch,getState) => {  
  const _id = getState().orders.carts[redactedIndex]._id;
  const response = await ordersAPI.update(_id,form)
  if (response.status === 200) {
    dispatch(showAddingBlockAC(false))
    dispatch(updateCartAC(form.name,form.comment,redactedIndex))
  }
}

export default reducer