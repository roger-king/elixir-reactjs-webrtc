import * as _ from 'lodash';
import * as jwt_decode from 'jwt-decode';
import * as moment from 'moment';
import {User} from './../user';

export class Auth{
    constructor(){}

    getToken(){
        return localStorage.getItem("user-token");
    }

    setToken(token){
        let user = new User();
        if(token){
            localStorage.setItem("user-token", token);
        }else{
            localStorage.removeItem("user-token");
        }
    }
    isExpired(){
        let expired: boolean = false;

        if(_.isNull(this.getToken())){
            expired = false;
        }else{
            let tokenExpiration = jwt_decode(this.getToken()).exp;
            let diff = moment().diff(moment.unix(tokenExpiration));
            if(diff > 0){
                expired = true;
            }
        }

        return expired;
    }

    isAuthenticated(){
        if(this.getToken()){
            return true;
        }

        return false;
    }
}