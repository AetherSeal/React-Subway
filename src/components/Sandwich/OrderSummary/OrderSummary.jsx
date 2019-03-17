import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from '../../../hoc/Wrapper/Wrapper'
import Confirmation from '../../UI/Confirmation/Confirmation'
import Currency from '../../UI/Currency/Currency'
import Classes from './OrderSummary.css'

const OrderSummary = (props)=>{
    const ingredients = Object.keys(props.ingredients).map( (ingredient, index) => {
            return(
                <li className={Classes.ListItem} key={index}><span>{ingredient}: {props.ingredients[ingredient]}</span></li>
            )
        })
    
    return(
        <Wrapper>
                <h3>Your order:</h3>
                <p>
                    great sandwich for healty life
                </p>
                <ul className={Classes.List}>
                    {ingredients}
                </ul>
                <div>
                    <strong>Total: <Currency ammount={props.total}></Currency></strong>
                </div>
                <Confirmation confirmationQuestion={'It\'s all good?'}
                confirmBtnMsg={'Continue'}
                cancelBtnMsg={'Cancel'}
                cancelFunc={props.cancelCheckout} 
                confirmFunc={props.continueCheckout}></Confirmation>
        </Wrapper>
    )
}

OrderSummary.propTypes ={
    cancelCheckout:PropTypes.func,
    continueCheckout:PropTypes.func,
    ingredients:PropTypes.object,
    total:PropTypes.number,
}
export default OrderSummary
