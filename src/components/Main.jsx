import React, { Component } from "react";
import * as api from "../utils/api";
import InputField from "./InputField";
import ResultsList from "./ResultsList";
import Pagination from "./Pagination";
import BackButton from "./BackButton";
import Error from "./Error";
import SortResults from "./SortResults";

export default class Main extends Component {
  state = {
    results: [],
    elements: [],
    category: "",
    searchEntry: "",
    dropdownVisible: true,
    notValid: false,
    offset: 0,
    currentPage: 0,
    perPage: 20,
    pageCount: 0,
    isLoading: true,
    sortByVisible: false
  };

  getResults = name => {
    const { category } = this.props;
    api.fecthResults(category, name).then(results => {
      if (!results.length) {
        this.setState({ notValid: true });
      } else {
        this.setState(
          {
            results,
            category,
            notValid: false,
            searchEntry: name,
            pageCount: Math.ceil(results.length / this.state.perPage),
            sortByVisible: true
          },
          () => this.setElementsForCurrentPage()
        );
      }
    });
  };

  setElementsForCurrentPage = () => {
    const { perPage, offset, results } = this.state;
    const elements = results.slice(offset, offset + perPage);
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

  sortResults = sort_by => {
    console.log(sort_by, "sort by");
    const { results } = this.state;
    console.log(results, "RESULTS");
    let sortedResults;
    if (sort_by === "name") {
      sortedResults = results.sort((a, b) => {
        if (a.name > b.name) return -1;
        else if (b.name > a.name) return 1;
        else return 0;
      });
      this.setState({ results: sortedResults }, () =>
        this.setElementsForCurrentPage()
      );
    } else {
      sortedResults = results.sort((a, b) => {
        return b[sort_by].available - a[sort_by].available;
      });
      this.setState({ results: sortedResults }, () =>
        this.setElementsForCurrentPage()
      );
    }
  };

  sortResultsAlphabetically = () => {};

  render() {
    const {
      notValid,
      results,
      searchEntry,
      pageCount,
      currentPage,
      elements,
      sortByVisible
    } = this.state;
    const { category } = this.props;

    if (!category) return <Error error="category" />;

    if (pageCount > 1) {
      return (
        <>
          <InputField getResults={this.getResults} category={category} />
          {sortByVisible && <SortResults sortResults={this.sortResults} />}
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
        {notValid && <Error error={"invalid"} />}
        {sortByVisible && <SortResults sortResults={this.sortResults} />}
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
