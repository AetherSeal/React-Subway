import React from 'react'
import PropTypes from 'prop-types'

import Classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import Menu from '../../Menu/Menu'
import NavigationItems from '../NavigationItems/NavigationItems'

const Toolbar = props =>{
    return(
    <header className={Classes.Header}>
        <div className={Classes.MobileOnly}>
            <Menu openMenu={props.openMenu} closeMenu={props.closeMenu} isDrawerOpen={props.isDrawerOpen} ></Menu>
        </div>
        <div className={Classes.LogoWrapper}>
            <Logo></Logo>
        </div>
        <nav className={Classes.NavBar+' '+Classes.DesktopOnly}>
            <NavigationItems></NavigationItems>
        </nav>
    </header>
    )
}

Toolbar.propTypes ={
    openMenu : PropTypes.func,
    isDrawerOpen: PropTypes.bool,
    closeMenu: PropTypes.func
}
export default Toolbar