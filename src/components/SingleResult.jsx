import React, { Component } from "react";

export default class SingleResult extends Component {
  state = {
    result: null
  };

  render() {
    const { category } = this.props;
    return <h1>{category}</h1>;
  }
}
