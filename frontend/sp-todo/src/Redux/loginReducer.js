import {LOG_IN_FAILURE,LOG_IN_SUCCESS,LOG_IN_REQUEST, LOG_OUT} from './actionTypes'

export const initState = {
    userId:null,
    name:"",
    isLoading:false,
    error:"",
    isAuth:false,
}

const loginreducer = (state=initState,action) => {
    // console.log(action)
    switch(action.type){
        
        case LOG_IN_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case LOG_IN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                userId: action.payload.id,
                name: action.payload.fullname
            };

        case LOG_IN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        case LOG_OUT:
            return {
                ...state,
                userId:action.payload.userId,
                name:action.payload.name,
                isAuth:false
            }
        default:
            return state
    }
}

export default loginreducer