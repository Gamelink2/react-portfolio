import 'bootstrap/dist/css/bootstrap.min.css';
import './Website_Styling.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './Components/Navigation_Bar';
import {BrowserRouter} from 'react-router-dom';

const rootElement = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar/>
    </BrowserRouter>
  </React.StrictMode>
);
