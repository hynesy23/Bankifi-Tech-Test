import React, { Component } from "react";
import * as api from "../utils/api";
import CharacterResultsTable from "./CharacterResultsTable";
import CreatorResultsTable from "./CreatorResultsTable";
import LoadingSymbol from "./LoadingSymbol";

export default class SingleResult extends Component {
  state = {
    result: null,
    currentCategory: null,
    isLoading: true
  };

  componentDidMount() {
    let { name, category } = this.props;
    if (!category) return null;
    if (category === "characters") {
      api.fetchCharacterResult(category, name).then(result => {
        this.setState({ result, currentCategory: category, isLoading: false });
      });
    } else if (category === "creators") {
      api.fetchCreatorResult(category, name).then(result => {
        this.setState({ result, currentCategory: category, isLoading: false });
      });
    }
  }

  render() {
    const { result, isLoading } = this.state;
    const { category } = this.props;
    if (isLoading) return <LoadingSymbol />;
    return (
      <>
        {category === "characters" ? (
          <CharacterResultsTable result={result} />
        ) : (
          <CreatorResultsTable result={result} />
        )}
      </>
    );
  }
}
