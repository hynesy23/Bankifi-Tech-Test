import React, { Component } from "react";
import { Link, navigate } from "@reach/router";

export default class InputField extends Component {
  state = {
    name: ""
  };

  handleChange = event => {
    const name = event.target.value;
    this.setState({ name });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name } = this.state;
    const { category } = this.props;
    this.props.getResults(name);
    this.setState({ name: "" });
    navigate(`/${category}/search/${name}`);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <section className="col s4 offset-s4">
            <form onSubmit={this.handleSubmit}>
              <div>
                <input
                  placeholder={`Enter ${this.props.category} name here`}
                  type="text"
                  className="validate"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <button className="search_btn">Search</button>
            </form>
            <p>
              Or, go back to your{" "}
              <Link to="/choose_category">category selection</Link>
            </p>
          </section>
        </div>
      </div>
    );
  }
}
