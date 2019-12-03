import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { formatCreatorResults, formatResultImage } from "./utils/helpers";

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

describe("formatResultImage", () => {
  it("Returns empty object when passed empty object", () => {
    const input = {};
    const actualResult = formatResultImage(input);
    const expectedResult = {};
    expect(actualResult).toEqual(expectedResult);
  });
  it('If object contains key of thumbnail whoch contains key of path, and the property contains "image_not_available", will replace property with ""', () => {
    const input = {
      id: 203,
      name: "Johnson",
      thumbnail: {
        path: "https://liverpoolfc/images/image_not_available"
      }
    };
    const actualResult = formatResultImage(input);
    const expectedResult = {
      id: 203,
      name: "Johnson",
      thumbnail: {
        path: ""
      }
    };
    expect(actualResult).toEqual(expectedResult);
  });
  it('If object contains key of thumbnail that then has key of path, and the property does not contain "image_not_available", will change nothing', () => {
    const input = {
      id: 203,
      name: "Johnson",
      thumbnail: {
        path: "https://liverpoolfc/images/i_am_an_image"
      }
    };
    const actualResult = formatResultImage(input);
    const expectedResult = {
      id: 203,
      name: "Johnson",
      thumbnail: {
        path: "https://liverpoolfc/images/i_am_an_image"
      }
    };
    expect(actualResult).toEqual(expectedResult);
  });
});
