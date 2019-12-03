import React, { Component } from "react";
import * as api from "../utils/api";
import InputField from "./InputField";
import Dropdown from "./Dropdown";
import ResultsList from "./ResultsList";
import Pagination from "./Pagination";
import BackButton from "./BackButton";

export default class Main extends Component {
  state = {
    results: [],
    elements: [],
    singleEntry: null,
    category: "",
    searchEntry: "",
    dropdownVisible: true,
    notValid: false,
    offset: 0,
    currentPage: 0,
    perPage: 20,
    pageCount: 0
  };

  getResults = name => {
    const { category } = this.props;
    console.log(category, "CATEGORY FROM MAIN");
    console.log(name, "NAME");
    api.fecthResults(category, name).then(results => {
      console.log(results);
      if (!results.length) {
        this.setState({ notValid: true });
      } else {
        this.setState(
          {
            results,
            notValid: false,
            searchEntry: name,
            pageCount: Math.ceil(results.length / this.state.perPage)
          },
          () => this.setElementsForCurrentPage()
        );
      }
    });
  };

  setElementsForCurrentPage = () => {
    const { perPage, offset, results } = this.state;
    console.log(results, "RESULTS LOG");
    const elements = results.slice(offset, offset + perPage);
    console.log(elements, "ELEMENTS LOG");
    this.setState({ elements });
  };

  handlePageClick = data => {
    let { offset, perPage } = this.state;
    const selectedPage = data.selected;
    offset = selectedPage * perPage;
    this.setState({ currentPage: selectedPage, offset }, () =>
      this.setElementsForCurrentPage()
    );
  };

  setCategory = category => {
    this.setState({ category, dropdownVisible: false });
    this.props.getCategory(category);
  };

  render() {
    const {
      dropdownVisible,
      notValid,
      results,
      searchEntry,
      pageCount,
      currentPage,
      elements
    } = this.state;
    const { category } = this.props;

    if (pageCount > 1) {
      return (
        <>
          {/* {!dropdownVisible && ( */}
          <InputField getResults={this.getResults} category={category} />
          // )}
          <ResultsList
            results={elements}
            searchEntry={searchEntry}
            category={category}
          />
          <Pagination
            pageCount={pageCount}
            currentPage={currentPage}
            handlePageClick={this.handlePageClick}
          />
          <BackButton />
        </>
      );
    }
    return (
      <>
        {/* {dropdownVisible && <Dropdown setCategory={this.setCategory} />} */}
        {/* {!dropdownVisible && ( */}
        <InputField getResults={this.getResults} category={category} />
        {/* )} */}
        {notValid && (
          <p className="invalid">
            This is not a valid entry, true believer! <br /> Your search should
            use full name, like "Spider-man", or "Peter Parker", or the great
            Steve Ditko!
          </p>
        )}
        {results && (
          <ResultsList
            results={results}
            searchEntry={searchEntry}
            category={category}
          />
        )}
        {searchEntry && <BackButton />}
      </>
    );
  }
}
