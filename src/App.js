import React, { Component } from 'react';
import './App.css';
import Signin from './SignIn';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';


import Hauptseite from './EingeloggtSeite';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="content">
        <Route exact path="/" component={Signin} />
        <Route exact path="/Hauptseite" component={Hauptseite} />
        </div>
      </Router>
    );
  }
}





export default App;
