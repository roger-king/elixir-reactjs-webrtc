import * as React from 'react';
import {Route} from 'react-router';
import {App, Login, Home} from "./containers";

export default (
    <App>
        <Route exact={true} path="/" component={Home}/>
        <Route path="/login" component={Login}/>
    </App>
);