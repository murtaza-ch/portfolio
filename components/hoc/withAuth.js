import React from "react";
import BaseLayout from "../layout/BaseLayout";
import BasePage from "../BasePage";

const namespace = "http://localhost:3000";

export default function (role) {
  return function (Component) {

    return class withAuth extends React.Component {

      static async getInitialProps(args) {
        const pageProps = (await Component.getInitialProps) && (await Component.getInitialProps(args));
        return { ...pageProps };
      }
      
      secretPageRender() {
        const { isAuthenticated, user } = this.props.auth;
        const userRole = user && user[`${namespace}/role`];
        let isAuthorized = false;

        if (role) {
          if (userRole && userRole === role) {
            isAuthorized = true;
          }
        } else {
          isAuthorized = true;
        }

        if (!isAuthenticated) {
          return (
            <BaseLayout {...this.props.auth}>
              <BasePage>
                <h1>
                  You are not authenticated, Please login to access this page!
                </h1>
              </BasePage>
            </BaseLayout>
          );
        } else if (!isAuthorized) {
          return (
            <BaseLayout {...this.props.auth}>
              <BasePage>
                <h1>
                  You are not authorized, You don't have a permission to visit
                  this page!
                </h1>
              </BasePage>
            </BaseLayout>
          );
        } else {
          return <Component {...this.props} />;
        }
      }

      render() {
        return this.secretPageRender();
      }
    };
  };
}
