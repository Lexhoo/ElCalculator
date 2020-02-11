import React, { Component } from 'react';
import './Exemple.css';

class Exemple extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prenom: "Sarah",
            nom: "Connor"
        }
    }
    backSpace = () => {
        this.setState({
          prenom: this.state.prenom.slice(0, -1),
          nom: this.state.nom.slice(0, -1),
        });
      };

    render() {
        return (
            <div className="text">
                <h1><button onClick={() => this.backSpace()}></button>{this.state.prenom} {this.state.nom}</h1>
            </div>
        )
    }
}


export default Exemple; 