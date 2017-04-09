import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router} from 'react-router';
import {createBrowserHistory} from 'history';
import {Provider} from 'react-redux';
import { configureStore } from './app/redux/store';
import { ReduxAsyncConnect } from 'redux-connect';

// Import Application Route
import routes from './app/Routes';

const browserHistory =  createBrowserHistory();

// Create Store
const store = configureStore(
    browserHistory
);

ReactDOM.render(
    <Provider store={store} key="provider">
        <Router history={browserHistory}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById("root")
);