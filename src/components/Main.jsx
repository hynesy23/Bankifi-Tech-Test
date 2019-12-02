import React, { Component } from "react";
import * as api from "../utils/api";
import ReactPaginate from "react-paginate";
import InputField from "./InputField";
import Dropdown from "./Dropdown";
import ResultsList from "./ResultsList";

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
    const { category } = this.state;
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
      category,
      notValid,
      results,
      searchEntry,
      pageCount,
      currentPage,
      elements
    } = this.state;

    let paginationElement;
    if (pageCount > 1) {
      paginationElement = (
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          breakLabel={<span className="gap">...</span>}
          pageCount={pageCount}
          onPageChange={this.handlePageClick}
          forcePage={currentPage}
          containerClassName={"pagination"}
          previousLinkClassName={"previous_page"}
          nextLinkClassName={"next_page"}
          disabledClassName={"disabled"}
          activeClassName={"active"}
        />
      );
      return (
        <>
          {paginationElement}
          <ResultsList
            results={elements}
            searchEntry={searchEntry}
            category={category}
          />
          {paginationElement}
        </>
      );
    }
    return (
      <>
        {dropdownVisible && <Dropdown setCategory={this.setCategory} />}
        {!dropdownVisible && (
          <InputField getResults={this.getResults} category={category} />
        )}
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
      </>
    );
  }
}
