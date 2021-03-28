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
            // console.log(scores);
            let allScore = [];
            if(snapshot.val()) allScore = snapshot.val();
            // console.log(allScore);
            allScore.push(scores);
            DB.ref("allScore").set(allScore)
                .catch(console.error)
        })
}

async function getAllScore(){
    let val = 0;
    await DB.ref("allScore").once("value")
        .catch(console.error)
        .then(async snapshot => {
            val = snapshot.val();
            return snapshot.val();
        })
    // console.log('done');
    return val;
}

async function getAvg(){
    let val = 0;
    await DB.ref("allScore").once("value")
        .catch(console.error)
        .then(async snapshot => {
            let allScore = await snapshot.val();
            let avgScore = {
                fuel: 0,
                home: 0,
                food: 0,
                waste: 0,
                total: 0
            }
            if (!allScore) {
                val = avgScore;
                return avgScore;
            }
            for(let i = 0; i < allScore.length; i++){
                avgScore["fuel"] += allScore[i]["fuel"]/allScore.length;
                avgScore["home"] += allScore[i]["home"]/allScore.length;
                avgScore["food"] += allScore[i]["food"]/allScore.length;
                avgScore["waste"] += allScore[i]["waste"]/allScore.length;
            }
            avgScore["total"] += (avgScore["fuel"] + avgScore["home"] + 
                avgScore["food"] + avgScore["waste"]) / 4;
            // console.log(avgScore);
            val = avgScore;
            return avgScore;
        })
    return val;
}

let firebaseApp = {
    pushScore: pushScore,
    getAllScore: getAllScore,
    getAvg: getAvg
};

export default firebaseApp;