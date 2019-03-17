import React from "react";
import PropTypes from "prop-types";

import Classes from "./SideDrawer.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Wrapper from "../../../hoc/Wrapper/Wrapper";

const SideDrawer = props => {
  const sd = props.show
    ? (<Wrapper>
      <Backdrop show={props.show} close={props.closed}/>
      <div className={Classes.SideDrawer}>
        <div className={Classes.Logo}>
          <Logo/>
        </div>

        <nav className={Classes.List}>
          <NavigationItems/>
        </nav>
      </div>
    </Wrapper>)
    : null;
  return sd;
};

SideDrawer.propTypes={
  show: PropTypes.bool,
  close: PropTypes.func
}

export default SideDrawer;
