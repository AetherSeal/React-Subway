import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const Confirmation = props => {
  return (<div>
    {props.confirmationQuestion}
    <div>
      <Button click={props.confirmFunc} type={"primary"}>
        {props.confirmBtnMsg}
      </Button>
      <Button click={props.cancelFunc} type={"secondary"}>
        {props.cancelBtnMsg}
      </Button>
    </div>
  </div>
  ); 
}; 
  
Confirmation.propTypes = {
    confirmationQuestion: PropTypes.string,
    confirmBtnMsg: PropTypes.string,
    cancelBtnMsg: PropTypes.string,
    confirmFunc: PropTypes.func,
    cancelFunc: PropTypes.func
};

export default Confirmation;
