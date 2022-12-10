import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './redux/store';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { api } from './redux/api/apiSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ApiProvider api={api}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApiProvider>
  </Provider>
);
