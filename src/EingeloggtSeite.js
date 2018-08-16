
import React, { Component } from 'react';

import { Button} from 'semantic-ui-react';

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
            };
        };


//Hier sage ich mit componentDidMount, das wenn der Client nicht der user ist soll er auf die erste Seite landen
     componentDidMount() {
        let user = JSON.parse(localStorage.getItem("react-localStorage-user"));
        if (!user) {
            this.props.history.push("/")
        };

    
//Hier hole ich den Array aus fer Firebase raus
/* fetch("https://reactsema.firebaseio.com/clients.json")
      
    .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            clients: result.clients
          });
        } */

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

    }     




    render() {
        return (


            <div>

            <h2>Du bist eingeloggt, das ist die HauptSeite</h2>
            {/* <Button 
            onClick={
                event => {
                    this.ausloggfunktion();
                    this.props.ausLoggAction();
                }
            }
            >Ausloggen</Button> */}

            <Button onClick={this.props.ausLoggAction}>Ausloggen</Button>

              <Button onClick={getFunktion}>GET</Button>
              
            <Button onClick={postFunktion}>POST</Button>

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

            <h1>ARRAY</h1>
            <ul>
               {this.state.clients}
            </ul>

           </div>
        );
    }
}

function mapStateToProps (state) {
    return {istAusgeloggt: state.istAusgeloggt}
}
  
//wichtig: ich musste heir SignIn eintragen anstatt (App)

export default withRouter(connect(mapStateToProps, actionCreators)(Hauptseite))
