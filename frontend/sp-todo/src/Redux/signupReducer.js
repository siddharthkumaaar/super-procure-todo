import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE } from './actionTypes';
  
  export const initState = {
    isLoading: false,
    error: false,
    isAuth: false,
    message:""
  };
  
  const signupReducer =  (state = initState, { type, payload }) => {
    // console.log(type, payload);
    switch (type) {
      case USER_REGISTER_REQUEST:
        return {
          ...state,
            isLoading: true
        };
      case USER_REGISTER_SUCCESS:
        return {
            ...state,
            isLoading: false,
            isAuth: true,
            message: payload.fullname
        };
      case USER_REGISTER_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: payload
          // message: payload.message 
        };
      default:
        return state;
    }
  };

  export default signupReducer