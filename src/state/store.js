import { compose, createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
}