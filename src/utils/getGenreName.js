export const getGenreName = (id, genres) => {
  return genres.find(el => el.id === id).name;
};
