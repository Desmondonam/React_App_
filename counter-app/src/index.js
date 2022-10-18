import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from "./registerServiceWorker";
import Counter from './components/counter';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
