import React from "react";
// import { browserHistory } from "react-router";
import { navigate } from "@reach/router";

export default function BackButton() {
  const setRoute = () => {
    navigate("/main");
  };

  return <button onClick={setRoute}>Back to Main Page</button>;
}
