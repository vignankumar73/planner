import React from 'react';
import ReactDOM from 'react-dom';
//import Home from './Components/Home';
import './index.css'
//import './css/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import '../node_modules/tailwindcss/dist/tailwind.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Routings from './Routings';




ReactDOM.render(
  <React.StrictMode>
    <Routings />
  
  </React.StrictMode>,
  document.getElementById('root')
);

