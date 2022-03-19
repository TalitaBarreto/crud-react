import firebase from 'firebase'



const firebaseConfig = {
    apiKey: "AIzaSyCqI9KPl75uy4jjHiZDu5hoGuEmOKczAZM",
    authDomain: "estudos-9debd.firebaseapp.com",
    projectId: "estudos-9debd",
    storageBucket: "estudos-9debd.appspot.com",
    messagingSenderId: "549237620458",
    appId: "1:549237620458:web:736c8dd586fbbaae14e193"
};  

let fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref()