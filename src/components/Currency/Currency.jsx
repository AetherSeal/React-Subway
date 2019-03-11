import React from 'react'
import PropTypes from 'prop-types'

const Currency = props =>{
    return(
        <span className={props.style}>{props.ammount}$</span>
    )
}

Currency.propTypes = {
    style: PropTypes.string.isRequired,
    ammount: PropTypes.number.isRequired
}

export default Currency

