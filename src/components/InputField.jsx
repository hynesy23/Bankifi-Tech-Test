import React, { Component } from "react";

export default class InputField extends Component {
  state = {
    name: ""
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <section className="col s4 offset-s4">
            <form onSubmit={this.handleSubmit}>
              <div>
                <input
                  placeholder="Enter name here"
                  type="text"
                  class="validate"
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
