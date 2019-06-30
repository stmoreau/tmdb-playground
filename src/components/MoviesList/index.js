import React, { useContext } from "react";
import { StoreContext } from "../../Store/Context";
import MovieCard from "../MovieCard";
import NoMoviesFound from "../NoMoviesFound";
import "./MoviesList.css";

const MoviesList = () => {
  const { state } = useContext(StoreContext);
  const { displayedMovies } = state;

  return (
    <div className="MoviesList">
      {displayedMovies.length ? (
        displayedMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <NoMoviesFound />
      )}
    </div>
  );
};

export default MoviesList;
