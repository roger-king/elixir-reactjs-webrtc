import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route} from 'react-router';
import {createBrowserHistory} from 'history';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './app/data/Reducers';

// Import Application Components
import { App } from './app/App';
import { HomeComponent as Home } from './app/scenes/Home/Home.Component';

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
            <App>
                <Route path="/" component={Home}/>
            </App>
        </Router>
    </Provider>,
    document.getElementById("root")
);