import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import items from './items';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<items />, document.getElementById('items'));
registerServiceWorker();
