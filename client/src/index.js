import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LogApp from './LogApp';

ReactDOM.render (
    <div>
        <LogApp />
        <App />
    </div>

    ,document.getElementById('root')
    // ,document.querySelector('#root')    
);