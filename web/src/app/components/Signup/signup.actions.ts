import axios from "axios";
import {API_URL} from "./../../Constants";

export function SignUpAction(user) {
    const endpoint = API_URL + '/users';
    return axios({
        method: "POST",
        url: endpoint,
        headers:{
            "content-type": "application/json"
        },
        data: user
    });
}