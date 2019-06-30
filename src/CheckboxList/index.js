import React from "react";
import Checkbox from "../Checkbox";
import "./CheckboxList.css";

const CheckboxList = ({ checkboxes }) => (
  <div className="CheckboxList">
    {checkboxes.map(checkbox => (
      <Checkbox key={checkbox.id} label={checkbox.name} />
    ))}
  </div>
);

export default CheckboxList;
