import React, { Component, Fragment } from "react";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";
import State from "Creatella-business-logic/Shared/components/Grid/State";
import Actions from "Creatella-business-logic/Shared/components/Grid/Actions";
import ProductContainer from "./ProductContainer";
import AdsContainer from "./AdsContainer";

class MyGrid extends Component {
  componentDidMount() {
    this.props.initialProducts();
  }
  render() {
    let adsCounter = 0;
    return (
      <Row>
        {this.props.products.map((product, index) => {
          adsCounter++;
          if (adsCounter === this.props.ads.adsPerProduct) {
            adsCounter = 0;
            return (
              <Fragment key={product.id}>
                <Col xs={3}>
                  {" "}
                  <ProductContainer product={product} />
                </Col>
                <Col xs={3}>
                  <AdsContainer />
                </Col>
              </Fragment>
            );
          } else {
            return (
              <Col xs={3} key={product.id}>
                <ProductContainer product={product} />
              </Col>
            );
          }
        })}
      </Row>
    );
  }
}

const Grid = connect(
  State,
  Actions
)(MyGrid);
export default Grid;
