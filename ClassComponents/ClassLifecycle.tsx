import React, { Component } from 'react';

export class Clock extends Component<{}, { date: Date }> {
  timerID: number;

  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return <p>Clock: {this.state.date.toLocaleTimeString()}</p>;
  }
}
