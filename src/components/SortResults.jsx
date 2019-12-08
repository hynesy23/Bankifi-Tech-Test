import React from "react";

export default function SortResults({ sortResults }) {
  const getSortBy = event => {
    const sort_by = event.target.value;
    sortResults(sort_by);
  };

  return (
    <div className="sort_by">
      {/* <div className="row"> */}
      {/* <section className="input-field col s4 offset-s5"> */}
      <label>
        Sort Results By:
        <select className="browser-default" onChange={getSortBy}>
          <option value="Choose" disabled>
            Please choose
          </option>
          <option value="name">Alphabetically</option>
          <option value="comics">No of Comics</option>
          <option value="events">No of Events</option>
          <option value="stories">No of Stories</option>
        </select>
      </label>
      {/* </section>
      </div> */}
    </div>
  );
}
