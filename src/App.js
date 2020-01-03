import React from "react";
import "./styles.css";
import Clock from "./components/Clock.js";
import HideComponent from "./components/HideComponent.js";
import LoginControl from "./components/LoginControl.js";
import ListAndKey from "./components/ListAndKey.js";

const list = [3, 5, 1, 4, 2];

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React Practice</h1>
        <Clock />
        <HideComponent />
        <LoginControl />
        <ListAndKey list={list} />
      </div>
    );
  }
}

export default App;
