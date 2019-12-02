import React from "react";
import { navigate } from "@reach/router";

export default function ContinueButton({ setContinue }) {
  //   const handleClick = () => {
  //     navigate("/main");
  //     setContinue();
  //   };

  return (
    <button onClick={() => setContinue()} style={{ marginTop: 10 }}>
      Continue
    </button>
  );
}
