import React from "react";
import { initialState } from "./Reducer";

const StoreContext = React.createContext(initialState);

export { StoreContext };
