import React, { Component } from "react";
import "./App.css";
import ThreeMap from "./planet";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <ThreeMap />
        </div>
      </div>
    );
  }
}

export default App;
