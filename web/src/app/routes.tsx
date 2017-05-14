import * as React from 'react';
import {Route} from 'react-router';
import {App} from './app';
import {Home, Login, Signup} from "./containers";

export default (
    <App>
        <Route exact={true} path="/" component={Login}/>
        <Route exact={true} path="/signup" component={Signup}/>
        <Route exact={true} path="/home" component={Home}/>
    </App>
);