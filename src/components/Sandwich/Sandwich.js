import React from "react";
import SandwichIngredient from "./SandwichIngredients/SandwichIngredients";
import Classes from "./Sandwich.css";

const Sandwich = props => {
  const ingredients = Object.keys(props.ingredients)
    .map(ingredient => {
      return [...Array(props.ingredients[ingredient])].map((_, index) => {
        return (
          <SandwichIngredient type={ingredient} key={ingredient + index} />
        );
      });
    })
    .reduce((array, element) => {
      return array.concat(element);
    }, []);

  return (
    <div className={Classes.Sandwich}>
      <SandwichIngredient type={"bread-top"} />
      {ingredients.length ? ingredients : <p> empty </p>}
      <SandwichIngredient type={"bread-bottom"} />
    </div>
  );
};
export default Sandwich;
