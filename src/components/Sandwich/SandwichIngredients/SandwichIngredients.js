import React from "react";
import Classes from "../SandwichIngredients/SandwichIngredients.css";
import PropTypes from "prop-types";

class SandwichIngredient extends React.Component {
  propTypes = {
    ingredient: PropTypes.string,
    type: PropTypes.string
  };

  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-top":
        ingredient = (
          <div className={Classes.BreadTop}>
            <div className={Classes.Seeds1} />
            <div className={Classes.Seeds2} />
          </div>
        );
        break;
      case "bread-bottom":
        ingredient = <div className={Classes.BreadBottom} />;
        break;
      case "meat":
        ingredient = <div className={Classes.Meat} />;
        break;
      case "cheese":
        ingredient = <div className={Classes.Cheese} />;
        break;
      case "salad":
        ingredient = <div className={Classes.Salad} />;
        break;
      case "bacon":
        ingredient = <div className={Classes.Bacon} />;
        break;

      default:
        break;
    }

    return ingredient;
  }
}
export default SandwichIngredient;
