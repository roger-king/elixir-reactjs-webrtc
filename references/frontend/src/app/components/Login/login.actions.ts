import axios from 'axios';
import {API_URL} from './../../Constants';
import {Auth, User} from './../../actions';

export function loginAction(body) {
    const endpoint = API_URL + '/sessions';
    let auth = new Auth();

    return axios.post(endpoint, body)
        .then(function(response){
            auth.setToken(response.data.meta.token);
            return response;
        });
}