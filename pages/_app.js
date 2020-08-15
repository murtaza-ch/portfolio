import App, { Container } from "next/app";
import auth0 from '../services/auth0';
import  "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";

class PortfolioApp extends App {
  // TODO: execute here getInitialProps and pass this data to your page
  static async getInitialProps({Component,router,ctx}) {
      let pageProps
      const user = process.browser ? await auth0.clientAuth() :await auth0.serverAuth(ctx.req);

      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
        
    }

    const auth = {user, isAuthenticated: !!user}; 

    return { pageProps, auth };
  }

  render() {
    // Component holds page you are navigating to
    const { Component, pageProps, auth } = this.props;

    return (
        <Component {...pageProps} auth={auth} />
    );
  }
}

export default PortfolioApp;
