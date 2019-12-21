import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import reducer from "./reducer/reducer";
import {Provider} from 'react-redux';
import './index.scss';
import App from './App';

const rootReducer = combineReducers(reducer);
const store = createStore(rootReducer);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
