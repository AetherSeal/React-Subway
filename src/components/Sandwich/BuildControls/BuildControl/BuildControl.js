import React from "react";
import PropTypes from "prop-types";

import Classes from "./BuildControl.css";
import Aux from "../../../../hoc/Wrapper";

const BuildControl = props => {
  return (
    <Aux>
      <div className={BuildControl}> {props.label} </div>
      <button onClick={props.add}>
        More
      </button>
      <button onClick={props.remove} disabled={props.isDisabled}>
        Less
      </button>
    </Aux>
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
