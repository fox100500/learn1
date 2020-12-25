import React, { Component } from 'react'


const INTERVAL = 100;

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }

    increment() {
        this.setState({ value: this.state.value + 1 });
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.increment(), 1000 / INTERVAL);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        const value = this.state.value
        return (
            <div>
                <span>{String(Math.floor(value / INTERVAL / 60 / 60)).padStart(2, '0')} : </span>
                <span>{String(Math.floor(value / INTERVAL / 60) % 60).padStart(2, '0')} : </span>
                <span>{String(Math.floor(value / INTERVAL) % 60).padStart(2, '0')} . </span>
                <span>{String(value % INTERVAL).padStart(2, '0')}</span>
            </div>
        );
    }
}





