import React, { Component } from 'react';

import { withRouter } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';

import {connect} from 'react-redux';
import {actionCreators} from './MeineActions';
import { loginUser } from './FirebaseLoggin';

export class SignIn extends Component {

    constructor(props) {
        super(props);

       this.state = {
            email: '',
            password: ''
        } 

        this.handleChange = this.handleChange.bind(this);
        this.handleChangepas = this.handleChangepas.bind(this);
    }

    handleChange(event) {
        this.setState({ email: event.target.value });
    }

    handleChangepas(event) {
        this.setState({ password: event.target.value });
    }

    zweiFunktionen = () => {
        loginUser(this.state.email, this.state.password)
            .then(
                (response) => {
                    console.log(response)
                    this.props.history.push("/Hauptseite")                    
                }
            )
            
            .catch(error => console.log(error.toString(alert("Die Eingabe ist falsch, oder Sie sind noch nicht angemeldet"))))
    }


    render() {
        console.log(this.state)
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
                            <Image src={require('./logo.svg')} /> Log-in to your account
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' type='email'
                                    onChange={this.handleChange}
                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    onChange={this.handleChangepas}

                                />

                                <Button color='teal' fluid size='large'
                               
                                    onClick={
                                        event => {
                                            this.zweiFunktionen();
                                            this.props.einLoggAction();
                                        }
                                    }
                                >
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                        {/* 
                            <Message>
                                New to us? <a href='#'>Sign Up</a>
                            </Message> 
                        */}
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {istEingeloggt: state.istEingeloggt}
}
  
//wichtig: ich musste heir SignIn eintragen anstatt (App)

export default withRouter(connect(mapStateToProps, actionCreators)(SignIn))