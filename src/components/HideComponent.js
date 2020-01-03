import React from "react";

export default class HideComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // handleClick = () => {
  //   this.setState(state => ({
  //     isToggleOn: !state.isToggleOn,
  //     count: state.count + 1
  //   }));
  // }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
      count: state.count + 1
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "Hide" : "Show"}
          <div>Clicked Times : {this.state.count}</div>
        </button>
      </div>
    );
  }
}
