import React, { Component } from "react";
import { connect } from "react-redux";
import State from "Creatella-business-logic/Shared/components/Status/EndOfProducts/State";
import { Alert } from "reactstrap";
class MyEndOfProducts extends Component {
  render() {
    return (
      this.props.endOfProducts && (
        <Alert color="dark">~ end of catalogue ~</Alert>
      )
    );
  }
}

const EndOfProducts = connect(
  State,
  {}
)(MyEndOfProducts);
export default EndOfProducts;
