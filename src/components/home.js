import React, { Component } from "react";
import Splash from './splash';

import '../home.css';
class Home extends Component {
  render() {
    return (
      <div style = {{textAlign: 'center'}}>
        <div className ="lineHeight boxContainer">
            <div className="item">
              <img src={require(`../myprofile.png`)} alt="my profile" style = {{ width: '90%', borderRadius: '20px'}}/>
              <br/>
              <br/>
              <h1 style = {{textAlign: 'center'}}>Joonhyeok Ahn</h1>
              <h2 style = {{textAlign: 'center'}}>B.S in Computer Science</h2>
            </div>
            <div className="item">
              <div style = {{textAlign: 'left'}}>
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
