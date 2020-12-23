import {LOG_IN_FAILURE,
    LOG_IN_SUCCESS,
    LOG_IN_REQUEST, 
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE} from './actionTypes'

import {getData} from './LocalStore'

export const initState = {
    userId: getData("user") ? getData("user").id : null,
    name: getData("user") ? getData("user").fullname : null,
    isLoading:false,
    error:"",
    isAuth: getData("user") ? getData("user").auth : false,
}

const loginreducer = (state=initState,action) => {
    console.log(action.payload)
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
                isAuth: action.payload.auth,
                userId: action.payload.id,
                name: action.payload.fullname
            };

        case LOG_IN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        case LOG_OUT_REQUEST:
            return {
                ...state,
                isLoading:true
            }

        case LOG_OUT_SUCCESS:
            return {
                ...state,
                isLoading:false,
                isAuth:action.payload
            }

        case LOG_OUT_FAILURE:
            return {
                ...state,
                isLoading:false,
                error:action.payload
            }

        default:
            return state
    }
}

export default loginreducer