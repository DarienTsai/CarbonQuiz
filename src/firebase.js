import firebase from 'firebase';
require('dotenv').config()

// Configure Firebase.
const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    projectId: process.env.REACT_APP_PROJECTID,
    databaseURL: process.env.REACT_APP_DATABASEURL
};
firebase.initializeApp(config);

let DB = firebase.database();

//in: score(object)
function pushScore(scores){
    DB.ref("allScore").once("value")
        .catch(console.error)
        .then(snapshot => {
            console.log(scores);
            let allScore = [];
            if(snapshot.val()) allScore = snapshot.val();
            console.log(allScore);
            allScore.push(scores);
            DB.ref("allScore").set(allScore)
                .catch(console.error)
        })
}

function getAllScore(){
    DB.ref("allScore").once("value")
        .catch(console.error)
        .then(snapshot => {
            return snapshot.val();
        })
}

let firebaseApp = {
    pushScore: pushScore,
    getAllScore: getAllScore
};

export default firebaseApp;