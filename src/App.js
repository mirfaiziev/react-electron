import React, { Component } from 'react';
//import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './screens/Home'
import Result from './screens/Result'
import 'materialize-css/dist/css/materialize.min.css'
import Waiting from './screens/Waiting';

class App extends Component {
  state = {
    step: 0
  }

  setStep = (step) => {
    this.setState({
      step
    })
  }

  render() {
    let page = <Home setStep={this.setStep} />
    switch (this.state.step) {
      case 1:
        page = <Waiting setStep={this.setStep} />;
        break;
      case 2:
        page = <Result setStep={this.setStep}/>;
        break;
    }

     return (
      <div className="App">
        <span className="noprint">
         <h1>Калькулятор кармы v1.0.3</h1>
        </span>
        {page}
      </div>
    );
  }
}

export default App;
