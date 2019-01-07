import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

export default class ProductContainer extends Component {
  render() {
    return (
      <Card>
        <div
          style={{
            textAlign: "center",
            fontSize: 40,
            width: "100%",
            backgroundColor: "#CCCCCC",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <span>( .-. )</span>
        </div>
        <CardText>3 days ago</CardText>
        <Button color="primary">Buy $10</Button>
      </Card>
    );
  }
}
