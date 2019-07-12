import React, { useContext, useState } from "react";
import { types } from "../../Store/Reducer";
import { StoreContext } from "../../Store/Context";
import "./Checkbox.css";

const Checkbox = ({ checkbox }) => {
  const { state, dispatch } = useContext(StoreContext);
  const [isChecked, setIsChecked] = useState(
    state.selectedGenreIds.includes(checkbox.id)
  );
  const { selectedGenreIds } = state;

  const handleClick = () => {
    setIsChecked(!isChecked);

    if (selectedGenreIds.includes(checkbox.id)) {
      dispatch({
        type: types.REMOVE_SELECTED_GENRE,
        payload: checkbox.id
      });
    } else {
      dispatch({
        type: types.ADD_SELECTED_GENRE,
        payload: checkbox.id
      });
    }
    dispatch({
      type: types.SHOW_MOVIES
    });
  };

  return (
    <label className={`Checkbox ${checkbox.active ? "" : "Checkbox-disabled"}`}>
      {checkbox.name}
      <input
        disabled={checkbox.active ? "" : "disabled"}
        onChange={handleClick}
        className="Checkbox__input"
        value={isChecked ? "checked" : ""}
        type="checkbox"
      />
      <span className="Checkbox__checkmark" />
    </label>
  );
};

export default Checkbox;
