import React, { Component } from 'react';
import './App.css';
import Signin from './SignIn';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Hauptseite from './EingeloggtSeite';



export class App extends Component {

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
