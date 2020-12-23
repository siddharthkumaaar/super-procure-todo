import axios from 'axios'

import {LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS} from './actionTypes'

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
            const loadData = {
              fullname:fullname,
              id:id,
              auth:true
            }
            localStorage.setItem("user",JSON.stringify(loadData))
            const getData = JSON.parse(localStorage.getItem("user"))
            // const {fullname, id, auth} = getData
            console.log(getData)
            dispatch(userLoginSuccess(getData));
          }
      })
      .catch((err) => {
        dispatch(userLoginFailure(err));
      });
}

export const userLogOutRequest = () => ({
  type: LOG_OUT_REQUEST
});

export const userLogOutSuccess = (payload) => (
  {
  type: LOG_OUT_SUCCESS,
  payload
});

export const userLogOutFailure = (payload) => ({
  type: LOG_OUT_FAILURE,
  payload
});

export const logOut = (payload) => (dispatch)=>{
  dispatch(userLogOutRequest());
  const loadData = {
    fullname:"",
    id:"",
    auth:false
  }
  localStorage.setItem("user",JSON.stringify(loadData))
  const getData = JSON.parse(localStorage.getItem("user"))
  if(getData.auth===false)
  {
    // const payload = getData.auth
    dispatch(userLogOutSuccess(getData.auth))
  }
  else
  {
    // const payload = "Getting Some Error..."
    dispatch(userLogOutFailure("Getting Some Error..."))
  }
}