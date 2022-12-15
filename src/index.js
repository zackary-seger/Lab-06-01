import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rootSave;

root.render(

    <React.StrictMode>

      <BrowserRouter>
        <App />
      </BrowserRouter>  

    </React.StrictMode>

);

reportWebVitals();

if (root) {
  rootSave = root;
} else {
  rootSave = undefined;
}

export {rootSave};