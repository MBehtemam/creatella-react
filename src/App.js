import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Navbar from "./components/Layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import AdsContainer from "./components/Grid/AdsContainer";
import ProductContainer from "./components/Grid/ProductContainer";
import Sort from "./components/Sort/Sort";
import Limit from "./components/Limit/Limit";
import Store from "Creatella-business-logic/Shared/components/Store";
import Grid from "./components/Grid";
import Scroll from "./components/Scroll";
import { Provider } from "react-redux";
class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Container>
          <Navbar />
          <Row />
          <Row>
            <Col xs={2}>
              <Sort />
            </Col>
            <Col xs={2}>
              <Limit />
            </Col>
          </Row>
          <Row>
            <Scroll>
              <Grid />
            </Scroll>
          </Row>
        </Container>
      </Provider>
    );
  }
}

export default App;
