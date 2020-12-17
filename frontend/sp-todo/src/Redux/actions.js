import {LOG_IN, LOG_OUT} from './actionTypes'

export const logIn = (id,name) =>({
    type:LOG_IN,
    payload1:id,
    payload2:name
})

export const logOut = (id,name) =>({
    type:LOG_OUT,
    payload1:id,
    payload2:name
})