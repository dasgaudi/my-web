import React, { Component } from "react";
import Splash from './splash';

import '../home.css';
class Home extends Component {
  render() {
    return (
      <div>
        <div className= "boxContainer">
          <img className= "item"src={require(`../myprofile.png`)} alt="my profile" style = {{ width: '40vmin', borderRadius: '20px'}}/>
          <br/>
          <br/>
          <p className= "item" style = {{textAlign: 'center', marginLeft: '2%', marginRight: '2%', fontSize: '3vmin', fontWeight: 'bold'}}>Joonhyeok Ahn</p>

        </div>
        <Splash/>
      </div>
    )
  }
}

export default Home
