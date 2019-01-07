import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Navbar from "./components/Layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import AdsContainer from "./components/Grid/AdsContainer";
class App extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <Row>
          <Col xs={3}>
            <AdsContainer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
