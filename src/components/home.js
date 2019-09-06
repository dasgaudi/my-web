import React, { Component } from "react";

import '../home.css';
class Home extends Component {
  render() {
    return (
      <div className="content">
        <div className ="lineHeight">
          <h1 style = {{textAlign: 'center', fontWeight: 'bold'}}>Joonhyeok Ahn</h1>
          <h2 style = {{textAlign: 'center'}}>B.S in Computer Science</h2>
        </div>
        <br/><br/>
        <p className= "missionStatement">_______ Empower people to achieve more by providing software</p>
        <br/>
        <div style = {{width: '70%'}} >
          <p className ="description"> There are a lot of problems that can be solved by technologies. My Goal is to create useful software that can help people to solve those problems. To achieve my goal, I've tried to explore and learn a wide range of technologies from web development to mobile devopment, to machine learning recently.</p>
        </div>
        <img src={require(`../myprofile.png`)} alt="my profile" className="profileImg"/>

      </div>
    )
  }
}

export default Home
