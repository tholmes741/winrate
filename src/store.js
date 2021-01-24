import { createStore, combineReducers } from 'redux';
import { records } from './reducers';

const reducers = {
    records
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);