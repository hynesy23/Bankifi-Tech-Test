import React from "react";
import { Link } from "@reach/router";

export default function Error({ error }) {
  return (
    <>
      {error === "invalid" ? (
        <p className="invalid">
          This is not a valid entry, true believer! <br /> Your search should
          use full name, like "Spider-man", or "Peter Parker", or the great
          Steve Ditko!
        </p>
      ) : (
        <p>
          Uh oh, looks like something went wrong. You need to go back and{" "}
          <Link to="/choose_category">select a category again</Link>
        </p>
      )}
      <p>You've taken a wrong turn!</p>
    </>
  );
}
