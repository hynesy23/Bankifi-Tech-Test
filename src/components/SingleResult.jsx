import React, { Component } from "react";
import * as api from "../utils/api";
import SingleResultsTable from "./SingleResultsTable";
import LoadingSymbol from "./LoadingSymbol";
import Error from "./Error";

export default class SingleResult extends Component {
  state = {
    result: null,
    currentCategory: null,
    isLoading: true,
    err: false
  };

  componentDidMount() {
    let { name, category } = this.props;
    api
      .fetchSingleResult(category, name)
      .then(result => {
        if (!result) {
          this.setState({ err: true });
        }
        this.setState({
          result,
          currentCategory: category,
          isLoading: false
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({ err: true });
      });
  }

  render() {
    const { result, isLoading, err } = this.state;
    const { category } = this.props;
    if (isLoading) return <LoadingSymbol />;
    if (err) return <Error />;
    return <SingleResultsTable result={result} category={category} />;
  }
}
