import React, { Component } from 'react';
import KeyTouch from './KeysTouch';
import Output from './Output';
import './App.css';
import Exemple from './Exemple';

class App extends Component {
  state = {
    result: '' /*State initial*/
  }

  /*Méthode pour l'affichage des touches au click avec en parametre bottonName*/
  buttonPressed = buttonName => {
    if (buttonName === '=') {
      this.calculate(); /*Appel de la méthode calculate*/
    } else if
      (buttonName === 'C') {
      this.reset(); /*Appel de la méthode reset*/
    } else if
      (buttonName === 'CE') {
      this.backSpace(); /*Appel de la méthode backSpace*/
    } else
      this.setState({
        result: this.state.result + buttonName 
      })
  };

  /*Les fonctions*/
  backSpace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };

  reset = () => {
    this.setState({
      result: ""
    });
  };

  /* eval() permet d'évaluer du code JavaScript représenté sous forme d'une chaîne de caractères */
  calculate = () => {
    this.setState({
      result: eval(this.state.result)
    });
  }
/*L'affichage*/
  render() {
    return (
      <div className="App">
        <div className="calc-body">
        <Exemple />
          <Output result={this.state.result} />
          <KeyTouch buttonPressed={this.buttonPressed} />
        </div>
      </div>

    )
  }
}

export default App;
