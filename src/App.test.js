import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { formatCreatorResults } from "./utils/helpers";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("formatCreatorResults", () => {
  it("Returns empty array if passed empty array", () => {
    const input = [];
    const actualResult = formatCreatorResults(input);
    const expectedResult = [];
    expect(actualResult).toEqual(expectedResult);
  });
  it("If passed array with object containing 'firstName' and 'lastName' keys, returns said array with object with key 'name' instead", () => {
    const input = [
      {
        id: 1186,
        firstName: "Jack",
        middleName: "",
        lastName: "Abel",
        suffix: ""
      }
    ];
    const actualResult = formatCreatorResults(input);
    const expectedResult = [
      { id: 1186, middleName: "", suffix: "", name: "Jack Abel" }
    ];
    expect(actualResult).toEqual(expectedResult);
  });
  it("If passed multi-object array, will do same to each object as tested above", () => {
    const input = [
      {
        id: 1186,
        firstName: "Jack",
        middleName: "",
        lastName: "Abel",
        suffix: ""
      },
      {
        id: 1186,
        firstName: "Jack",
        middleName: "",
        lastName: "Sparrow",
        suffix: ""
      },
      {
        id: 1186,
        firstName: "Jack",
        middleName: "",
        lastName: "Frost",
        suffix: ""
      }
    ];
    const actualResult = formatCreatorResults(input);
    const expectedResult = [
      {
        id: 1186,
        middleName: "",
        suffix: "",
        name: "Jack Abel"
      },
      {
        id: 1186,
        middleName: "",
        suffix: "",
        name: "Jack Sparrow"
      },
      {
        id: 1186,
        middleName: "",
        suffix: "",
        name: "Jack Frost"
      }
    ];
    expect(actualResult).toEqual(expectedResult);
  });
});
