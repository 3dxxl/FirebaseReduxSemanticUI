import * as firebase from 'firebase';


export function postFunktion() {
    //hier muss ich die Hierarchie wo ich beginnen möchte in der JSON Datei eingeben z.b. 'clients/' 
firebase.database().ref('clients/4/' /* + userId */).set({
    adresse: 'Gangster',
    email: 'email',
    age : 12
  }, function(error) {
    if (error) {
      alert("Das war wohl nix")
    } else {
        alert("Mensch GEIL, das hat ja geklappt!")
    }
  });
}