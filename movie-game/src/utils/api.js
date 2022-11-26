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
        actor_id: data.id.substring(6, data.id.length - 1),
      };
      return actorData;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getActorFilmography = (actorID) => {
  const params = { nconst: actorID };
  return movieAPI
    .get("/actors/get-all-filmography", { params })
    .then(({ data }) => {
      const filmographyData = {
        // title, id, cast[{name, realName, img, actor_id}, ...]
      };

      return data.filmography;
    })
    .catch((err) => {
      console.log(err);
    });
};
