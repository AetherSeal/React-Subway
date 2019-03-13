import React from "react";

import Wrapper from "../../hoc/Wrapper";
import Sandwich from "../../components/Sandwich/Sandwich";
import BuildControls from "../../components/Sandwich/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/Sandwich/OrderSummary/OrderSummary"

const INGREDIENT_PRICE = {
  salad: 1,
  bacon: 3,
  cheese: 0.5,
  meat: 1.25
};
class SandwichBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 0,
    purchasable: false,
    purchasing: false,
  };

  checkout = () =>{
    this.setState({purchasing:true})
  }
  cancelCheckout  = () =>{
    debugger
    this.setState({purchasing:false})
  }
  updatePurchasable = (ingredients) => {
    const sum = Object.keys(ingredients).map(ingKey => {
      return ingredients[ingKey];
    }).reduce((sum, el) => {
      return sum + el;
    }, 0);
    this.setState({purchasable: sum > 0});

  };
  addIngredientHandler = type => {
    const actualAmmount = this.state.ingredients[type];
    const newAmmount = actualAmmount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = newAmmount;

    const priceAddition = INGREDIENT_PRICE[type];
    const actualPrice = this.state.totalPrice;
    const newPrice = actualPrice + priceAddition;

    this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    this.updatePurchasable(updatedIngredients);
  };
  removeIngredientHandler = type => {
    const actualAmmount = this.state.ingredients[type];
    const newAmmount = actualAmmount - 1;
    if (newAmmount < 0) {
      return;
    }
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = newAmmount;

    const priceAddition = INGREDIENT_PRICE[type];
    const actualPrice = this.state.totalPrice;
    const newPrice = actualPrice - priceAddition;

    this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    this.updatePurchasable(updatedIngredients);
  };

  types = Object.keys(this.state.ingredients);
  labels = this.types.map(key => key.toLowerCase());
  ingredients = {
    types: this.types,
    labels: this.labels
  };

  render() {
    const disabledIngredients = {
      ...this.state.ingredients
    };
    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }

    return (<Wrapper>
      <Modal show={this.state.purchasing} close={this.cancelCheckout}>
        <OrderSummary ingredients={this.state.ingredients}></OrderSummary>
      </Modal>
      <BuildControls 
        ingredients={this.ingredients} 
        disabledIngredients={disabledIngredients} 
        addIngredient={this.addIngredientHandler} 
        removeIngredient={this.removeIngredientHandler} 
        price={this.state.totalPrice} 
        purchasable={this.state.purchasable}
        checkout={this.checkout} >
      </BuildControls>      
      <Sandwich ingredients={this.state.ingredients}/>
    </Wrapper>);
  }
}
export default SandwichBuilder;