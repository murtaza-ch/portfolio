import React, { Component } from "react";
import { withRouter } from "next/router";
import axios from "axios";
import BaseLayout from "../../components/layout/BaseLayout";
import BasePage from "../../components/BasePage";

class portDetails extends Component {
  static async getInitialProps(context) {
    let post = {};
    const postId = context.query.id;
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      post = response.data;
    } catch (error) {
      console.log(error);
    }
    return { post };
  }

  render() {
    const { post } = this.props;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1>{post.title}</h1>
          <h4>{post.body}</h4>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withRouter(portDetails);
