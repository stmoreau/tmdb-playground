const initialState = {
  search: "",
  movies: [],
  genres: [],
  isLoading: true
};

const types = {
  GET_MOVIES: "GET_MOVIES",
  SET_MOVIES: "SET_MOVIES",
  SET_GENRES: "SET_GENRES",
  SET_LOADING: "SET_LOADING"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MOVIES:
      return state;
    case types.SET_MOVIES:
      return { ...state, movies: action.payload };
    case types.SET_GENRES:
      return { ...state, genres: action.payload };
    case types.SET_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export { initialState, reducer, types };
