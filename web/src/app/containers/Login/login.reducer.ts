"use strict";

import axios from 'axios';
import {ILogin, ILoginAction} from './login.model';
import {API_URL} from './../../Constants';

export const POST_REQUEST: string = 'login/POST_REQUEST';
export const POST_SUCCESS: string = 'login/POST_SUCCESS';
export const POST_FAILURE: string = 'login/POST_FAILURE';

const initialState: ILogin = {
    username: '',
    password: '',
    isFetching: false
};

/** Reducer */
export function loginReducer(state = initialState, action: ILoginAction){
    switch(action.type){
        case POST_REQUEST:
            return (<any>Object).assign({}, state, {
                isFetching: true,
            });
        case POST_SUCCESS:
            return (<any>Object).assign({}, state, {
                isFetching: false,
                jwt: action.payload.jwt
            });
        case POST_FAILURE:
            return (<any>Object).assign({}, state, {
                isFetching: false,
                message: action.payload.message,
                error:true
            });
        default:
            return state;
    }
}

/** Async Action Creator */
export function doLogin(credentials) {
    return dispatch => {
        dispatch(loginRequest());

        return axios.post(API_URL + '/sessions', credentials)
            .then(res => dispatch(loginSuccess(res)))
            .catch(err => dispatch(loginFailure(err)));
    };
}

/** Action Creator */
export function loginRequest(): ILoginAction {
    return {
        type: POST_REQUEST,
    };
}

/** Action Creator */
export function loginSuccess(jwt: any): ILoginAction {
    return {
        type: POST_SUCCESS,
        payload: {
            jwt
        },
    };
}

/** Action Creator */
export function loginFailure(message: any): ILoginAction {
    return {
        type: POST_FAILURE,
        payload: {
            message,
        },
    };
}