import React from "react";
import { Link } from "@reach/router";

export default function Error({ error }) {
  console.log(error, "err log");

  if (error === "invalid") {
    return (
      <p className="invalid">
        This is not a valid entry, true believer! <br /> Your search should use
        a full name, like "Spider-man", or "Peter Parker", or the great Steve
        Ditko!
      </p>
    );
  } else if (error === "category") {
    return (
      <p>
        Uh oh, looks like something went wrong. You need to go back and{" "}
        <Link to="/choose_category">select a category again</Link>
      </p>
    );
  } else {
    return (
      <p>
        Oops, that's not a valid route, you've taken a wrong turn! Go{" "}
        <Link to="/">Home</Link>
      </p>
    );
  }
  // return (
  //   <>
  //     {error === "invalid" && (
  //       <p className="invalid">
  //         This is not a valid entry, true believer! <br /> Your search should
  //         use a full name, like "Spider-man", or "Peter Parker", or the great
  //         Steve Ditko!
  //       </p>
  //     )}

  //     {error === "category" && error !== "invalid" ? (
  //       <p>
  //         Uh oh, looks like something went wrong. You need to go back and{" "}
  //         <Link to="/choose_category">select a category again</Link>
  //       </p>
  //     ) : (
  //       <p>
  //         Oops, that's not a valid route, you've taken a wrong turn! Go{" "}
  //         <Link to="/">Home</Link>
  //       </p>
  //     )}

  //     {/* <p>You've taken a wrong turn!</p> */}
  //   </>
  // );
}

// return (
//   <>
//     {error === "invalid" && (
//       <p className="invalid">
//         This is not a valid entry, true believer! <br /> Your search should
//         use a full name, like "Spider-man", or "Peter Parker", or the great
//         Steve Ditko!
//       </p>
//     )}

//     {error === "category" && error !== "invalid" ? (
//       <p>
//         Uh oh, looks like something went wrong. You need to go back and{" "}
//         <Link to="/choose_category">select a category again</Link>
//       </p>
//     ) : (
//       <p>
//         Oops, that's not a valid route, you've taken a wrong turn! Go{" "}
//         <Link to="/">Home</Link>
//       </p>
//     )}

//     {/* <p>You've taken a wrong turn!</p> */}
//   </>
// );
// }
