import React, { Component } from "react";
import { Card, CardText, Button } from "reactstrap";

export default class ProductContainer extends Component {
  render() {
    const { price, date, face, size } = this.props.product;
    return (
      <Card>
        <div
          style={{
            textAlign: "center",
            fontSize: size,
            width: "100%",
            backgroundColor: "#CCCCCC",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <span>{face}</span>
        </div>
        <CardText>{date}</CardText>
        <Button color="primary">Buy {price}</Button>
      </Card>
    );
  }
}
