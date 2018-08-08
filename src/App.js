import React, { Component } from 'react';
import './App.css';
import Signin from './SignIn';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

import {connect} from 'react-redux';
import {actionCreators} from './MeineActions';

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



function mapStateToProps (state) {

  return {istEingeloggt: state.istEingeloggt}
}

export const AppContainer = connect(mapStateToProps, actionCreators)(App);

export default App;
