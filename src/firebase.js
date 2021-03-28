import firebase from 'firebase';
const path = require('path')
const dotenv = require('dotenv').config();

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

function getAvg(){
    DB.ref("allScore").once("value")
        .catch(console.error)
        .then(snapshot => {
            let allScore = snapshot.val();
            let avgScore = {
                fuel: 0,
                home: 0,
                food: 0,
                waste: 0,
                total: 0
            }
            if (!allScore) {
                return avgScore;
            }
            for(let i = 0; i < allScore.length; i++){
                avgScore["fuel"] += allScore[i]["fuel"]/allScore.length;
                avgScore["home"] += allScore[i]["home"]/allScore.length;
                avgScore["food"] += allScore[i]["food"]/allScore.length;
                avgScore["waste"] += allScore[i]["waste"]/allScore.length;
                avgScore["total"] += (allScore[i]["fuel"] + allScore[i]["home"] + allScore[i]["food"] + allScore[i]["waste"])/allScore.length;
            }
            return avgScore;
        })
}

let firebaseApp = {
    pushScore: pushScore,
    getAllScore: getAllScore,
    getAvg: getAvg
};

export default firebaseApp;