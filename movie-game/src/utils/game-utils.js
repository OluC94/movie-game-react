// title = name of movie or show
export const checkAppearance = (title, actorApps) => {
  const validCategory = ["actor", "actress", "self"];
  const result = { title: null, title_id: null, isValid: false };

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
      result.isValid = true;
    }
  }
  return result;
};

export const checkCast = () => {};

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
