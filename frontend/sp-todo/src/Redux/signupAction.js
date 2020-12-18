import axios from "axios";
import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE } from "./actionTypes";

export const userRegisterRequest = () => ({
    type: USER_REGISTER_REQUEST
  });
  
export const userRegisterSuccess = (payload) => (
    {
    type: USER_REGISTER_SUCCESS,
    payload
  });
  
export const userRegisterFailure = (payload) => ({
    type: USER_REGISTER_FAILURE,
    payload
  });


export const userRegister = (payload) => (dispatch) => {
    dispatch(userRegisterRequest());
    axios
      .post("http://localhost:3001/users", payload)
      .then((res) => {
          // console.log(res)
          if(res.status === 201){
            const { fullname } = res.data
            dispatch(userRegisterSuccess({fullname}));
          }
          // else if(res.status === 401){
          //   const { error, message } = res.data
          //   dispatch(userRegisterFailure({error, message}));
          // }

      })
      .catch((err) => {
        dispatch(userRegisterFailure(err));
      });
  };
