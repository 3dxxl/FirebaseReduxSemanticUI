export function getFunktion() {

  //Hier muss ich die Adresse zu der Datenbank in firebase suchen und einfügen, wichtig
  //bei der URL muss man ein .json einfügen. 
  fetch('https://reactsema.firebaseio.com/clients.json')
  .then(response => response.json())
  .then(json => console.log(json))


      

}