import 'core-js/fn/object/assign';
import 'babel-polyfill';
import 'font-awesome-webpack';

import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';

// Render the App component into the dom

import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {
    browserHistory
} from 'react-router';
import { syncHistoryWithStore, routerReducer as routing } from 'react-router-redux';
import Routes from './routes';
import store from './store/index';
import history from './store/history';


injectTapEventPlugin();

// //////////////////////
// // Render
let render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Routes history={history} />
        </Provider>, 
    document.getElementById('app'));
};

if (module.hot) {
    const renderNormally = render;
    const renderException = (error) => {
        const RedBox = require('redbox-react');
        ReactDOM.render(<RedBox error={error} />, document.getElementById('app'));
    };
    render = () => {
        try {
            renderNormally();
        } catch (error) {
            console.error('error', error);
            renderException(error);
        }
    };
    module.hot.accept('./routes/index', () => {
        render();
    });
}

render();
