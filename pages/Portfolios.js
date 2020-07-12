import React, { Component } from "react";
import BaseLayout from '../components/layout/BaseLayout';
import axios from "axios";
import Link from "next/link";

export default class Portfolios extends Component {
  static async getInitialProps() {
    let posts = [];
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      posts = response.data;
    } catch (error) {
      console.log(error);
    }
    return { posts: posts.slice(0, 10) };
  }

  renderPosts = (posts) => {
    return (
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link  href="/portfolio/[id]" as={`/portfolio/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    const { posts } = this.props;
    return (
      <BaseLayout>
        <h1>I'm a Portfolio</h1>
        {this.renderPosts(posts)}
      </BaseLayout>
    );
  }
}
