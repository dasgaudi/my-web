import React, { Component } from "react";
import Splash from './splash';

import '../css/home.css';
class Home extends Component {
  render() {
    return (
      <div style = {{textAlign: 'center'}}>
        <div className ="lineHeight boxContainer">
            <div className="item">
              <img src={require(`../image/myprofile.png`)} alt="my profile" style = {{ width: '50%', borderRadius: '20px'}}/>
              <br/>
              <br/>
              <h1 style = {{textAlign: 'center', fontWeight: 'bold'}}>Joonhyeok Ahn</h1>
              <h3 style = {{textAlign: 'center'}}>B.S in Computer Science</h3>
              <br/>

              <div style = {{display: 'flex', justifyContent: 'center'}}>
                <div className ="nestedItem">
                  <h3 style = {{fontWeight: 'bold'}}>_______ Empower people to achieve more by providing software</h3>
                  <br/>
                  <p className = "homeParagraph"> There are a lot of problems that can be solved by technologies. My goal is to create useful software that can help people to solve those problems. To achieve my goal, I've tried to explore and learn a wide range of technologies from web development to mobile development, to machine learning recently.</p>
                </div>
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
