import React, { Component } from "react";
import { Row, Col, Navbar, NavbarBrand } from "reactstrap";
export default class MyNavbar extends Component {
  render() {
    return (
      <Row>
        <Col>
          <Navbar color="light" light expand="md">
            <NavbarBrand>Creatella</NavbarBrand>
          </Navbar>
        </Col>
      </Row>
    );
  }
}
