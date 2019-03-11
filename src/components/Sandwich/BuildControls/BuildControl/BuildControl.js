import React from "react";
import PropTypes from "prop-types";

import Classes from "./BuildControl.css";

const BuildControl = props => {
  return (
    <div>
      <div className={Classes.ingredientLabel}> {props.label} </div>
      <button onClick={props.add}>
        More
      </button>
      <button onClick={props.remove} disabled={props.isDisabled}>
        Less
      </button>
    </div>
  );
};

BuildControl.propTypes = {
  ingredients: PropTypes.object,
  add: PropTypes.func,
  remove: PropTypes.func,
  label: PropTypes.string,
  isDisabled:PropTypes.bool
};

export default BuildControl;
