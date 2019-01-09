import React, { Component } from "react";
import { connect } from "react-redux";
import State from "Creatella-business-logic/Shared/components/Status/Loading/State";
import { PulseLoader } from "react-spinners";

class MyLoading extends Component {
  render() {
    return (
      <PulseLoader size={10} color="#F8E71C" loading={this.props.isFetching} />
    );
  }
}

const Loading = connect(
  State,
  {}
)(MyLoading);
export default Loading;
