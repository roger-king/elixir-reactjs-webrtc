import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route} from 'react-router';
import {createBrowserHistory} from 'history';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './app/Reducers';
// Import Application Components
import routes from './app/Routes';

const browserHistory =  createBrowserHistory();

// Create Store
const environment: any = window || this;
const store = createStore(combineReducers, compose(
    applyMiddleware(thunk),
    //environment.devToolsExtension ? environment.devToolsExtension() : f => f
));

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById("root")
);