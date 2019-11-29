import React from "react";
import ResultCard from "./ResultCard";

export default function ResultsList({ results, searchedEntry }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          {/* {results && <p>Showing results for '{searchedEntry}': </p>} */}

          {results.map(result => {
            return (
              <>
                <ResultCard result={result} key={result.name} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
