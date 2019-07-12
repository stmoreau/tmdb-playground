export const filterMovies = (movieArray, ratingRange, selectedGenreIds) => {
  let newMovieArray = [];
  for (var i = 0; i < movieArray.length; i++) {
    if (
      movieArray[i].voteAverage >= ratingRange[0] &&
      movieArray[i].voteAverage <= ratingRange[1]
    ) {
      if (selectedGenreIds.length) {
        if (movieArray[i].genres.some(id => selectedGenreIds.includes(id))) {
          newMovieArray.push(movieArray[i]);
        }
      } else {
        newMovieArray.push(movieArray[i]);
      }
    }
  }
  return newMovieArray;
};
