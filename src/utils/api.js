import axios from "axios";
import * as helper from "./helpers";
import apiKey from "../apikey";

//const apiKey = process.env.REACT_APP_API_KEY;

const base = "http://gateway.marvel.com/v1/public";

const ts = "12345";

export const fecthResults = (category, name, orderBy) => {
  return axios
    .get(
      `${base}/${category}?nameStartsWith=${name}&limit=100&ts=${ts}&apikey=${apiKey}`,
      { params: { orderBy } }
    )
    .then(
      ({
        data: {
          data: { results }
        }
      }) => {
        if (category === "creators") {
          const formattedResults = helper.formatCreatorResults(results);
          return formattedResults;
        }
        return results;
      }
    );
};

export const fetchSingleResult = (category, name) => {
  console.log("hello");
  return axios
    .get(`${base}/${category}?nameStartsWith=${name}&ts=${ts}&apikey=${apiKey}`)
    .then(
      ({
        data: {
          data: { results }
        }
      }) => {
        // if (!results.length) {
        //   return results;
        // }
        console.log(results, "RESULTS");
        const [result] = results;
        console.log(result, "RESULT");

        const formattedResult = helper.formatResultImage(result);
        const finalResult = helper.formatResultName(formattedResult);
        return finalResult;
      }
    )
    .catch(console.log);
};
