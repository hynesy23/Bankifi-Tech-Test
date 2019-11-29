import React, { Component } from "react";
import InputField from "./InputField";
import Dropdown from "./Dropdown";

export default class Main extends Component {
  state = {
    data: [],
    singleEntry: null,
    category: "",
    dropdownVisible: true
  };

  getData = name => {
    console.log(name, "name from getData");
  };

  setCategory = category => {
    this.setState({ category, dropdownVisible: false });
  };

  render() {
    const { dropdownVisible, category } = this.state;
    return (
      <>
        {dropdownVisible && <Dropdown setCategory={this.setCategory} />}
        {!dropdownVisible && (
          <InputField getData={this.getData} category={category} />
        )}
      </>
    );
  }
}
