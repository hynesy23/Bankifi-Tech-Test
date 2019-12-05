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
      .fetchCharacterResult(category, name)
      .then(result => {
        this.setState({
          result,
          currentCategory: category,
          isLoading: false
        });
      })
      .catch(err => {
        this.setState({ err: true });
      });
  }

  render() {
    const { result, isLoading, err } = this.state;
    if (isLoading) return <LoadingSymbol />;
    if (err) return <Error />;
    return <SingleResultsTable result={result} />;
  }
}
