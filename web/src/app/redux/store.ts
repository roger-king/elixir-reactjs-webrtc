import {createStore, applyMiddleware, compose, Store} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { IStore } from './IStore';
import {Middleware} from "redux";

export function configureStore(history, initialState?: IStore): Store<IStore> {

    let middlewares: Middleware[] = [
        routerMiddleware(history),
        thunk,
    ];

    const composeEnhancers = (
        typeof window === 'object' &&
        (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

    const store = createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(...middlewares)
    ));

    return store;
}