import React, {Component} from 'react';
import './App.css';

class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date().toLocaleString()
      };
    }
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      this.setState({
        time: new Date().toLocaleString()
      });
    }
    render() {
      return (
          <div>
          <p className="clockText">Digitale Uhrzeit</p>
        <p className="App-clock">
          {this.state.time}
        </p>
        </div>
      );
    }
  }

  export default Clock;