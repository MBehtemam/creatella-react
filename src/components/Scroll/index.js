import React, { Component } from "react";
import { connect } from "react-redux";
import Actions from "Creatella-business-logic/Shared/components/Scroll/Actions";
import State from "Creatella-business-logic/Shared/components/Scroll/State";

class MyScroll extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  onScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 300
    ) {
      this.props.loadMoreProducts();
    }
  };
  render() {
    return <div>{this.props.children}</div>;
  }
}

const Scroll = connect(
  State,
  Actions
)(MyScroll);
export default Scroll;
