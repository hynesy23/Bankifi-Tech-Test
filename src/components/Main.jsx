import React, { Component } from "react";
import * as api from "../utils/api";
import InputField from "./InputField";
import ResultsList from "./ResultsList";
import Pagination from "./Pagination";
import HomeButton from "./HomeButton";
import Error from "./Error";
import SortResults from "./SortResults";

export default class Main extends Component {
  state = {
    results: [],
    elements: [],
    category: "",
    categoryArray: ["characters", "creators"],
    searchEntry: "",
    dropdownVisible: true,
    notValid: false,
    offset: 0,
    currentPage: 0,
    perPage: 20,
    pageCount: 0,
    isLoading: false,
    sortByVisible: false,
    err: false
  };

  getResults = name => {
    const { category } = this.props;
    api
      .fecthResults(category, name)
      .then(results => {
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
              sortByVisible: true,
              isLoading: true
            },
            () => this.setElementsForCurrentPage()
          );
        }
      })
      .catch(err => {
        this.setState({ err: true });
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

  sortResults = sort_by => {
    const { results } = this.state;
    let sortedResults;
    if (sort_by === "name") {
      this.sortResultsAlphabetically();
    } else {
      sortedResults = results.sort((a, b) => {
        return b[sort_by].available - a[sort_by].available;
      });
      this.setState({ results: sortedResults }, () =>
        this.setElementsForCurrentPage()
      );
    }
  };

  sortResultsAlphabetically = () => {
    const { searchEntry, category } = this.state;
    const orderBy = "-name";
    api
      .fecthResults(category, searchEntry, orderBy)
      .then(results => {
        if (!results.length) {
          this.setState({ notValid: true });
        } else {
          this.setState(
            {
              results,
              category,
              notValid: false,
              pageCount: Math.ceil(results.length / this.state.perPage),
              sortByVisible: true
            },
            () => this.setElementsForCurrentPage()
          );
        }
      })
      .catch(err => {
        this.setState({ err: true });
      });
  };

  render() {
    const {
      notValid,
      results,
      searchEntry,
      pageCount,
      currentPage,
      elements,
      sortByVisible,
      isLoading,
      categoryArray
    } = this.state;
    const { category } = this.props;

    if (!category || !categoryArray.includes(category))
      return <Error error="category" />;

    if (pageCount > 1) {
      return (
        <>
          <InputField
            handleLoading={this.handleLoading}
            getResults={this.getResults}
            category={category}
          />
          {sortByVisible && <SortResults sortResults={this.sortResults} />}
          <ResultsList
            results={elements}
            searchEntry={searchEntry}
            category={category}
            isLoading={isLoading}
          />
          <Pagination
            pageCount={pageCount}
            currentPage={currentPage}
            handlePageClick={this.handlePageClick}
          />
          <HomeButton />
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
            isLoading={isLoading}
          />
        )}
        {searchEntry && <HomeButton />}
      </>
    );
  }
}
