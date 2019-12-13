import React from "react";
import { navigate } from "@reach/router";

export default function BackButton({ category }) {
  const setRoute = () => {
    navigate(`/${category}`);
  };
  return (
    <button className="back_btn" onClick={setRoute}>
      Go Back
    </button>
  );
}
