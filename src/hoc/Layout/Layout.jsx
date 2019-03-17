import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import Classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends React.Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer: false});
  };

  sideDrawerOpenHandler = () => {
    this.setState({showSideDrawer: true});
  };

  render() {
    return (<Wrapper>
      <Toolbar isDrawerOpen={this.state.showSideDrawer} openMenu={this.sideDrawerOpenHandler} closeMenu={this.sideDrawerCloseHandler}/>
      <SideDrawer show={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
      <main className={Classes.content}>{this.props.children}</main>
    </Wrapper>);
  }
}

export default Layout;
