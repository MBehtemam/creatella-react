import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardImg, CardBody } from "reactstrap";
import Actions from "Creatella-business-logic/Shared/components/Ads/Actions";
import State from "Creatella-business-logic/Shared/components/Ads/State";
import Constants from "../../config/default";

class MyAdsContainer extends Component {
  state = {
    adsId: null
  };
  componentDidMount() {
    const adsId = `ads-${Date.now()}`;
    this.props.getRandomAdsId(adsId);
    this.setState({ adsId });
  }
  render() {
    const { IDS } = this.props.ads;
    return (
      <Card>
        {IDS.hasOwnProperty(this.state.adsId) && (
          <CardImg
            width="100%"
            src={`${Constants.AdsServerUrl}${IDS[this.state.adsId]}`}
          />
        )}
        <CardBody>Our sponsor add</CardBody>
      </Card>
    );
  }
}

const AdsContainer = connect(
  State,
  Actions
)(MyAdsContainer);
export default AdsContainer;
