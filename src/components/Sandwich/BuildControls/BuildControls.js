import React from "react";
import PropTypes from "prop-types";

import Classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";
import Currency from "../../Currency/Currency";

const BuildControls = props => {
  const ingredients = props.ingredients.types.map(ingredient => {
    return (<BuildControl key={ingredient} label={ingredient} add={() => props.addIngredient(ingredient)} remove={() => props.removeIngredient(ingredient)} isDisabled={props.disabledIngredients[ingredient]}/>);
  });

  return (<div className={Classes.controlsWrapper}>
    <div className={Classes.price}>
      Total Price:<Currency style={Classes.currency} ammount={props.price}/>
    </div>

    {ingredients}

    <div className={Classes.orderWrapper}>
      <button className={Classes.orderNow}
        disabled={!props.purchasable}
      >Order now!</button>
    </div>
  </div>);
};

BuildControls.propTypes = {
  ingredients: PropTypes.object,
  addIngredient: PropTypes.func,
  removeIngredient: PropTypes.func,
  disabledIngredients: PropTypes.object,
  purchasable: PropTypes.bool,
  price: PropTypes.number
};

export default BuildControls;
