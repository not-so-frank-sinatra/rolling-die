import React, { Component } from 'react';
import './die.css';

const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six'];
class Die extends Component {
    render() {
        return (
            <i className={`Die fas fa-dice-${nums[this.props.face]} ${this.props.rolling && 'rolling'}`} />
        )
    }
}
export default Die;