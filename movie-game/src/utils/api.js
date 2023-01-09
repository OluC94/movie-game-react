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
      return data;
    })
    .catch((err) => {
      return { errorData: err.response };
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
      return data.filmography;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCastList = (title_id) => {
  const params = { tconst: title_id };
  return movieAPI
    .get("/title/get-full-credits", { params })
    .then(({ data }) => {
      const appearanceData = {
        title_id,
        title: data.base.title,
        titleType: data.base.titleType,
        img: data.base.image.url,
        cast: data.cast,
      };

      return appearanceData;
    })
    .catch((err) => {
      console.log(err);
    });
};
