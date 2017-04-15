import axios from 'axios';
import {API_URL} from './../../Constants';

export function loginAction(credentials){
    const endpoint = API_URL + '/sessions';
    return axios.post(endpoint, credentials);
}