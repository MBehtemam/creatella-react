import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody } from "reactstrap";

export default class AdsContainer extends Component {
  render() {
    return (
      <Card>
        <CardImg width="100%" src="https://picsum.photos/320/200?image=9" />
        <CardBody>Our sponsor add</CardBody>
      </Card>
    );
  }
}
