import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app';
import { Provider } from 'mobx-react';
import './client.css';

const jsx = (
  <Provider>
    <App key={0} className={''} value="0" onClick={function (): void {
      throw new Error('Function not implemented.');
    } } />
  </Provider>
);
  
const app = document.getElementById('app');
// eslint-disable-next-line react/no-deprecated
ReactDOM.hydrate(jsx, app);

