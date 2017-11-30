import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

import Store from './store'
/*A wrapper for the app that's basically saying, "I'm now giving you access to the store" */
import { Provider } from 'react-redux'

/*let store = Store()  where its creating a new instance of it*/
let store = Store();


ReactDOM.render(
    /*This makes its available to the App*/
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
