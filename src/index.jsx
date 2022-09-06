import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import store from './store/store'
import './assets/css/tailwind.css';
import WebRoutes from './routes/WebRoutes'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WebRoutes  />
  </React.StrictMode>
);

