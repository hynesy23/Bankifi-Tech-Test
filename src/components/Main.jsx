import React, { Component } from "react";
import InputField from "./InputField";

export default class Main extends Component {
  state = {
    characters: [],
    character: null
  };

  getData = () => {};

  render() {
    return <InputField />;
  }
}
