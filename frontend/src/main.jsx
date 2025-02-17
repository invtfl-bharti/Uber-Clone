import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import UserContext from './context/UserContext';


const rootElement = document.getElementById('root');


const root = ReactDOM.createRoot(rootElement);
root.render(
  <UserContext>
    <BrowserRouter>
    <App /></BrowserRouter>
  </UserContext>
        
      
);
