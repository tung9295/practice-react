import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  tick() {
    this.setState({ date: new Date() });
  }

  componentDidMount() {
    this.TimerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.TimerID);
  }

  render() {
    return <h1>It is {this.state.date.toLocaleTimeString()}</h1>;
  }
}
