import React from "react";
import { navigate } from "@reach/router";

export default function HomeButton() {
  const setRoute = () => {
    navigate("/");
  };

  return <button onClick={setRoute}>Back to Welcome Page</button>;
}
