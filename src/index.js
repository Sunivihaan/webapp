import { Provider } from 'mobx-react'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from './App';
import Meta from './meta';

import * as serviceWorker from './serviceWorker';
import persistentStore from './stores/PersistentStore'

ReactDOM.render(
  <React.StrictMode>
    <Provider {...persistentStore}>
      <BrowserRouter>
          <Meta/>
          <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
