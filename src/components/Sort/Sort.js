import React from "react";
import { connect } from "react-redux";
import SortActions from "Creatella-business-logic/Shared/components/Sort/Actions";
import SortState from "Creatella-business-logic/Shared/components/Sort/State";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Sort extends React.Component {
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
        <DropdownToggle caret>Sort By</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Sort On Server</DropdownItem>
          <DropdownItem
            onClick={() =>
              this.props.sortById(this.props.pagination, this.props.limit)
            }
          >
            Id
          </DropdownItem>
          <DropdownItem
            onClick={() =>
              this.props.sortBySize(this.props.pagination, this.props.limit)
            }
          >
            Size
          </DropdownItem>
          <DropdownItem
            onClick={() =>
              this.props.sortByPrice(this.props.pagination, this.props.limit)
            }
          >
            Price
          </DropdownItem>
          <DropdownItem>Clear Sort</DropdownItem>
          <DropdownItem header disabled>
            Sort On Client
          </DropdownItem>
          <DropdownItem>Id</DropdownItem>
          <DropdownItem>Size</DropdownItem>
          <DropdownItem>Price</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

const SortDropDown = connect(
  SortState,
  SortActions
)(Sort);

export default SortDropDown;
