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

// export const checkAppearance = (title, actorApps) => {
//   const validCategory = ["actor", "actress", "self"];

//   for (let i = 0; i < actorApps.length; i++) {
//     if (
//       actorApps[i].title.toLowerCase() === title.toLowerCase() &&
//       validCategory.includes(actorApps[i].category)
//     ) {
//       return true;
//     }
//   }
//   return false;
// };
