//import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import reducer from './redux/reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

let myStore=createStore(reducer,applyMiddleware(thunk));
ReactDom.render(<Provider store={myStore}><App></App></Provider>,
document.getElementById("root")
);