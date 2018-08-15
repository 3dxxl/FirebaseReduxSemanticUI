import * as firebase from 'firebase';


export function getFunktion() {

    // Man braucht eine Datenbank Instanz aus dem Firebase Objekt
    var database = firebase.database();

    var clients = database.ref('clients/');
    //Hier gebe ich den genauen Pfad an den ich anzeigen möchte
    var ref = database.ref("clients/4/age" /* + id */);
    ref.on("value", gotData);


    function gotData(data) {
        var clients = data.val();
        // Grab the keys to iterate over the object
        var keys = Object.keys(clients);
      
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          // Look at each fruit object!
          var client = clients[key];
        }
        console.log(clients);


        

      }


      

}