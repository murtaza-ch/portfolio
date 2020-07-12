import React, { Component } from "react";
import { withRouter } from "next/router";
import axios from 'axios';

class portDetails extends Component {
  static async getInitialProps(context) {

    let post = {};
    const postId=context.query.id;
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      post = response.data;
    } catch (error) {
      console.log(error);
    }
    return { post};
  }

  render() {
      const {post}=this.props;
    return (
      <div>
      <h1>{post.title}</h1>
        <h4>{post.body}</h4>
      </div>
    );
  }
}

export default withRouter(portDetails);
