import React, { Component } from "react";
import './calculatrix.scss';

class PressButton extends Component {

    pressButton = e => {
        this.props.pressButton(e.target.name)
    };

    render() {
        return (

            <div>
                <button name="1" onClick={this.props.pressButton}>1</button>

            </div>


        )
    }
}

export default PressButton;