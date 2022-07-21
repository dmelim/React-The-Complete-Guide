import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* The use of "..."(spread operator) makes the input type variable dependending on what is given through "props.input". 
      See the use in MealItemForm to understand. */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
