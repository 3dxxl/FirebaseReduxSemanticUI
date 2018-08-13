
import React, { Component } from 'react';

import { Button} from 'semantic-ui-react';

import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import {actionCreators} from './MeineActions';

export class Hauptseite  extends Component {

    

//Hier sage ich mit componentDidMount, das wenn der Client nicht der user ist soll er auf die erste Seite landen
    componentDidMount() {
        let user = JSON.parse(localStorage.getItem("react-localStorage-user"));
        if (!user) {
            this.props.history.push("/")
        }
    }



//hiermit hole ich mir die Änderung aus dem jeweiligen state heraus und setze eine if Abfrage dran
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

           </div>
        );
    }
}

function mapStateToProps (state) {
    return {istAusgeloggt: state.istAusgeloggt}
}
  
//wichtig: ich musste heir SignIn eintragen anstatt (App)

export default withRouter(connect(mapStateToProps, actionCreators)(Hauptseite))
