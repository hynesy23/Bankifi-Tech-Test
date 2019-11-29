import axios from "axios";

const base = "http://gateway.marvel.com/v1/public";

const apiKey =
  "7ae2241ac3edddf2b9d6b1530043d4ce&hash=8b58dcf685ef57026067ebd8d34f45f1";

const ts = "12345";

export const fecthData = (category, name) => {
  return axios
    .get(
      `${base}/${category}?nameStartsWith=${name}&limit=20&ts=${ts}&apikey=${apiKey}`
    )
    .then(
      ({
        data: {
          data: { results }
        }
      }) => {
        //console.log(results);
        const [result] = results;
        console.log(result);
        //return results;
      }
    )
    .catch(console.log);
};
