import { combineReducers } from 'redux';
import { reducer } from 'redux-connect';
import { loginReducer } from './components/login/login.reducer';

export default combineReducers({
    login: loginReducer,
    reduxAsyncConnect: reducer
});