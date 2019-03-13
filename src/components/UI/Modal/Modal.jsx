import React from "react";
import PropTypes from "prop-types";

import Classes from "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
import Wrapper from "../../../hoc/Wrapper";

const Modal = props => {
  return (<Wrapper>
    <Backdrop show={props.show} close={props.close}></Backdrop>
    <div className={Classes.modal}  style={{display:props.show?'block':'none'}} >
      {props.children}
      <span className={Classes.close} onClick={()=>props.close()}>
        X
      </span>
    </div>
  </Wrapper>);
};

Modal.propTypes={
  show:PropTypes.bool,
  close:PropTypes.func
}


export default Modal;
