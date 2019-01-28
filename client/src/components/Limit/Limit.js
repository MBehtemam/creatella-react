import React from "react";
import { connect } from "react-redux";
import State from "../../Creatella-business-logic/Shared/components/Limit/State";
import Actions from "../../Creatella-business-logic/Shared/components/Limit/Actions";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";

class MyLimit extends React.Component {
  render() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Limit By {this.props.limit && <span>{this.props.limit}</span>}
        </DropdownToggle>
        <DropdownMenu right>
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
      </UncontrolledDropdown>
    );
  }
}

const Limit = connect(
  State,
  Actions
)(MyLimit);
export default Limit;
