"use strict";

import Action from '../../Action';
import {API_URL} from './../../Constants';
import {LOGIN_ACTION} from './login.action';
import { handleActions } from 'redux-actions';
import axios from 'axios';

export const reducer = handleActions({
    LOGIN_ACTION: (state, action: Action<LOGIN_ACTION>) => {
        axios({
            method: 'post',
            url: API_URL + '/sessions',
            data: {
                username: action.payload.username,
                password: action.payload.password
            }
        }).then(function(response){
            return response;
        })
    }
}, {});