import React, { Component,Fragment } from "react";
import Link from 'next/link';


export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/portfolios">
          <a>Portfolio</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/cv">
          <a>Cv</a>
        </Link>

        <style jsx>{`
        a {
            text-decoration:none;

        }
        `}
        </style>
      </Fragment>
    );
  }
}
