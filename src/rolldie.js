import React, { Component } from 'react';
import Die from './die';
import './rolldie.css';

class Rolldie extends Component {
    constructor(props) {
        super(props);
        this.state = { die1: 1, die2: 2, rolling: false };
    }
    roll = () => {
        const rand1 = Math.floor(Math.random() * 6) + 1;
        const rand2 = Math.floor(Math.random() * 6) + 1;
        this.setState({ die1: rand1, die2: rand2, rolling: true });
        setTimeout(() => {
            this.setState({ rolling: false });
        }, 1000);
    }
    render() {
        return (
            <div className='rolldie'>
                <div className='rolldie-container'>
                    <Die face={this.state.die1} rolling={this.state.rolling} />
                    <Die face={this.state.die2} rolling={this.state.rolling} />
                </div>
                <button onClick={this.roll} disabled={this.state.rolling}>{this.state.rolling ? 'Rolling...' : 'Roll Dice'}</button>
            </div>
        )
    }
}
export default Rolldie;