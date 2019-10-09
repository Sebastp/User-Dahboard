import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css'

import App from './components/App'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <App />,
  document.getElementById('index')
);


serviceWorker.unregister();
