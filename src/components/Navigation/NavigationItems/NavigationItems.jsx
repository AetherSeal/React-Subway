import React from "react";

import Classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = props => {
  return (<ul className={Classes.List}>
    <NavigationItem >Sandwich Builder</NavigationItem>
    <NavigationItem >Checkout</NavigationItem>
  </ul>);
};

export default NavigationItems;
