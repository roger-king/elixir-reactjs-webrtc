"use strict";
import * as React from 'react';
import {LoginComponent as Login} from './../../components';

interface IProps {
    credentials: any,
    doLogin: any
}


export class LoginContainer extends React.Component<any, any>{
    render(){
        return(
            <Login> </Login>
        )
    }
}