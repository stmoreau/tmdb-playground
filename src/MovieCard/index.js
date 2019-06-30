import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  let sideElementTopPosition = 20;
  return (
    <div title={movie.title} className="MovieCard">
      <img
        className="MovieCard__image MovieCard__image-1"
        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
        alt={movie.title}
      />
      <img
        className="MovieCard__image MovieCard__image-2"
        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
        alt={movie.title}
      />
      <div title={movie.overview} className="MovieCard__text">
        {movie.overview.length > 300
          ? `${movie.overview.substring(0, 300)}...`
          : movie.overview}
      </div>
      {movie.genre_ids.map((genreId, i) => {
        if (i !== 0) {
          sideElementTopPosition += 35;
        }
        return (
          <div
            key={genreId}
            className="MovieCard__genre"
            style={{
              top: `${sideElementTopPosition}px`
            }}
          >
            {genreId}
          </div>
        );
      })}
      <div
        className={`MovieCard__rating ${
          movie.vote_average > 7
            ? "MovieCard__rating-green"
            : movie.vote_average > 5
            ? "MovieCard__rating-orange"
            : "MovieCard__rating-red"
        }`}
        style={{ top: `${sideElementTopPosition + 35}px` }}
      >
        Rating: {movie.vote_average}
      </div>
    </div>
  );
};

export default MovieCard;
