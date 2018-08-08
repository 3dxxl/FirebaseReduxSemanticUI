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


 export loginUser = (email, password) => {
    try {
        var that = this;
        firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
            //Start Profile Page
            that.props.history.push("/Hauptseite")

        })

    }

    catch (error) {
        console.log(error.toString(alert("Die Eingabe ist falsch, oder Sie sind noch nicht angemeldet")))
    }
}