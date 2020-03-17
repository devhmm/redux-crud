import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './store';
// Provider Prop 
// store 
const APPSTORE = <Provider store={store}>
    <App />
</Provider>
ReactDOM.render(APPSTORE, document.getElementById('root'));
