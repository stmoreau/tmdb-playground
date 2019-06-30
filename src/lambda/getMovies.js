import axios from "axios";

export async function handler(event, context) {
  try {
    let movies = [];
    let genres = [];
    await axios
      .all([
        await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${
            process.env.MOVIE_DB_API_KEY
          }`
        ),
        axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${
            process.env.MOVIE_DB_API_KEY
          }`
        )
      ])
      .then(
        axios.spread((moviesResponse, genresResponse) => {
          genres = genresResponse.data.genres;
          moviesResponse.data.results.forEach(movie => {
            movies.push({
              id: movie.id,
              voteAverage: movie.vote_average,
              title: movie.title,
              posterPath: movie.poster_path,
              overview: movie.overview,
              genres: movie.genre_ids
            });
          });
        })
      );
    return {
      statusCode: 200,
      body: JSON.stringify({ movies, genres })
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
}
