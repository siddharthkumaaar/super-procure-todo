import axios from 'axios'

import {LOG_IN_FAILURE,LOG_IN_REQUEST,LOG_IN_SUCCESS, LOG_OUT} from './actionTypes'

export const userLoginRequest = () => ({
    type: LOG_IN_REQUEST
  });
  
export const userLoginSuccess = (payload) => (
    {
    type: LOG_IN_SUCCESS,
    payload
  });
  
export const userLoginFailure = (payload) => ({
    type: LOG_IN_FAILURE,
    payload
  });

export const userlogIn = (payload) =>(dispatch)=>{
    dispatch(userLoginRequest());
    axios({
        url:"http://localhost:3001/users",
        method:"get",
        params:{
            email:payload.email,
            password:payload.password
        }
    })
      
      .then((res) => {
          console.log(res)
          if(res.status === 200){
            const { fullname, id } = res.data[0]
            dispatch(userLoginSuccess({fullname,id}));
          }
      })
      .catch((err) => {
        dispatch(userLoginFailure(err));
      });
}

export const logOut = (payload) =>({
    type:LOG_OUT,
    payload
})