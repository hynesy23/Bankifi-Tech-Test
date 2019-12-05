import React, { Component } from "react";
import "./App.css";
import { Router, navigate } from "@reach/router";
import Header from "./components/Header";
import Main from "./components/Main";
import SingleResult from "./components/SingleResult";
import ContinueButton from "./components/ContinueButton";
import Dropdown from "./components/Dropdown";
import Error from "./components/Error";

class App extends Component {
  state = {
    category: "",
    shouldContinue: true,
    dropdownVisible: true
  };

  setContinue = () => {
    navigate("/choose_category");
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
          <Error default error={{ status: "404", msg: "Route not found" }} />
          <ContinueButton path="/" setContinue={this.setContinue} />
          <Dropdown path="/choose_category" getCategory={this.getCategory} />
          <Main
            path="/main"
            getCategory={this.getCategory}
            category={category}
          />
          <SingleResult path="/:category/:name" category={category} />
        </Router>
      </div>
    );
  }
}

export default App;
