import { combineReducers } from 'redux';
import auth from './auth';
import { routerReducer } from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    auth,
    routing: routerReducer,
    form: formReducer,
});