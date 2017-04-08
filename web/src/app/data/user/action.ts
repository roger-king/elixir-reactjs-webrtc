"use strict";
import Action  from "./../Action";

export const LOGIN_ACTION = "LOGIN_ACTION";
export type LOGIN_ACTION = { username: string, password: string};

interface User {
    username: string,
    email: string,
    isOnline: boolean,
    status: string
}

const INITIAL_STATE: User = {
    username: "undefined",
    email: "undefined",
    isOnline: false,
    status: "offline"
};

export function login(username: string, password: string): Action<LOGIN_ACTION>{
    return {
        type: LOGIN_ACTION,
        payload:{
            username: username,
            password: password
        }
    }
}
