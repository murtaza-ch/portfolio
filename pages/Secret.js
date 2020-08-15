import React, { Component } from "react";
import BaseLayout from "../components/layout/BaseLayout";
import BasePage from "../components/BasePage";
import withAuth from "../components/hoc/withAuth";
import {getSecretData} from '../actions/index'

class Secret extends Component {

  constructor(props){
    super(props);
    this.state={
      secretData:[]
    }
  }
  static async getInitialProps({req}){
    const anotherSecretData = await getSecretData(req);
    return { anotherSecretData };
  }

  async componentDidMount() {
    const secretData=await getSecretData();

    this.setState({
      secretData,
    });
  }

  displayData(){
    const {secretData}=this.state;
    if (secretData && secretData.length > 0) {
      return secretData.map((data,index)=>{
        return (
          <div key={index}>
          <p>{data.title}</p>
          <p>{data.desc}</p>
          </div>
        )
      })
    }
    return null
  }

  render() {
    const { superSecretValue } = this.props;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          dsfsdfdsf
          {superSecretValue}
          {this.displayData()}
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth()(Secret);
