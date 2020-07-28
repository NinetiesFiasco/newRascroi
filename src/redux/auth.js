import {Authentication} from '../api/api';
import {stopSubmit} from 'redux-form'

const prfx = (val)=>"rascroi/auth/"+val;
const USER_LOGIN = prfx("USER_LOGIN");

const initialState = {
  login: false
};

function reducer(state=initialState, action){
  switch (action.type){
    case USER_LOGIN: return {
      ...state,
      login: action.payload
    };
    default: return state;
  }
}

export const userLogin = (payload) => ({type:USER_LOGIN,payload});


export const enter = (form) => async (dispatch) => {
  const response = await Authentication.enter(form);
  if (response.data.success !== 1)
    dispatch(stopSubmit('login',{_error: response.data.message}))
  else {
    dispatch(auth())
  }    
}

export const auth = () => async (dispatch) => {
  const response = await Authentication.auth()
  dispatch(userLogin(response.data.success === 1))
}


export default reducer;