import axios from "axios";
import { host, key, url } from "../api-info";

const options = {
  method: "GET",
  url: `${url}actors/get-filmography-appearances`,
  params: {
    nconst: "nm0000653",
    tconst: "tt0092455",
    region: "US",
    category: "actor",
  },
  headers: {
    "X-RapidAPI-Key": key,
    "X-RapidAPI-Host": host,
  },
};

export const getActorFilmography = () => {
  return axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
