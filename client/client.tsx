import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app';
// import { Provider } from 'mobx-react';
import './client.css';
import { BrowserRouter } from 'react-router-dom';

const app = document.getElementById('root');

const jsx = (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
  
// eslint-disable-next-line react/no-deprecated
ReactDOM.hydrate(jsx, app);

