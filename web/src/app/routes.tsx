import * as React from 'react';
import {Route} from 'react-router';
import {App} from './app';
import {Home} from "./containers";

export default (
    <App>
        <Route exact={true} path="/home" component={Home}/>
    </App>
);