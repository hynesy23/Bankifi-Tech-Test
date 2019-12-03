import React, { Component } from "react";
import "./App.css";
import { Router, navigate } from "@reach/router";
import Header from "./components/Header";
import Main from "./components/Main";
import SingleResult from "./components/SingleResult";
import ContinueButton from "./components/ContinueButton";
import Dropdown from "./components/Dropdown";

class App extends Component {
  state = {
    category: "",
    shouldContinue: true,
    dropdownVisible: true
  };

  setContinue = () => {
    navigate("/choose_category");
    this.setState({ shouldContinue: false });
  };

  getCategory = category => {
    console.log(category, "CATEGORY FROM APP");
    this.setState({ category });
  };

  render() {
    const { category } = this.state;
    return (
      <div className="App">
        <Header />
        <Router>
          <ContinueButton path="/" setContinue={this.setContinue} />
          <Dropdown path="/choose_category" getCategory={this.getCategory} />
          <Main
            path="/main"
            getCategory={this.getCategory}
            category={category}
          />
          <SingleResult path="/:category/:name" category={category} />
          <SingleResult path="/:category/:name" category={category} />
        </Router>
      </div>
    );
  }
}

export default App;
