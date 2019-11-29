import React, { Component } from "react";
import * as api from "../utils/api";
import InputField from "./InputField";
import Dropdown from "./Dropdown";

export default class Main extends Component {
  state = {
    data: [],
    singleEntry: null,
    category: "",
    dropdownVisible: true,
    notValid: false
  };

  getData = name => {
    console.log(name, "name from getData");
    const { category } = this.state;
    api.fecthData(category, name).then(result => {
      console.log(result);
      //   if (!result.length) {
      //     this.setState({ notValid: true });
      //   } else {
      //     this.setState({
      //       characters: result,
      //       notValid: false,
      //       isLoading: false
      //     });
      //   }
    });
  };

  setCategory = category => {
    this.setState({ category, dropdownVisible: false });
  };

  render() {
    const { dropdownVisible, category, notValid } = this.state;
    return (
      <>
        {dropdownVisible && <Dropdown setCategory={this.setCategory} />}
        {!dropdownVisible && (
          <InputField getData={this.getData} category={category} />
        )}
        {notValid && (
          <p className="invalid">
            This is not a valid entry, true believer! <br /> Your search should
            use full name, like "Spider-man" or "Peter Parker"
          </p>
        )}
      </>
    );
  }
}
