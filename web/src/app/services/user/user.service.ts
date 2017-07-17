import { API } from './../../app.constants';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

/**
 * UserService
 * Service to do User things against the API
 */

export class UserService {
    private token_name: string = 'huddle-auth-token';

    /**
     * @function authenticate
     * @param email
     * @param password
     * Log your user in to authenticate to use APIs 
     */

    public authenticate(email: string, password: string) {
        let vm = this;

        return new Promise((resolve, reject) => {
            axios.post(API.base + API.auth.login, {
                email: email,
                password: password
            }).then((res: any) => {
                vm.setToken(res.data.meta.token);
                console.log(res);
                resolve(res);
            }).catch((err) => {
                if (err) reject(err);
            });
        });
    }

    public logout() {
        // Remove auth-token from localstorage
        let vm = this;
        let cb = { status: 200, msg: 'logged out.' };
        if (vm.getToken) {
            window.localStorage.removeItem(vm.token_name);
        } else {
            cb.status = 500;
            cb.msg = 'no auth-token available'
        }

        return cb;
    }

    public get() {
        // Get the current user from localstorage.
    }

    public delete(id: number, password: string) {
        // delete user after authing their password to delete account;
    }

    public isAuthenticated() {
        let vm = this;
        let isExpired: boolean = false;

        if (vm.getToken()) {
            console.log(jwt_decode(vm.getToken()));
        } else {
            isExpired = false;
        }

        return isExpired;
    }

    public getToken() {
        return window.localStorage.getItem(this.token_name);
    }

    private setToken(token) {
        let vm = this;
        if (token) {
            window.localStorage.setItem(vm.token_name, token);
        } else {
            window.localStorage.removeItem(vm.token_name);
        }
    }

}
