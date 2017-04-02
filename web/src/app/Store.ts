import * as thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk.default)(createStore);
declare const module: { hot: any };

export default function configureStore(initialState: any = { counterReducer: 0 }, mod: any = module) : any {
    const store: any = createStoreWithMiddleware(rootReducer, initialState);

    if (mod.hot && typeof mod.hot.accept === 'function') {
        mod.hot.accept('./reducer', () => {
            const nextReducer = rootReducer;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}