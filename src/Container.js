import React, {Component} from 'react';
import { Container} from 'semantic-ui-react';

//mein eigenes css
import './css.css';


class ContainerKlasse extends Component {


    render() {

        return(

             
        <div style={{textAlign: "center"}}>
            <Container style={{width: "33.33%", float:"left"}}>
              <p style={{backgroundColor: "green", height: 400, margin: 5}}>
                Links
              </p>
              <br/>
            </Container>

            <Container style={{width: "33.33%", float:"left"}}>
              <p style={{backgroundColor: "green", height: 400, margin: 5}}>
                Mitte
              </p>
              <br/>
            </Container>

            <Container style={{width: "33.33%", float:"left"}}>
              <p style={{backgroundColor: "green", height: 400, margin: 5}}>
                Rechts
              </p>
              <br/>
            </Container>

        </div>

        

        );
    }
}

export default ContainerKlasse;

