import React from "react";
import PropTypes from 'prop-types'

import Classes from "./NavigationItem.css";

const NavigationItem = props => {
  return (<li className={Classes.Item}>
    <a href={props.link}>{props.children}</a>
  </li>);
};

NavigationItem.propTypes ={
  link: PropTypes.string
}
export default NavigationItem;
