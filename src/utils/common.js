export const updateFavorites = (id, favorites) => {
  if (favorites?.includes(id)) {
    return favorites.filter((resId) => resId !== id);
  } else {
    return [...favorites, id];
  }
};

export const checkFavorites = (id, favorites) => {
  return favorites?.includes(id) ? "#ffa801" : "white";
};

export const validateString = (value) => {
  return value?.length < 3 || value === null
    ? "Must have atleast 3 characters"
    : null;
};
