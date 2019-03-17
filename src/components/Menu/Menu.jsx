import React from 'react'
import PropTypes from 'prop-types'

import Classes from './Menu.css'

const Menu= props =>{

    const click = ()=>{
        props.isDrawerOpen?props.closeMenu():props.openMenu()
    }

    return(
        <button className={Classes.Hamburger} type="button" onClick={click}>
            <div className={props.isDrawerOpen?Classes.Line1 +' '+Classes.Bar :Classes.Bar}></div>
            <div className={props.isDrawerOpen?Classes.Line2 +' '+Classes.Bar :Classes.Bar} style={{margin : '5px 0'}}></div>
            <div className={props.isDrawerOpen?Classes.Line3 +' '+Classes.Bar :Classes.Bar}></div>
        </button>
    )

}

Menu.propTypes={
    openMenu:PropTypes.func,
    closeMenu:PropTypes.func,
    isDrawerOpen:PropTypes.bool
}


export default Menu