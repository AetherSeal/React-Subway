import React from "react";
import PropTypes from "prop-types";

import Classes from "./Button.css"

const Button = props => {
    return (<button onClick={props.click} className={Classes[props.type]}>{props.children}</button>)
};

Button.propTypes = {
  click: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
