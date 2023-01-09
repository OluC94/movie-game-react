import { getActorFilmography, getBio, getMostPopular } from "./api";

const parseID = (str) => {
  return str[1] === "n"
    ? str.substring(6, str.length - 1)
    : str.substring(7, str.length - 1);
};

const getRandNum = (range) => {
  const num1 = Math.floor(Math.random() * range);
  const num2 = Math.floor(Math.random() * range);

  if (num1 === num2) {
    getRandNum(range);
  } else {
    return { num1, num2 };
  }
};

// title = name of movie or show
export const checkAppearance = (title, actorApps) => {
  const validCategory = ["actor", "actress", "self"];

  const result = { title: null, title_id: null, img: null, isValid: false };

  for (let i = 0; i < actorApps.length; i++) {
    if (
      actorApps[i].title.toLowerCase() === title.toLowerCase() &&
      validCategory.includes(actorApps[i].category)
    ) {
      result.title = actorApps[i].title;
      result.title_id = actorApps[i].id.substring(
        7,
        actorApps[i].id.length - 1
      );
      result.img = actorApps[i].image.url;
      result.isValid = true;
      return result;
    }
  }
  return result;
};

export const checkCast = (name, appearanceData) => {
  const { cast } = appearanceData;
  const validCategory = ["actor", "actress", "self"];
  const result = {
    actor_name: null,
    actor_id: null,
    img: null,
    isValid: false,
  };

  for (let i = 0; i < cast.length; i++) {
    if (
      name.toLowerCase() === cast[i].name.toLowerCase() &&
      validCategory.includes(cast[i].category)
    ) {
      result.name = cast[i].name;
      result.actor_id = cast[i].id.substring(6, cast[i].id.length - 1);
      result.img = cast[i].image.url;
      result.isValid = true;
      return result;
    }
  }
  return result;
};

export const checkWinner = (actor_id, targetFilmog) => {
  const formatted_id = `/title/${actor_id}/`;
  return targetFilmog.some((appearance) => appearance.id === formatted_id);
};

export const gameInit = () => {
  return Promise.all([getMostPopular()])
    .then(([actors]) => {
      const init_ids = getRandNum(actors.length);

      if (actors.errorData) {
        console.log("rejected");
        return Promise.reject(actors.errorData);
      }

      return {
        start_id: parseID(actors[init_ids.num1]),
        end_id: parseID(actors[init_ids.num2]),
      };
    })
    .catch((err) => {
      console.log(err.status || err);
    });
};

/* 


*/
