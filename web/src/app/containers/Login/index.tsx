"use strict";
import * as React from 'react';
import {LoginComponent as Login} from './../../components';

interface IProps {
    credentials: any,
    doLogin: any
}
export class LoginContainer extends React.Component<IProps, void>{
    render(){
        return(
            <Login credentials={this.props.credentials} doLogin={this.props.doLogin}> </Login>
        )
    }
}