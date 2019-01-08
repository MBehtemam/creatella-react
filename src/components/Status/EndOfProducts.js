import React, { Component } from "react";
import { connect } from "react-redux";
import State from "Creatella-business-logic/Shared/components/Status/EndOfProducts/State";

class MyEndOfProducts extends Component {
  render() {
    return this.props.endOfProducts && <span>~ end of catalogue ~</span>;
  }
}

const EndOfProducts = connect(
  State,
  {}
)(MyEndOfProducts);
export default EndOfProducts;
