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
              <h1>Joonhyeok Ahn</h1>
              <h3>B.S in Computer Science</h3>
              <br/>

              <div style = {{display: 'flex', justifyContent: 'center'}}>
                <div className ="nestedItem">
                  <h3>_______ Empower people to achieve more by providing software</h3>
                  <br/>
                  <p> There are a lot of problems that can be solved by technologies. My Goal is to create useful software that can help people to solve those problems. To achieve my goal, I've tried to explore and learn a wide range of technologies from web development to mobile devopment, to machine learning recently.</p>
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
