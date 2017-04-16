import * as jwt_decode from 'jwt-decode';
import {Auth} from "../auth/index";
export class User{
    username: string;
    email: string;
    constructor(){}

    getUser(){
        let auth = new Auth();
        console.log(jwt_decode(auth.getToken()));
        /*        return {
            username: this.getUserName,
            email: this.getEmail,
        }*/
    }
}