import React from "react";
import Wrapper from "../../hoc/Wrapper";
import Classes from './Layout.css';

const layout = props => {
  return (
    <Wrapper>
      <div>toolbar sidedrawer backdrop</div>
      <main className={Classes.content}>{props.children}</main>
    </Wrapper>
  );
};

export default layout;
