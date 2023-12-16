// import 'babel-core/register'
// import 'babel-polyfill'

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app';
import { Provider } from 'mobx-react';

import { 
  BrowserRouter as Router,
} from 'react-router-dom';

// import { User } from './store'
// const { user } = window.__INITIAL_STATE__

// const stores = {
//   user: new User(user.users)
// }

const jsx = (
  <Provider>
    <Router>
      <App />
    </Router>
  </Provider>
);
  
const app = document.getElementById('app');
ReactDOM.hydrate(jsx, app);

