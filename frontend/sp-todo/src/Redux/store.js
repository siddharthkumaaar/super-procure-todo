import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import loginreducer from './loginReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(loginreducer,composeEnhancers(applyMiddleware(thunk)))


