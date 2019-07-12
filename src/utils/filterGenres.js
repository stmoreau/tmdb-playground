export const filterGenres = (fetchedMovies, allGenres) => {
  for (let i = 0; i < fetchedMovies.length; i++) {
    for (let j = 0; j < fetchedMovies[i].genres.length; j++) {
      let genreId = fetchedMovies[i].genres[j];
      let index = allGenres.findIndex(key => genreId === key.id);
      if (!allGenres.active) {
        allGenres[index].active = true;
      }
    }
  }
  return allGenres;
};
