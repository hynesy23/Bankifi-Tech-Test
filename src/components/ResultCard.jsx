import React from "react";
import { Link } from "@reach/router";

export default function ResultCard({ result, category }) {
  return (
    <div className="col s12 m6 l3">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img
            src={`${result.thumbnail.path}/landscape_incredible.jpg`}
            alt=""
          />
          {/* <span>{result.name}</span> */}
          <Link to={`/${category}/${result.name}`}>{result.name}</Link>
        </div>
      </div>
    </div>
  );
}
