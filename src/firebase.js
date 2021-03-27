require("dotenv").config();
var firebase = require('firebase');
require('firebase/database');

firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    projectId: process.env.FIREBASE_PROJECT_ID,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
});

firebase.initializeApp({
    apiKey: process.env.APIKEY,
    projectId: process.env.PROJECTID,
    databaseURL: process.env.DATABASEURL
});

module.exports = {
    DB: firebase.database(),
};