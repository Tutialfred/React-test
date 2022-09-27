import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';

// Styles↓
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <StrictMode>
            <BrowserRouter>
                  <div className='container'>
                        <App />
                  </div>
            </BrowserRouter>
      </StrictMode>
);

// Instalando bootstrap y react-router-dom