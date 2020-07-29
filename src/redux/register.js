import {Registration} from '../api/api';
import {stopSubmit} from 'redux-form'

const prfx = (val)=>"rascroi/register/"+val;
const USER_REGISTER = prfx("USER_REGISTER");

const initialState = {
  success: false
};

function reducer(state=initialState, action){
  switch (action.type){
    case USER_REGISTER: return {
      ...state,
      success: action.payload
    }    
    default: return state;
  }
}

export const registerSucccess = (payload) => ({type:USER_REGISTER,payload});

export const register = (form) => async (dispatch) => {
  if (form.password !== form.repeat){
    dispatch(stopSubmit('register',{_error: "Пароли не совпадают"}))
    return;
  }
  const response = await Registration.register(form);
  if (response.data.success !== 1)
    dispatch(stopSubmit('register',{_error: response.data.message}))  
  dispatch(registerSucccess(response.data.success === 1))  
}

export default reducer;