import React, { Component } from "react";
import { Navbar, NavbarBrand, Collapse, Nav, NavItem } from "reactstrap";
import Sort from "../Sort/Sort";
import Limit from "../Limit/Limit";
import Loading from "../Status/Loading";
export default class MyNavbar extends Component {
  render() {
    return (
      <Navbar color="light" light expand="md" sticky="top">
        <NavbarBrand>Creatella</NavbarBrand>

        <Collapse isOpen={true} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Loading />
            </NavItem>
            <Sort />
            <Limit />
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
