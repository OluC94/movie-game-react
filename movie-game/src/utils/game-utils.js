export const checkAppearance = (title, actorApps) => {
  const validCategory = ["actor", "actress", "self"];

  for (let i = 0; i < actorApps.length; i++) {
    if (
      actorApps[i].title.toLowerCase() === title.toLowerCase() &&
      validCategory.includes(actorApps[i].category)
    ) {
      return true;
    }
  }
  return false;
};
