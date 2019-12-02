import React, { Component } from "react";
import "./App.css";
import { Router, navigate } from "@reach/router";
import Header from "./components/Header";
import Main from "./components/Main";
import SingleResult from "./components/SingleResult";
import ContinueButton from "./components/ContinueButton";

class App extends Component {
  state = {
    category: "",
    shouldContinue: true
  };

  setContinue = () => {
    navigate("/main");
    this.setState({ shouldContinue: false });
  };

  getCategory = category => {
    console.log(category);
    this.setState({ category });
  };

  render() {
    const { category, shouldContinue } = this.state;
    return (
      <div className="App">
        <Header />
        <Router>
          <ContinueButton path="/" setContinue={this.setContinue} />
          <Main path="/main" getCategory={this.getCategory} />
          <SingleResult path="/characters/:name" category={category} />
          <SingleResult path="/creators/:name" category={category} />
        </Router>
      </div>
    );
  }
}

export default App;
