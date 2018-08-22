  export function putFunktion(grad) {

    //hier muss ich erst ein objekt date an die funktion date() übergeben um später dann ein besseres 
    //Design für das Datum zu erhalten z.b. date.toDateString()
    var date = new Date();

    //console.log(grad),

  //Hier muss ich die Adresse zu der Datenbank in firebase suchen und einfügen, wichtig
  //bei der URL muss man ein .json einfügen. 
  //Falls du eine neue Sparte z.b. in Reihe 5 einfügen möchtest musst du diese einfach
  //an der URL die zahl dran hängen. Mit der PUT Methode kann ich Daten ändern/neu anlegen.
  fetch('https://reactsema.firebaseio.com/clients/3.json', {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    

    body: JSON.stringify({
      grad: grad, 
      time: date.toLocaleTimeString(),
    }),
  })
  .then(response => response.json())
  .then(json => console.log(json))


  

  }
  
