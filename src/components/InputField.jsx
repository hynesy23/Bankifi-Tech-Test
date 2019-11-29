import React, { Component } from "react";

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
    this.props.getData(name);
    this.setState({ name: "" });
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
                  class="validate"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
              <button>Search</button>
            </form>
          </section>
        </div>
      </div>
    );
  }
}