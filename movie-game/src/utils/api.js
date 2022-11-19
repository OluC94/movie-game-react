import axios from "axios";
import { host, key, url } from "../api-info";

const movieAPI = axios.create({
  baseURL: url,
  headers: {
    "X-RapidAPI-Key": key,
    "X-RapidAPI-Host": host,
  },
});

export const getMostPopular = () => {
  return movieAPI
    .get(`/actors/list-most-popular-celebs`)
    .then(({ data }) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getBio = (actorID) => {
  const params = { nconst: actorID };
  return movieAPI
    .get("/actors/get-bio", { params })
    .then(({ data }) => {
      const actorData = {
        name: data.name,
        realName: data.realName,
        img: data.image.url,
      };
      return actorData;
    })
    .catch((err) => {
      console.log(err);
    });
};
