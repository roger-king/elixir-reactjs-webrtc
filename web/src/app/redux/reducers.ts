import {combineReducers, Reducer} from 'redux';
import { reducer } from 'redux-connect';
import { loginReducer } from './../components/login/login.reducer';
import {IStore} from './IStore';

const rootReducer: Reducer<IStore> = combineReducers<IStore>({
    login: loginReducer,
    reduxAsyncConnect: reducer
});

export default rootReducer;