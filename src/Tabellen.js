
import React, { Component } from 'react';

import { Table, Icon} from 'semantic-ui-react';

import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import {actionCreators} from './MeineActions';


export class Tabellen  extends Component {

    render() {

        return(

                <div>

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
                    <Table.Cell>{this.props.grad}</Table.Cell>
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


                </div>

        );
    }
}

export default Tabellen;