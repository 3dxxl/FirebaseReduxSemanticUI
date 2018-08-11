import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC9d_Qtdfyd6OvmUFzDTpGEiXeRIo1GHn8",
    authDomain: "reactsema.firebaseapp.com",
    databaseURL: "https://reactsema.firebaseio.com",
    projectId: "reactsema",
    storageBucket: "reactsema.appspot.com",
    messagingSenderId: "128838847496"
};
firebase.initializeApp(config);

//const muss ich zur funktion setzen, sonst gehts nicht
 export const loginUser = (email, password) => {
 
    return firebase.auth().signInWithEmailAndPassword(email, password);
    
}


