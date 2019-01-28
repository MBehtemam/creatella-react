import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Navbar from "./components/Layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Store from "./Creatella-business-logic/Shared/components/Store";
import Grid from "./components/Grid";
import Scroll from "./components/Scroll";
import { Provider } from "react-redux";
import EndOfProducts from "./components/Status/EndOfProducts";
class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Container fluid={false}>
          <Navbar />
          <Row>
            <Scroll>
              <Grid />
            </Scroll>
          </Row>
          <Row>
            <Col>
              <EndOfProducts />
            </Col>
          </Row>
        </Container>
      </Provider>
    );
  }
}

export default App;
