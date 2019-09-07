import React, { Component } from "react";
import Splash from './splash';

import '../home.css';
class Home extends Component {
  render() {
    return (
      <div style = {{textAlign: 'center'}}>
        <div className ="lineHeight boxContainer">
            <div className="item">
              <img src={require(`../myprofile.png`)} alt="my profile" style = {{ width: '100%', borderRadius: '20px'}}/>
              <br/>
              <br/>
              <p style = {{textAlign: 'center', marginLeft: '2%', marginRight: '2%', fontSize: '3vmax', fontWeight: 'bold'}}>Joonhyeok Ahn</p>
              <p style = {{textAlign: 'center', margin: '0', fontSize: '2.0vmax', fontWeight: 'bold'}}>B.S in Computer Science</p>
              <br/>
              <div style = {{textAlign: 'left', marginLeft: '2%', marginRight: '2%'}}>
                <p className= "missionStatement">_______ Empower people to achieve more by providing software</p>
                <br/>
                <p className ="description"> There are a lot of problems that can be solved by technologies. My Goal is to create useful software that can help people to solve those problems. To achieve my goal, I've tried to explore and learn a wide range of technologies from web development to mobile devopment, to machine learning recently.</p>
              </div>
            </div>
          <br/>
        </div>
        <Splash/>
      </div>
    )
  }
}

export default Home
