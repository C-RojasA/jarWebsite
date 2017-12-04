import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import firebase from 'firebase'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'
import 'jquery'
import 'font-awesome/css/font-awesome.css'

import routes from './routes';
import configureStore from './store/configureStore';
import intialState from './reducers/initialState';

firebase.initializeApp({
  apiKey: "AIzaSyB8NYeKrEzzwz9WFLe2GcCEGW0xaUsrUIQ",
  authDomain: "jorgealessandri-website.firebaseapp.com",
  databaseURL: "https://jorgealessandri-website.firebaseio.com",
  projectId: "jorgealessandri-website",
  storageBucket: "jorgealessandri-website.appspot.com",
  messagingSenderId: "1077224106298"
})


const store = configureStore(intialState);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>,
  
    document.getElementById('root')
  );
