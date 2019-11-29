import React from "react";

export default function ResultCard({ result }) {
  return (
    // <div className="col s12 m6 l3">
    //   <div className="row">
    //     <div className></div>
    //   </div>
    // </div>
    <>
      <img src={`${result.thumbnail.path}/landscape_incredible.jpg`} alt="" />
      <p>{result.name}</p>
    </>
  );
}
