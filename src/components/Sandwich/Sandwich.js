import React from "react";
import SandwichIngredient from "./SandwichIngredients/SandwichIngredients";
import Classes from "./Sandwich.css";
const Sandwich = props => {
  return (
    <div className={Classes.Sandwich}>
      <SandwichIngredient type={"bread-top"} />
      <SandwichIngredient type={"salad"} />
      <SandwichIngredient type={"cheese"} />
      <SandwichIngredient type={"bacon"} />
      <SandwichIngredient type={"meat"} />
      <SandwichIngredient type={"bread-bottom"} />
    </div>
  );
};
export default Sandwich;
