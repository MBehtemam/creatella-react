import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Sort extends React.Component {
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
        <DropdownToggle caret>Sort</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Sort On Server</DropdownItem>
          <DropdownItem>Id</DropdownItem>
          <DropdownItem>Size</DropdownItem>
          <DropdownItem>Price</DropdownItem>
          <DropdownItem header>Sort On Client</DropdownItem>
          <DropdownItem>Id</DropdownItem>
          <DropdownItem>Size</DropdownItem>
          <DropdownItem>Price</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
