import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root._internalRoot.containerInfo.classList.add('page__content');

root.render(
  <App />
);

reportWebVitals();
