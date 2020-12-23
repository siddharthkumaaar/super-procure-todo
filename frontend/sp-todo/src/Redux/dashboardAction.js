import axios from 'axios'
import {ADD_TASK_FAILURE,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  FETCHING_DATA_FAILURE,
  FETCHING_DATA_REQUEST,
  FETCHING_DATA_SUCCESS,
  TASK_COMPLETE_FAILURE,
  TASK_COMPLETE_REQUEST,
  TASK_COMPLETE_SUCCESS,
  TASK_DELETE_FAILURE,
  TASK_DELETE_REQUEST,
  TASK_DELETE_SUCCESS,
  ADD_SUBTASK_SUCCESS,
  ADD_SUBTASK_REQUEST,
  ADD_SUBTASK_FAILURE
} from './actionTypes'

export const fetchDataRequest = () => ({
  type: FETCHING_DATA_REQUEST
});

export const fetchDataSuccess = (payload) => (
  {
  type: FETCHING_DATA_SUCCESS,
  payload
});

export const fetchDataFailure = (payload) => ({
  type: FETCHING_DATA_FAILURE,
  payload
});

export const fetchingData = (payload) => (dispatch) => {
  dispatch(fetchDataRequest());
  // console.log(payload)
  axios({
    url:"http://localhost:3001/todo",
    method:"get",
    params:{
      userid:payload
    }
  })
    .then((res) => {
        // console.log(res)
        if(res.status === 200){
          const res2 = res.data
          dispatch(fetchDataSuccess({res2}));
        }

    })
    .catch((err) => {
      dispatch(fetchDataFailure(err));
    });
};




export const addTaskRequest = () => ({
    type: ADD_TASK_REQUEST
  });
  
export const addTaskSuccess = (payload) => (
    {
    type: ADD_TASK_SUCCESS,
    payload
  });
  
export const addTaskFailure = (payload) => ({
    type: ADD_TASK_FAILURE,
    payload
  });

export const addingTask = (payload) => (dispatch) => {
    dispatch(addTaskRequest());
    axios({
      url:"http://localhost:3001/todo",
      method:"post",
      data:payload
    })
      .then((res) => {
        console.log(res)
        if(res.status === 201){
            dispatch(addTaskSuccess(res.data));
          }
      })
      .catch((err) => {
        dispatch(addTaskFailure(err));
      });
  };

  export const taskCompleteReq = () => ({
    type: TASK_COMPLETE_REQUEST
  });
  
export const taskCompleteSuccess = (payload) => (
    {
    type: TASK_COMPLETE_SUCCESS,
    payload
  });
  
export const taskCompleteFail = (payload) => ({
    type: TASK_COMPLETE_FAILURE,
    payload
  });

export const completeTask = (payload) => (dispatch) => {
    // console.log(payload)
    dispatch(taskCompleteReq());
    axios({
      url:"http://localhost:3001/todo/"+payload.id,
      method:"put",
      data:payload
    })
      .then((res) => {
        // console.log(res)
        if(res.status === 200){
          // console.log(res)
            return axios({
              url:"http://localhost:3001/todo",
              method:"get",
              params:{
                userid:res.data.userid
              }
            })
          }
      })
      .then((res2)=>{
        // console.log(res2)
        dispatch(taskCompleteSuccess(res2.data));})
      .catch((err) => {
        dispatch(taskCompleteFail(err));
      });
  };

  export const taskDeleteReq = () => ({
    type: TASK_DELETE_REQUEST
  });
  
export const taskDeleteSuccess = (payload) => (
    {
    type: TASK_DELETE_SUCCESS,
    payload
  });
  
export const taskDeleteFail = (payload) => ({
    type: TASK_DELETE_FAILURE,
    payload
  });

export const deleteTask = (payload) => (dispatch) => {
    // console.log(payload)
    dispatch(taskDeleteReq());
    axios({
      url:"http://localhost:3001/todo/"+payload.id,
      method:"delete"
    })
      .then((res) => {
        // console.log(res)
        if(res.status === 200){
            return axios({
              url:"http://localhost:3001/todo",
              method:"get",
              params:{
                userid:payload.userid
              }
            })
          }
      })
      .then((res)=>{
        // console.log(res)
        dispatch(taskDeleteSuccess(res.data));})
      .catch((err) => {
        dispatch(taskDeleteFail(err));
      });
  };


  export const addSubTaskReq = () => ({
    type: ADD_SUBTASK_REQUEST
  });
  
export const addSubTaskSuccess = (payload) => (
    {
    type: ADD_SUBTASK_SUCCESS,
    payload
  });
  
export const addSubTaskFail = (payload) => ({
    type: ADD_SUBTASK_FAILURE,
    payload
  });

export const addsubtask = (payload) => (dispatch) => {
    // console.log(payload)
    dispatch(addSubTaskReq());
    axios({
      url:"http://localhost:3001/todo/"+payload.id,
      method:"put",
      data:payload
    })
      .then((res) => {
        // console.log(res)
        if(res.status === 200){
            return axios({
              url:"http://localhost:3001/todo",
              method:"get",
              params:{
                userid:res.data.userid
              }
            })
          }
      })
      .then((res)=>{
        // console.log(res)
        dispatch(addSubTaskSuccess(res.data));})
      .catch((err) => {
        dispatch(addSubTaskFail(err));
      });
  };