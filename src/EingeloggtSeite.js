
import React, { Component } from 'react';

import { Button} from 'semantic-ui-react';



export class Hauptseite  extends Component {

    constructor(props) {
        super(props);
        
        // muss ich einfügen sonst geht die Funktion für den Button nicht
        this.ausloggfunktion = this.ausloggfunktion.bind(this);
    }

//Hier sage ich mit componentDidMount, das wenn der Client nicht der user ist soll er auf die erste Seite landen
    componentDidMount() {
        let user = JSON.parse(localStorage.getItem("react-localStorage-user"));
        if (!user) {
            this.props.history.push("/")
        }

    }

     ausloggfunktion () {
        localStorage.clear();
       console.log(alert("Sie sind jetzt ausgeloggt")) 
       this.props.history.push("/")

   }

    render() {
        return (


            <div>

            <h2>Du bist eingeloggt, das ist die HauptSeite</h2>
            <Button onClick={this.ausloggfunktion}>Ausloggen</Button>

           </div>
        );
    }
}

export default Hauptseite;

