import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Limit extends React.Component {
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
          <DropdownItem>20</DropdownItem>
          <DropdownItem>40</DropdownItem>
          <DropdownItem>60</DropdownItem>
          <DropdownItem>Clear Limit</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
