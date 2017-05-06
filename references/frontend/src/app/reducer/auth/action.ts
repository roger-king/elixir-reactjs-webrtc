import { API_URL } from './../../Constants';
import axios from 'axios';
import {LOGIN_USER_ERROR, LOGIN_USER_PENDING, LOGIN_USER_SUCCESS} from "./constants";

export function loginUser(){
    console.log('Testing');
    return(dispatch, getState) => {
        console.log('Getting State:', getState());
/*        const endpoint = API_URL + '/sessions';

        return dispatch({
            type: [
                LOGIN_USER_PENDING,
                LOGIN_USER_SUCCESS,
                LOGIN_USER_ERROR
            ],
            payload: {
                promise: (body) => {
                    return axios.post(endpoint, body)
                        .then((res) => {
                            return res;
                        })
                }
            }
        })*/
    }
}

/*
 export function login(body){
 const endpoint = API_URL + '/sessions';
 return axios.post(endpoint, body)
 .then(function(response){
 setToken(response.data.meta.token);
 return response;
 });
 }
export function setToken(token){
    return {
        type: SET_TOKEN,
        token
    }
}*/
