import React from "react";
import PropTypes from "prop-types";

import Classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const BuildControls = props => {
    console.log(props.price)
    return (
    <div className={Classes.controlsWrapper}>
      <p>Total Price:{props.price}</p>
      {props.ingredients.types.map(ingredient => {
          console.log(ingredient)
        return (
          <BuildControl
            key={ingredient}
            label={ingredient}
            add={()=>props.addIngredient(ingredient)}
            remove={()=>props.removeIngredient(ingredient)}
            isDisabled={props.disabledIngredients[ingredient]}
          />
        );
      })}
    </div>
  );
};

BuildControls.propTypes = {
  ingredients: PropTypes.object,
  addIngredient: PropTypes.func,
  removeIngredient: PropTypes.func,
  disabledIngredients:PropTypes.object,
  price:PropTypes.number
};

export default BuildControls;
