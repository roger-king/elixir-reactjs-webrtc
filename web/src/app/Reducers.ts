import { combineReducers } from 'redux';
import { reducer as LoginReducer}  from './components/login/login.reducer';

export default combineReducers({
    LoginReducer: LoginReducer
});