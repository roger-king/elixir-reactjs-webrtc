"use strict";

export interface ILogin {
    username: string,
    password: string,
    isFetching: boolean
}

export interface ILoginAction{
    type: string,
    payload?:{
        jwt?: any,
        message?: any
    }
}