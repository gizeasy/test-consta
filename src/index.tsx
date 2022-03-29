import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from '@/containers/App';
import reportWebVitals from './reportWebVitals';
import { reatomContext } from '@reatom/react';
import { store } from '@/modules/app';
import { RouterProvider } from 'react-router5';
import { router } from '@/modules/route';

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <reatomContext.Provider value={store}>
        <App />
      </reatomContext.Provider>
    </RouterProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
