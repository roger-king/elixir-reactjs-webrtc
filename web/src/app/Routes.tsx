import * as React from 'react';
import {Route} from 'react-router';
import {App, Home, Signup} from "./containers";

export default (
    <App>
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/signup" component={Signup}/>
    </App>
);