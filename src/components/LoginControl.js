import React from "react";

function Greeting({ isLoggedIn }) {
  return isLoggedIn ? "Welcome" : "Please Login";
}

export default class LoginControl extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
    this.handleClickToLogin = this.handleClickToLogin.bind(this);
  }
  handleClickToLogin() {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClickToLogin}>
          {this.state.isLoggedIn ? "Logout" : "Login"}
        </button>
        <Greeting isLoggedIn={this.state.isLoggedIn} />
      </div>
    );
  }
}
