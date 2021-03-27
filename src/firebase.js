import firebase from 'firebase';
require('dotenv').config()

// Configure Firebase.
const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    projectId: process.env.REACT_APP_PROJECTID,
    databaseURL: process.env.REACT_APP_DATABASEURL
};
firebase.initializeApp(config);
let firebaseApp = {DB: firebase.database()};

export default firebaseApp;