import axios from "axios";
import * as helper from "./helpers";

const base = "http://gateway.marvel.com/v1/public";

const apiKey =
  "7ae2241ac3edddf2b9d6b1530043d4ce&hash=8b58dcf685ef57026067ebd8d34f45f1";

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
        console.log(result, "result log");
        const formattedResult = helper.formatResultImageAndDescription(result);
        console.log(formattedResult, "formatted result");
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
        console.log(result, "result log");
        const formattedResult = helper.formatResultImageAndDescription(result);
        return formattedResult;
      }
    )
    .catch(console.log);
};
