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
    // if (!category) return null;
    // if (category === "characters") {
    //   api
    //     .fetchCharacterResult(category, name)
    //     .then(result => {
    //       this.setState({
    //         result,
    //         currentCategory: category,
    //         isLoading: false
    //       });
    //     })
    //     .catch(err => {
    //       this.setState({ err: true });
    //     });
    // } else if (category === "creators") {
    //   api
    //     .fetchCreatorResult(category, name)
    //     .then(result => {
    //       console.log(result, "result log");
    //       this.setState({
    //         result,
    //         currentCategory: category,
    //         isLoading: false
    //       });
    //     })
    //     .catch(err => {
    //       this.setState({ err: true });
    //     });
    // }

    api
      .fetchCharacterResult(category, name)
      .then(result => {
        console.log(result, "RESULT LOG");
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
    const { category } = this.props;
    if (isLoading) return <LoadingSymbol />;
    if (err) return <Error />;
    return <SingleResultsTable result={result} />;
  }
}
