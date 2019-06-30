import React, { useReducer, useEffect } from "react";
import axios from "axios";
import { initialState, reducer, types } from "./Reducer";
const StoreContext = React.createContext(initialState);

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function fetchData() {
    await dispatch({
      type: types.SET_LOADING,
      payload: true
    });
    await axios("/.netlify/functions/getMovies")
      .then(res => {
        dispatch({
          type: types.SET_MOVIES,
          payload: res.data.movies
        });
        dispatch({
          type: types.SET_GENRES,
          payload: res.data.genres
        });
      })
      .catch(error => console.error(error));
    await dispatch({
      type: types.SET_LOADING,
      payload: false
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreProvider, StoreContext };
