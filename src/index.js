import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// State
global.data = require("./data.json");

// import firebaseApp from './firebase';

// let score = [
//   {fuel: 10,
//    home: 10,
//    food: 10,
//    waste: 10}
// ]

// firebaseApp.DB.ref("allScore").set({score}).then(console.log("pushed!"));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
