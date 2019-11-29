import React from "react";

export default function Dropdown({ setCategory }) {
  const handleChange = event => {
    const category = event.target.value;
    console.log(category);
    setCategory(category);
  };

  return (
    <div className="container">
      <div className="row">
        <section class="input-field col s4 offset-s4">
          <label>
            Search for Character or Creator?
            <select className="browser-default" onChange={handleChange}>
              <option value="Choose">Please choose</option>
              <option value="character">Character</option>
              <option value="creator">Creator</option>
            </select>
          </label>
        </section>
      </div>
    </div>
  );
}
