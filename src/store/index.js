import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import home from '@/components/home/store';

const reducer = combineReducers({home});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
