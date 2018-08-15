
import React, { Component } from 'react';

import { Button} from 'semantic-ui-react';

import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import {actionCreators} from './MeineActions';

//http Protokolle / Requests
import {putFunktion} from './PutFunk';
import {postFunktion} from './PostFunk';
import {getFunktion} from './GetFunk';

import * as firebase from 'firebase';


export class Hauptseite  extends Component {


    constructor(props){
        super(props);
        this.state = {
                
                age: 10,
            };
        };


//Hier sage ich mit componentDidMount, das wenn der Client nicht der user ist soll er auf die erste Seite landen
    componentDidMount() {
        let user = JSON.parse(localStorage.getItem("react-localStorage-user"));
        if (!user) {
            this.props.history.push("/")
        };

        //Hier wird die Datenbank initialisiert von Firebase
        var database = firebase.database();
        //Hier gebe ich den genauen Pfad an den ich anzeigen möchte
        var ref = database.ref("clients/4/age" /* + id */);
        ref.on('value', snap => {
            this.setState({
                age:snap.val()
            });
        });

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

            <h1>{this.state.age}</h1>

           </div>
        );
    }
}

function mapStateToProps (state) {
    return {istAusgeloggt: state.istAusgeloggt}
}
  
//wichtig: ich musste heir SignIn eintragen anstatt (App)

export default withRouter(connect(mapStateToProps, actionCreators)(Hauptseite))
