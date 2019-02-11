import React from "react";
import Wrapper from "../../hoc/Wrapper";
import Sandwich from "../../components/Sandwich/Sandwich";
class SandwichBuilder extends React.Component {
  render() {
    return (
      <Wrapper>
        <div>sandwich control panel</div>
        <Sandwich />
      </Wrapper>
    );
  }
}
export default SandwichBuilder;
