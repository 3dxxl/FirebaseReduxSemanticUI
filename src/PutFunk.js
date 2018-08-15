//muss ich importieren um mit firebase zu kommunizieren
import * as firebase from 'firebase';

//Hiermit kann ich Daten in der JSON Datei auf der Datenbank von Firebase Ändern/Löschen oder Neue Hinzufuegen
export function putFunktion(adress, age, company, email) {
    // A post entry.
    var postData = {
      //uid: uid
      age: 36,
      email: "GANG@googlemail.com",
      address: "169 Rutledge Street, Konterra, Northern Mariana Islands, 8551"
    };
  
    // Hiermit kann ich einen Schlussel für jeden eintrag erstellen
   // var newPostKey = firebase.database().ref().child('Clients/0/').push().key;
  
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    //den schluessel kann ich dann hier hinzufuegen
    //die position im JSON File kann ich hier in der hierarchie angeben z.b. '/clients/0/'
    updates['/clients/4/' /* + newPostKey */] = postData;
  //  updates['/user-posts/' + uid + '/' + newPostKey] = postData;
  
    return firebase.database().ref().update(updates);
  }



    
    /* export const putFunktion =() => {

        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
              id: 1,
              title: 'Hallo Binjam',
              body: 'bar',
              userId: 1
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(response => response.json())
          .then(json => console.log(json))    
    }; */


