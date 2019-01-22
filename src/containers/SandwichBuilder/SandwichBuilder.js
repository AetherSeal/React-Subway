import React from "react";
import Aux from "../../hoc/Aux";
import Sandwich from "../../components/Sandwich/Sandwich";
class SandwichBuilder extends React.Component {
  render() {
    return (
      <Aux>
        <div>sandwich control panel</div>
        <Sandwich />
      </Aux>
    );
  }
}
export default SandwichBuilder;
