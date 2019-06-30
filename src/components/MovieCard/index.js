import React, { useContext } from "react";
import { StoreContext } from "../../Store/Context";
import { getGenreName } from "../../utils/getGenreName";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const { state } = useContext(StoreContext);
  const { genres } = state;
  let sideElementTopPosition = 20;

  return (
    <div title={movie.title} className="MovieCard">
      <img
        className="MovieCard__image MovieCard__image-1"
        src={`https://image.tmdb.org/t/p/w400${movie.posterPath}`}
        alt={movie.title}
      />
      <img
        className="MovieCard__image MovieCard__image-2"
        src={`https://image.tmdb.org/t/p/w400${movie.posterPath}`}
        alt={movie.title}
      />
      <div title={movie.overview} className="MovieCard__text">
        {movie.overview.length > 300
          ? `${movie.overview.substring(0, 300)}...`
          : movie.overview}
      </div>
      {movie.genres.map((genreId, i) => {
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
            {getGenreName(genreId, genres)}
          </div>
        );
      })}
      <div
        className={`MovieCard__rating ${
          movie.voteAverage > 7
            ? "MovieCard__rating-green"
            : movie.voteAverage > 5
            ? "MovieCard__rating-orange"
            : "MovieCard__rating-red"
        }`}
        style={{ top: `${sideElementTopPosition + 35}px` }}
      >
        Rating: {movie.voteAverage}
      </div>
    </div>
  );
};

export default MovieCard;
