import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import getResults from "./utils/api";

getResults()
.then(response => {
  ReactDOM.render(
    <React.StrictMode>
      <App results={response.data.results} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}) 


