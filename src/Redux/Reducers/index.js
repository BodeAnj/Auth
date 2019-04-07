import {combineReducer} from 'redux';
import AuthReducer from './AuthReducer'

let rootReducer = combineReducer({
    Auth: AuthReducer,
})

export default rootReducer