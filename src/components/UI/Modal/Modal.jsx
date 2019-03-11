import React from "react";

import Classes from "./Modal.css";

const Modal = props => {
  return (<div className={Classes.mask}>
    <div className={Classes.modal}>{props.children}</div>
  </div>);
};

export default Modal;
