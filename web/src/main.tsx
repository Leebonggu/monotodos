import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { makeServer } from './server';

const environment = process.env.NODE_ENV;

if (process.env.NODE_ENV!== "production") {
  makeServer({ environment });
} 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
