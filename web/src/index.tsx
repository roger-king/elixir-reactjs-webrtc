import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, broswerHistory} from 'react-router';
import {Provider} from 'react-redux';
import {configureStore} from './app/Store';
import routes from './app/routes';

const store = new configureStore().create();

ReactDOM.render(
    <Provider>
        <Router history={broswerHistory} routes={routes}/>
    </Provider>,
    document.getElementById("root")
);