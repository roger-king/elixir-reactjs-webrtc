import * as React from 'react';
import {Route} from 'react-router';
import {App, Home, Signup, Huddle, Login} from "./containers";

export default (
    <App>
        <Route exact={true} path="/login" component={Login}/>
        <Route exact={true} path="/signup" component={Signup}/>
        <Route exact={true} path="/" component={Huddle}/>
    </App>
);