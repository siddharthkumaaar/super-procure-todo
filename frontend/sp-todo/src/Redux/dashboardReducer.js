import {ADD_TASK_SUCCESS,
  ADD_TASK_REQUEST,
  ADD_TASK_FAILURE,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_REQUEST,
  FETCHING_DATA_FAILURE,
  TASK_COMPLETE_FAILURE,
  TASK_COMPLETE_SUCCESS,
  TASK_COMPLETE_REQUEST,
  TASK_DELETE_FAILURE,
  TASK_DELETE_REQUEST,
  TASK_DELETE_SUCCESS,
  ADD_SUBTASK_FAILURE,
  ADD_SUBTASK_REQUEST,
  ADD_SUBTASK_SUCCESS
} from './actionTypes'

export const initState = {
    isLoading: false,
    error: false,
    isAuth: false,
    message:"",
    userTodoList:[],
    totalTask:"",
    nonCompletedTask:"",
    completedTask:""
  };

  const dashboardReducer =  (state = initState, { type, payload }) => {
    // console.log(state.userTodoList);
    switch (type) {
      case FETCHING_DATA_REQUEST:
        return {
          ...state,
          isLoading:true
        };

      case FETCHING_DATA_SUCCESS:
        let lenOfCompTask = 0
        let lenOfNonCompTask = 0
        for(let i=0; i<payload.res2.length; i++)
            {
                if(payload.res2[i].completed===true)
                {
                    lenOfCompTask++
                }
                else
                {
                    lenOfNonCompTask++
                }
            }

        return {
          ...state,
          isLoading:false,
          userTodoList:payload.res2,
          totalTask:payload.res2.length,
          nonCompletedTask:lenOfNonCompTask,
          completedTask:lenOfCompTask
        }

      case FETCHING_DATA_FAILURE:
        return {
          ...state,
          isLoading:false,
          error:payload
        }

      case ADD_TASK_REQUEST:
        return {
            ...state,
            isLoading: true
        };

      case ADD_TASK_SUCCESS:
      
        return {
          ...state,
          isLoading:false,
          userTodoList: [...state.userTodoList, payload ],
          totalTask:state.userTodoList.length+1,
          nonCompletedTask: state.userTodoList.length+1
        }
        
      case ADD_TASK_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: payload
        };

      case TASK_COMPLETE_REQUEST:
        return {
          ...state,
          isLoading: true
        }

      case TASK_COMPLETE_SUCCESS:
        let lenofcomtask = 0
        let lenofnoncomptask = 0
        for(let i=0; i<payload.length; i++)
            {
                if(payload[i].completed===true)
                {
                  lenofcomtask++
                }
                else
                {
                  lenofnoncomptask++
                }
            }
        return {
          ...state,
          isLoading:false,
          userTodoList: [...payload],
          nonCompletedTask:lenofnoncomptask,
          completedTask:lenofcomtask
        }

      case TASK_COMPLETE_FAILURE:
        return {
          ...state,
          isLoading:false,
          error:payload
        }

        case TASK_DELETE_REQUEST:
        return {
          ...state,
          isLoading: true
        }

      case TASK_DELETE_SUCCESS:
        let alenofcompt = 0
        let blenofncomp = 0
        for(let i=0; i<payload.length; i++)
            {
                if(payload[i].completed===true)
                {
                  alenofcompt++
                }
                else
                {
                  blenofncomp++
                }
            }
        return {
          ...state,
          isLoading:false,
          userTodoList: [...payload],
          totalTask:payload.length,
          nonCompletedTask:blenofncomp,
          completedTask:alenofcompt
        }

      case TASK_DELETE_FAILURE:
        return {
          ...state,
          isLoading:false,
          error:payload
        }

        case ADD_SUBTASK_REQUEST:
          return {
            ...state,
            isLoading: true
          }
  
        case ADD_SUBTASK_SUCCESS:
          
          return {
            ...state,
            isLoading:false,
            userTodoList: [...payload]
          }
  
        case ADD_SUBTASK_FAILURE:
          return {
            ...state,
            isLoading:false,
            error:payload
          }

      default:
        return state;
    }
  };

  export default dashboardReducer