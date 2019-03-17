import React from 'react'

import SubwayLogo from '../../assets/images/logo.png'
import Classes from './Logo.css'

const Logo = props =>{
    return(
        <div  className={Classes.Logo}>
            <img className={Classes.LogoImage} src={SubwayLogo} />
        </div>
    )
}

export default Logo