import React, { useContext } from "react";
import { StoreContext } from "../../Store/Context";
import Checkbox from "../Checkbox";
import "./CheckboxList.css";

const CheckboxList = () => {
  const { state } = useContext(StoreContext);
  const { genres } = state;

  return (
    <div className="CheckboxList">
      {genres.map(checkbox => (
        <Checkbox key={checkbox.id} checkbox={checkbox} />
      ))}
    </div>
  );
};

export default CheckboxList;
