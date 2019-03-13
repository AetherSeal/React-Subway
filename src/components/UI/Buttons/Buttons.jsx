import React from "react";
import PropTypes from "prop-types";

const Buttons = props => {
  return (<div>
    do you want to checkout ?
    <div>
      <button>Yes</button>
      <button>No</button>
    </div>
  </div>);
};

Buttons.propTypes = {
  success: PropTypes.func,
  fail: PropTypes.func
};

export default Buttons;
