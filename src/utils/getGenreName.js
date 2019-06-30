export const getGenreName = (id, genres) => {
  const movie = genres.find(el => el.id === id);
  return movie ? movie.name : null;
};
