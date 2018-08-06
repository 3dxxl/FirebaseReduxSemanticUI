import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'



class App extends Component {

  constructor(props){

    super(props);
    this.state = {

      email: "",
      password:""

    }

/* Muss ich erstellen, da ich sonst die Fehlermeldung erhalte "is not a Function" */
    this.passwordEingabe = this.passwordEingabe.bind(this);
    this.emailEingabe = this.emailEingabe.bind(this);



  }

  passwordEingabe (event) {
    this.setState({password: event.target.value});

  }

  emailEingabe (event) {
    this.setState({email: event.target.value});

  }


  render() {
    return (
      <div className='login-form'>
      {/*
        Heads up! The styles below are necessary for the correct render of this example.
        You can do same with CSS, the main idea is that all the elements up to the `Grid`
        below must have a height of 100%.
      */}
      <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo.png' /> Log-in to your account
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' type='email' 
               value={this.state.email}
               onChange={this.emailEingabe}/>
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                value={this.state.password}
               onChange={this.passwordEingabe}
              />
  
              <Button color='teal' fluid size='large'>
                Login
              </Button>
            </Segment>
          </Form>
          {/* <Message>
            New to us? <a href='#'>Sign Up</a>
          </Message> */}
        </Grid.Column>
      </Grid>
    </div>


    );
  }
}

export default App;
