import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router} from 'react-router';
import {createBrowserHistory} from 'history';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './app/reducer';

// Import Application Route
import routes from './app/Routes';

const browserHistory = createBrowserHistory();

// Create Store
const enhancer = window['devToolsExtension'] ? window['devToolsExtension']()(createStore) : createStore;
const store = enhancer(
    reducer, compose(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById("root")
);