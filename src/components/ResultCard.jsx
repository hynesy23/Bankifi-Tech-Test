import React from "react";
import { Link } from "@reach/router";
import image from "../marvel-image.jpeg";
import LoadingSymbol from "./LoadingSymbol";

export default function ResultCard({ result, category }) {
  if (!result) return <LoadingSymbol />;
  return (
    <div className="col s12 m6 l3">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          {result.thumbnail.path.includes("not") ? (
            <img src={image} alt="" style={{ width: "100%", height: 200 }} />
          ) : (
            <img
              src={`${result.thumbnail.path}/landscape_incredible.jpg`}
              alt=""
              style={{ width: "100%", height: 200 }}
            />
          )}
          <div className="card-content">
            <Link to={`/${category}/${result.name}`}>{result.name}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
