import React, { Component } from "react";
import * as api from "../utils/api";
import InputField from "./InputField";
import ResultsList from "./ResultsList";
import Pagination from "./Pagination";
import BackButton from "./BackButton";
import Error from "./Error";
import LoadingSymbol from "./LoadingSymbol";

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
    pageCount: 0,
    isLoading: true
  };

  getResults = name => {
    const { category } = this.props;
    api.fecthResults(category, name).then(results => {
      if (!results.length) {
        this.setState({ notValid: true, isLoading: false });
      } else {
        this.setState(
          {
            results,
            category,
            notValid: false,
            searchEntry: name,
            pageCount: Math.ceil(results.length / this.state.perPage),
            isLoading: false
          },
          () => this.setElementsForCurrentPage()
        );
      }
    });
  };

  setElementsForCurrentPage = () => {
    const { perPage, offset, results } = this.state;
    const elements = results.slice(offset, offset + perPage);
    this.setState({ elements, isLoading: false });
  };

  handlePageClick = data => {
    let { offset, perPage } = this.state;
    const selectedPage = data.selected;
    offset = selectedPage * perPage;
    this.setState({ currentPage: selectedPage, offset }, () =>
      this.setElementsForCurrentPage()
    );
  };

  render() {
    const {
      notValid,
      results,
      searchEntry,
      pageCount,
      currentPage,
      elements,
      isLoading
    } = this.state;
    const { category } = this.props;

    if (!category) return <Error error="category" />;
    // if (isLoading) return <LoadingSymbol />;

    if (pageCount > 1) {
      return (
        <>
          <InputField getResults={this.getResults} category={category} />
          {isLoading && <LoadingSymbol />}
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
        <InputField getResults={this.getResults} category={category} />
        {/* {isLoading && <LoadingSymbol />} */}
        {!results.length && <LoadingSymbol />}
        {notValid && <Error error={"invalid"} />}
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
