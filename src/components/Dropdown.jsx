import React from "react";

export default function Dropdown({ setCategory }) {
  const handleChange = event => {
    const category = event.target.value;
    console.log(category);
    setCategory(category);
  };

  return (
    <div class="input-field col s12">
      <label>
        Search for Character or Creator?
        <select className="browser-default" onChange={handleChange}>
          <option value="charcter">Character</option>
          <option value="creator">Creator</option>
        </select>
      </label>
    </div>
  );
}
