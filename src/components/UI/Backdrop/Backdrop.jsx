import React from 'react'
import PropTypes from "prop-types";

import Classes from '../Backdrop/Backdrop.css'

const Backdrop = props => {

   return( 
       props.show ? (
        <div className={Classes.backdrop}
        onClick={()=>props.close()}
        >
   </div> ): null)
}

Backdrop.propTypes ={
    show: PropTypes.bool,
    close:PropTypes.func
}
export default Backdrop