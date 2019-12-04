import axios from "axios";
import * as helper from "./helpers";
import apiKey from "../apikey";

//const apiKey = process.env.REACT_APP_API_KEY;

const base = "http://gateway.marvel.com/v1/public";

const ts = "12345";

export const fecthResults = (category, name) => {
  return axios
    .get(
      `${base}/${category}?nameStartsWith=${name}&limit=100&ts=${ts}&apikey=${apiKey}`
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
    )
    .catch(console.log);
};

export const fetchCharacterResult = (category, name) => {
  return axios
    .get(`${base}/${category}?name=${name}&ts=${ts}&apikey=${apiKey}`)
    .then(
      ({
        data: {
          data: { results }
        }
      }) => {
        const [result] = results;
        const formattedResult = helper.formatResultImage(result);
        return formattedResult;
      }
    )
    .catch(console.log);
};

export const fetchCreatorResult = (category, name) => {
  return axios
    .get(`${base}/${category}?nameStartsWith=${name}&ts=${ts}&apikey=${apiKey}`)
    .then(
      ({
        data: {
          data: { results }
        }
      }) => {
        const [result] = results;
        const formattedResult = helper.formatResultImage(result);
        return formattedResult;
      }
    )
    .catch(console.log);
};
