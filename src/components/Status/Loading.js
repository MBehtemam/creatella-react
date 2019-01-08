import React, { Component } from "react";
import { connect } from "react-redux";
import State from "Creatella-business-logic/Shared/components/Status/Loading/State";

class MyLoading extends Component {
  render() {
    return this.props.isFetching && <span>Loading</span>;
  }
}

const Loading = connect(
  State,
  {}
)(MyLoading);
export default Loading;
