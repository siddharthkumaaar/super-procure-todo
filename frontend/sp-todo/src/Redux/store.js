import { createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import loginreducer from './loginReducer'
import signupReducer from './signupReducer';
import dashboardReducer from './dashboardReducer'

const rootReducer = combineReducers({login:loginreducer,signup:signupReducer,dashboard:dashboardReducer})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))


