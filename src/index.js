// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Make sure this file exists
import App from './App.tsx'; // Make sure this file exists
// Make sure this file exists or remove if not used

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);


