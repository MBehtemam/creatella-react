import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Navbar from "./components/Layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import AdsContainer from "./components/Grid/AdsContainer";
import ProductContainer from "./components/Grid/ProductContainer";
import Sort from "./components/Sort/Sort";
class App extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <Row>
          <Col xs={6}>
            <Sort />
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <AdsContainer />
          </Col>
          <Col xs={3}>
            <ProductContainer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
