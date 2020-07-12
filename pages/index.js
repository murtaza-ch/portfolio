import React, { Component } from 'react'
import BaseLayout from '../components/layout/BaseLayout';
import '../styles/main.scss';
import axios from 'axios';

export default class index extends Component {

  static async getInitialProps(){
    let data={};
    try {
      const response=await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      data=response.data;
      
    } catch (error) {
      console.log(error);
    }
    return {data};
  }

  constructor(props){
    super(props);
    this.state={
      title:'Im a title'
    }
    console.log('Hello');
  }

  componentDidMount(){
    console.log('Mout');
  }

  componentDidUpdate(){
    console.log('update');
  }

  componentWillUnmount(){
    console.log('unmount');
  }
  handleChange=()=>{
    this.setState({title:'Upfat'})
  }

  render() {
    return (
      <BaseLayout>
        <h4 className="title">Home Page</h4>
        <h4>{this.state.title}</h4>
        <button onClick={()=> this.handleChange()}>onClick</button>
      </BaseLayout>
    )
  }
}
