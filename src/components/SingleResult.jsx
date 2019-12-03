import React, { Component } from "react";
import * as api from "../utils/api";
import CharacterResultsTable from "./CharacterResultsTable";
import CreatorResultsTable from "./CreatorResultsTable";

export default class SingleResult extends Component {
  state = {
    result: null,
    currentCategory: null
  };

  componentDidMount() {
    console.log("MOUNTING");
    let { name, category } = this.props;
    if (!category) return null;
    if (category === "characters") {
      api.fetchCharacterResult(category, name).then(result => {
        this.setState({ result, currentCategory: category });
      });
    } else if (category === "creators") {
      api.fetchCreatorResult(category, name).then(result => {
        this.setState({ result, currentCategory: category });
      });
    }
  }

  render() {
    const { result } = this.state;
    const { category } = this.props;
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
