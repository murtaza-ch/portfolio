import React, { Component } from "react";
import BaseLayout from "../components/layout/BaseLayout";
import BasePage from "../components/BasePage";

export default class Cv extends Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>Cv</BasePage>
      </BaseLayout>
    );
  }
}
