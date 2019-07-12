import { filterMovies } from "../utils/filterMovies";
import { filterGenres } from "../utils/filterGenres";
import { removeElementFromArray } from "../utils/removeElementFromArray";

const initialState = {
  search: "",
  fetchedMovies: [],
  displayedMovies: [],
  genres: [],
  selectedGenreIds: [],
  isLoading: true,
  ratingRange: [3, 10]
};

const types = {
  SET_ALL_MOVIES: "SET_ALL_MOVIES",
  SHOW_MOVIES: "SHOW_MOVIES",
  SET_GENRES: "SET_GENRES",
  SET_LOADING: "SET_LOADING",
  CHANGE_RATING_RANGE: "CHANGE_RATING_RANGE",
  ADD_SELECTED_GENRE: "ADD_SELECTED_GENRE",
  REMOVE_SELECTED_GENRE: "REMOVE_SELECTED_GENRE"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ALL_MOVIES:
      return Object.assign({}, state, {
        fetchedMovies: action.payload
      });
    case types.SHOW_MOVIES:
      return Object.assign({}, state, {
        displayedMovies: filterMovies(
          state.fetchedMovies,
          state.ratingRange,
          state.selectedGenreIds
        )
      });
    case types.SET_GENRES:
      return Object.assign({}, state, {
        genres: filterGenres(state.fetchedMovies, action.payload)
      });
    case types.SET_LOADING:
      return Object.assign({}, state, {
        isLoading: action.payload
      });
    case types.CHANGE_RATING_RANGE:
      return Object.assign({}, state, {
        ratingRange: action.payload
      });
    case types.ADD_SELECTED_GENRE:
      let newSelectedGenreIds = state.selectedGenreIds;
      newSelectedGenreIds.push(action.payload);
      return Object.assign({}, state, {
        selectedGenreIds: newSelectedGenreIds
      });
    case types.REMOVE_SELECTED_GENRE:
      return Object.assign({}, state, {
        selectedGenreIds: removeElementFromArray(
          state.selectedGenreIds,
          action.payload
        )
      });

    default:
      return state;
  }
};

export { initialState, reducer, types };
