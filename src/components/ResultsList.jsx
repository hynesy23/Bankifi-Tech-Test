import React from "react";
import ResultCard from "./ResultCard";
import LoadingSymbol from "./LoadingSymbol";

export default function ResultsList({
  results,
  searchEntry,
  category,
  isLoading
}) {
  if (isLoading) return <LoadingSymbol />;
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          {searchEntry && <p>Showing results for '{searchEntry}': </p>}

          {results.map(result => {
            return (
              <ResultCard result={result} category={category} key={result.id} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
