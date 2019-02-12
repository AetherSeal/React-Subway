import React from "react";
import Wrapper from "../../hoc/Wrapper";
import Sandwich from "../../components/Sandwich/Sandwich";
class SandwichBuilder extends React.Component {
  state = {
    ingredients:{
      salad:0,
      bacon:0,
      cheese:0,
      meat:0,
    }
  }

  render() {
    return (
      <Wrapper>
        <div>sandwich control panel</div>
        <Sandwich ingredients={this.state.ingredients} />
      </Wrapper>
    );
  }
}
export default SandwichBuilder;
