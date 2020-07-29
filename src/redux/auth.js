import {Authentication} from '../api/api';
import {stopSubmit} from 'redux-form'

const prfx = (val)=>"rascroi/auth/"+val;
const USER_LOGIN = prfx("USER_LOGIN");
const SET_USER_DATA = prfx("SET_USER_DATA");
const SET_INIT = prfx("SET_INIT");
const USER_LOGOUT = prfx("USER_LOGOUT")

const initialState = {
  init: false,
  login: false,
  user: null
};

function reducer(state=initialState, action){
  switch (action.type){
    case USER_LOGIN: return {
      ...state,
      login: true
    };
    case USER_LOGOUT: return {
      ...state,
      login: false,
      user: null
    };

    case SET_USER_DATA: return {
      ...state,
      user: action.payload
    };
    case SET_INIT: return {
      ...state,
      init: true
    };
    default: return state;
  }
}

export const userLogin = () => ({type:USER_LOGIN});
export const userLogout = () => ({type:USER_LOGOUT});
export const setUserData = (payload) => ({type:SET_USER_DATA,payload});
export const setInit = () => ({type:SET_INIT});


export const enter = (form) => async (dispatch) => {  
  const response = await Authentication.enter(form);
  if (response.data.success !== 1){
    dispatch(stopSubmit('login',{_error: response.data.message}))
  } else {
    localStorage.setItem("Token",response.data.token)
    dispatch(auth())
  }    
}

export const exit = () => async (dispatch) => {
  await Authentication.exit()
  localStorage.setItem("Token","")
  authPart(dispatch)
}


const authPart = async (dispatch) => {
  const response = await Authentication.auth()
  dispatch(response.data.success === 1
    ?userLogin()
    :userLogout()
  )
  dispatch(setUserData(response.data.user))
  return response
}

export const auth = () => (dispatch) => {
  authPart(dispatch)
}

export const getInit = () => (dispatch) => {
  authPart(dispatch)
  dispatch(setInit())
}

export default reducer;