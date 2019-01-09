import React from "react";
import { connect } from "react-redux";
import SortActions from "Creatella-business-logic/Shared/components/Sort/Actions";
import SortState from "Creatella-business-logic/Shared/components/Sort/State";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";

class Sort extends React.Component {
  render() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Sort By{" "}
          {this.props.sortByOnServer && (
            <span>{this.props.sortByOnServer}</span>
          )}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem onClick={() => this.props.sortById()}>Id</DropdownItem>
          <DropdownItem onClick={() => this.props.sortByPrice()}>
            Price
          </DropdownItem>
          <DropdownItem onClick={() => this.props.sortBySize()}>
            Size
          </DropdownItem>
          <DropdownItem>Reset Sort</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

const SortDropDown = connect(
  SortState,
  SortActions
)(Sort);

export default SortDropDown;
