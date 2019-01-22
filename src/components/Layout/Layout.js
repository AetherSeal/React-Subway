import React from "react";
import Aux from "../../hoc/Aux";
import Classes from './Layout.css';

const layout = props => {
  return (
    <Aux>
      <div>toolbar sidedrawer backdrop</div>
      <main className={Classes.content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
