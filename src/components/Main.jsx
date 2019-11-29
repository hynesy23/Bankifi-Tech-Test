import React, { Component } from "react";
import * as api from "../utils/api";
import InputField from "./InputField";
import Dropdown from "./Dropdown";
import ResultsList from "./ResultsList";

export default class Main extends Component {
  state = {
    results: [],
    singleEntry: null,
    category: "",
    searchEntry: "",
    dropdownVisible: true,
    notValid: false
  };

  getData = name => {
    console.log(name, "searchedEntry from getData");
    const { category } = this.state;
    api.fecthData(category, name).then(results => {
      console.log(results);
      if (!results.length) {
        this.setState({ notValid: true });
      } else {
        this.setState({
          results,
          notValid: false,
          searchEntry: name
        });
      }
    });
  };

  setCategory = category => {
    this.setState({ category, dropdownVisible: false });
  };

  render() {
    const {
      dropdownVisible,
      category,
      notValid,
      results,
      searchEntry
    } = this.state;
    return (
      <>
        {dropdownVisible && <Dropdown setCategory={this.setCategory} />}
        {!dropdownVisible && (
          <InputField getData={this.getData} category={category} />
        )}
        {notValid && (
          <p className="invalid">
            This is not a valid entry, true believer! <br /> Your search should
            use full name, like "Spider-man", or "Peter Parker", or the great
            Steve Ditko!
          </p>
        )}
        {results && <ResultsList results={results} searchEntry={searchEntry} />}
      </>
    );
  }
}
