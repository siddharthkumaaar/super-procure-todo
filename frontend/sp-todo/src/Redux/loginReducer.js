import {LOG_IN,LOG_OUT} from './actionTypes'

export const initState = {
    userId:null,
    name:""
}

const loginreducer = (state=initState,action) => {
    console.log(action)
    switch(action.type){
        
        case LOG_IN:
            return{
                ...state,
                userId:action.payload1,
                name:action.payload2
            }
        
        case LOG_OUT:
            return{
                ...state,
                userId:action.payload1,
                name:action.payload2
            }
        default:
            return state
    }
}

export default loginreducer