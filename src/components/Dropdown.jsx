import React from "react";
import { navigate } from "@reach/router";

export default function Dropdown({ getCategory }) {
  const handleChange = event => {
    const category = event.target.value;
    getCategory(category);
    navigate("/main");
  };

  return (
    <div className="container">
      <div className="row">
        <section className="input-field col s4 offset-s4">
          <label>
            Search for Character or Creator
            <select className="browser-default" onChange={handleChange}>
              <option value="Choose">Please choose</option>
              <option value="characters">Character</option>
              <option value="creators">Creator</option>
            </select>
          </label>
        </section>
      </div>
    </div>
  );
}
