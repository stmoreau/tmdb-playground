import React from "react";
import "./Checkbox.css";

const Checkbox = ({ label }) => (
  <label className="Checkbox">
    {label}
    <input className="Checkbox__input" type="checkbox" />
    <span className="Checkbox__checkmark" />
  </label>
);

export default Checkbox;
