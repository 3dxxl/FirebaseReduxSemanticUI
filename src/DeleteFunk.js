export function deleteFunktion() {

    //Hier muss ich die Adresse zu der Datenbank in firebase suchen und einfügen, wichtig
    //bei der URL muss man ein .json einfügen. Mit der DELETE Methode kann ich Daten löschen.
      fetch('https://reactsema.firebaseio.com/clients/5.json', {
      method: 'DELETE'
      })
  
      
    }