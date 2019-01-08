import React from "react";
import { connect } from "react-redux";
import State from "Creatella-business-logic/Shared/components/Limit/State";
import Actions from "Creatella-business-logic/Shared/components/Limit/Actions";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class MyLimit extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>Limit By</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => this.props.setLimitProducts(20)}>
            20
          </DropdownItem>
          <DropdownItem onClick={() => this.props.setLimitProducts(40)}>
            40
          </DropdownItem>
          <DropdownItem onClick={() => this.props.setLimitProducts(60)}>
            60
          </DropdownItem>
          <DropdownItem>Clear Limit</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

const Limit = connect(
  State,
  Actions
)(MyLimit);
export default Limit;
