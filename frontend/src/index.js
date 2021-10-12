import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//important
import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

//bearer token save
axios.defaults.headers.common['Authorization']='Bearer '+localStorage.getItem('token');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

