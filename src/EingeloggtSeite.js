
import React, { Component } from 'react';

import { Button, Table, Icon} from 'semantic-ui-react';

import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import {actionCreators} from './MeineActions';

//http Protokolle / Requests
import {putFunktion} from './PutFunk';
import {postFunktion} from './PostFunk';
import {getFunktion} from './GetFunk';
import {deleteFunktion} from './DeleteFunk';


export class Hauptseite  extends Component {


    constructor(props){
        super(props);
        this.state = {
                
                clients: [],
               // grad: 1,
               executed: 0

               
              };
        };


//Hier sage ich mit componentDidMount, das wenn der Client nicht der user ist soll er auf die erste Seite landen
     componentDidMount() {
        let user = JSON.parse(localStorage.getItem("react-localStorage-user"));
        if (!user) {
            this.props.history.push("/")
        };
        this.fetchClients()
    }



     fetchClients = () => {
      //Hier hole ich den Array aus fer Firebase raus
      fetch("https://reactsema.firebaseio.com/clients.json")
      
        .then(res => res.json())
          .then(
            (res) => {
              this.setState({
                clients: res
          });
        })
    }
      

   
    



      //hiermit hole ich mir die Änderung aus dem jeweiligen state heraus und setze eine if Abfrage dran, 
      //dann kann ich den Client seinen LocalStorage löschen und Ihn somit auslogen und auf die Startseite 
      //bringen
      componentWillReceiveProps(nextProps) {

        if (nextProps.istAusgeloggt){
          localStorage.clear();
          console.log(alert("Sie sind jetzt ausgeloggt")); 
          this.props.history.push("/");
        }

        /* else if (nextProps.gradErhöhen){
          this.fetchClients();

        } */

      }     

      

      

      componentDidUpdate() {
       // var executed = false;
        //hier muss ich den parameter an die 
        //putFunktion weiter geben this.props.grad, damit ich die Änderung
        // über die props an die putFunktion weitergeben kann
        putFunktion(this.props.grad);
        /* if( !this.state.executed ) {
          this.fetchClients(); 
          this.setState({executed: true});
         // this.setState({ executed: this.state.executed + 1  });
       }  */

      /*   while (this.state.executed < 1) {
       // this.fetchClients(); 
        this.setState({executed: this.state.executed +1 });
    }  */

     
}

      

    
    

    /* handleClick = () => {
      
      this.props.gradErhöhen();
      
      this.fetchClients();

      putFunktion(this.props.grad);


      console.log(this.props.grad);

    } */


    handleClick = () => {

      this.props.gradErhöhen();

      /* var increment = 5.5;

      
      if(this.state.clients[3]){
      increment = this.state.clients[3].grad +5.5 
      }
      
      //Hier fürge ich die externe Funktion ein putFunktion und übergebe ihr den parameter increment
      putFunktion(increment); */

      //this.fetchClients();
      //die for schleife  habe ich eingefügt, da die Daten öfters geholt werden muessen damit sich 
      //sich das Frontend aktualisiert
      for (var i = 0; i < 3; i++) {
        this.fetchClients();
           } 

      
      }

   



    render() {
      //console.log(this.state.clients)
        return (


            <div>

            <h2>Du bist eingeloggt, das ist die HauptSeite</h2>
            {/* <Button 
            onClick={
                event => {
                             ausloggfunktion();
                    this.props.ausLoggAction();
                }
            }
            >Ausloggen</Button> */}

            <Button onClick={this.props.ausLoggAction}>Ausloggen</Button>

              <Button onClick={getFunktion}>GET</Button>
              
            <Button onClick={postFunktion}>POST</Button>

            <Icon ></Icon>

            {/*   
            externe Funktionen kann ich so nicht anbinden!!
            <Button onClick={this.putFunktion}>PUT</Button>
            <Button onClick={()=>this.putFunktion}>PUT</Button>*/}

            {/* So kann man externe Funktionen anbieten, die erste ist einfacher:
             <Button onClick={putFunktion}>PUT</Button>
             <Button onClick={()=>putFunktion()}>PUT</Button>
            */}
            <Button onClick={putFunktion}>PUT</Button>
            <Button onClick={deleteFunktion}>DELETE</Button>


            

            <h1>Daten aus der Firebase Cloud</h1>
            {/* Hier lege ich die Überschriften der Tabellen fest */}
            <Table celled>
			    <Table.Header>
			      <Table.Row>
            {/* Die Überschriften kann man individuel schreiben, sollte jedoch mit den Daten im Server 
                übereinstimmen. Die Reihenfolge hier ist die gleiche wie im Browser */}
                    <Table.HeaderCell>Grad</Table.HeaderCell>
                    <Table.HeaderCell>Time</Table.HeaderCell>
			        <Table.HeaderCell>Name</Table.HeaderCell>
			        <Table.HeaderCell>Company</Table.HeaderCell>
			        <Table.HeaderCell>Email</Table.HeaderCell>
			        <Table.HeaderCell>Gender</Table.HeaderCell>
			        <Table.HeaderCell>Age</Table.HeaderCell>
			        <Table.HeaderCell>Address</Table.HeaderCell>
			        <Table.HeaderCell>Phone</Table.HeaderCell>
			      </Table.Row>
			    </Table.Header>
            {/* Im Body kommt der Inhalt. Dieser wird mit der map() Funktion erstellt, 
                dieser Funktion wird das Array Element übergeben mit this.state.map()
                , die Funktion wird mit einer Arrow Funktion weitergeführt und als 
                Parameter werden item & key übergeben this.state.map((item, k) =>{}) */}
			    <Table.Body>
			    	{this.state.clients.map((item, k) =>
                  <Table.Row key={k}>{/*dem Table.Row wird das Key übergben*/}
                    {/*der Table.Cell wird der item Parameter übergeben u. der dazu gehörende Wert aus der Firebase Datenbank*/}
                    <Table.Cell>{item.grad}</Table.Cell>
                    <Table.Cell>{item.time}</Table.Cell>
			        <Table.Cell>{item.name}</Table.Cell>
			        <Table.Cell>{item.company}</Table.Cell>
			        <Table.Cell>{item.email}</Table.Cell>
			        <Table.Cell>{item.gender}</Table.Cell>
			        <Table.Cell>{item.age}</Table.Cell>
			        <Table.Cell>{item.address}</Table.Cell>
			        <Table.Cell>{item.phone}</Table.Cell>
			      </Table.Row>
			      )}
			    </Table.Body>
			  </Table>

                

                  <button className="ui icon button" 
                  onClick={this.handleClick}
                  >Grad erhöhen
                    <br/>
                    <Icon className='plus icon' size='large' color='green'/>
                  </button>

                  <button className="ui icon button">Grad reduzieren
                  <br/>
                    <Icon className='minus' size='large' color='red'/>
                  </button>

           </div>
        );
    }
}

export function mapStateToProps (state) {
    return {istAusgeloggt: state.istAusgeloggt, grad: state.grad}
}
  
//wichtig: ich musste heir Hauptseite eintragen anstatt (App)

export default withRouter(connect(mapStateToProps, actionCreators)(Hauptseite))
