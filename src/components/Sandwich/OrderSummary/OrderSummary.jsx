import React from 'react'
import Wrapper from '../../../hoc/Wrapper'

const OrderSummary = (props)=>{
    const ingredients = Object.keys(props.ingredients).map( (ingredient, index) => {
            return(
                <li key={index}><span>{ingredient}: {props.ingredients[ingredient]}</span></li>
            )
        })
    
    return(
        <Wrapper>
                <h3>Your order:</h3>
                <p>
                    great sandwich for healty life
                </p>
                <ul>
                    {ingredients}
                </ul>
                <div>
                    do you want to checkout ?
                    <div>
                        <button>Yes</button>
                        <button>No</button>
                    </div>
                </div>
        </Wrapper>
    )
}

export default OrderSummary
