import React, { Component } from "react";

import '../home.css';
class Home extends Component {
  render() {
    return (
      <div className="content">
        <div className ="lineHeight">
          <h1 style = {{textAlign: 'center', fontSize: '64px', fontWeight: 'bold'}}>Joonhyeok Ahn</h1>
          <h2 style = {{textAlign: 'center', fontSize: '32px'}}>B.S in Computer Science</h2>
        </div>
        <br/><br/>
        <p className= "missionStatement">_______ Empower people to achieve more by providing software</p>
        <img src={require(`../myprofile.png`)} alt="my profile" className="profileImg"/>

      </div>
    )
  }
}

export default Home
