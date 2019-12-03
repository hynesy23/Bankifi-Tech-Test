import React from "react";
import { navigate } from "@reach/router";

export default function ContinueButton({ setContinue }) {
  return (
    <>
      <p>
        Welcome to Marvelpedia. Search characters and their creators with
        Marvel's official developer API. Press continue to begin.
      </p>
      <button onClick={() => setContinue()} style={{ marginTop: 10 }}>
        Continue
      </button>
    </>
  );
}
