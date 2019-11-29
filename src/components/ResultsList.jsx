import React from "react";
import ResultCard from "./ResultCard";

export default function ResultsList({ results }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          {results.map(result => {
            return <ResultCard result={result} key={result.name} />;
          })}
        </div>
      </div>
    </div>
  );
}
