import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app';
import { Provider } from 'mobx-react';
import './client.css';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';

const app = document.getElementById('root');

// if(app) {
//   const root = createRoot(app);
//   root.render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
// }

const jsx = (
  <Provider>
    <App key={0} className={''} value="0" onClick={function (): void {
      throw new Error('Function not implemented.');
    } } />
  </Provider>
);
  
// eslint-disable-next-line react/no-deprecated
ReactDOM.hydrate(jsx, app);

