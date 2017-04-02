"use strict";
import * as React from 'react';
//import * as axios from 'axois';
import './login.scss';

interface LoginProps{
    username: string
    password: string
}

export class LoginComponent extends React.Component<LoginProps, undefined>{
    constructor(props: LoginProps){
        super(props);
    }

    login(username: string, password: string){
        const APIURL = this.context.apiURL + '/api/users';
        let data = {
            username: username,
            password: password
        };

        //return axios.post(APIURL, data);
    }

    render(){
        return(
            <div className="container">
                <input type="text"/>
                <input type="password"/>
                <button >Login</button>
            </div>
        )
    }
}