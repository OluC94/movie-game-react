export const checkAppearance = (title, actorApps) => {
  for (let i = 0; i < actorApps.length; i++) {
    if (actorApps[i].title === title) {
      return true;
    }
  }
  return false;
};
