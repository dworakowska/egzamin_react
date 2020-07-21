import React from "react";

const Manufacture = (props) => {
  return (
    <div>
      <input
        type="radio"
        name="manufacture"
        id={props.manufacture}
        value={props.manufacture}
        checked={props.isChecked}
        onChange={(event) => props.onSelectionChange(event.target.value)}
      />
      <label htmlFor={props.manufacture}>{props.manufacture}</label>
    </div>
  );
};

export default Manufacture;
