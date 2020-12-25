import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date().toLocaleString("ru", {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'long',
          timezone: 'UTC',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        })
      }
    }
    componentDidMount() {
      this.intervalID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      this.setState({
        time: new Date().toLocaleString("ru", {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'long',
          timezone: 'UTC',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        })
      });
    }
    render() {
      return (
        <div>
          {this.state.time}
        </div>
      )
    }
  } 