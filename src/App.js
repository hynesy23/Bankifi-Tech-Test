import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Main from "./components/Main";
import SingleResult from "./components/SingleResult";

class App extends Component {
  state = {
    category: ""
  };

  getCategory = category => {
    this.setState({ category });
  };

  render() {
    const { category } = this.state;
    return (
      <div className="App">
        <Header />
        <Router>
          <Main path="/" getCategory={this.getCategory} />
          <SingleResult path="/characters/:name" category={category} />
          <SingleResult path="/creators/:name" category={category} />
        </Router>
      </div>
    );
  }
}

export default App;
