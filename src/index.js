import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import App from './app/App';
import './index.scss';
import { StoresProvider } from './stores';

ReactDOM.render(
  <React.StrictMode>
    <StoresProvider>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </StoresProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

