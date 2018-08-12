
import React, { Component } from 'react';

export class Hauptseite  extends Component {

//Hier sage ich mit componentDidMount, das wenn der Client nicht der user ist soll er auf die erste Seite landen
    componentDidMount() {
        let user = JSON.parse(localStorage.getItem("react-localStorage-user"));
        if (!user) {
            this.props.history.push("/")
        }

    }

    render() {
        return (

            <div>
            <h2>Du bist eingeloggt, das ist die HauptSeite</h2>

           </div>
            
        );
    }
}

export default Hauptseite;

