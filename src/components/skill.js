import React, { Component } from 'react';
import Helmet from 'react-helmet';

class Skill extends Component {
  render() {
    return (
      <div>
        <br/>
        <h3>Skills</h3>
        <img src={require(`../image/myskills.png`)} alt="my skills" style = {{width: '75%', height: 'auto', display: 'block', margin: 'auto'}}/>
        <br/><br/><br/>
        <p style = {{textAlign: 'left', fontSize: '1.8vmax', fontWeight: 'bold', marginLeft: '10%', marginRight: '10%'}}>I believe that there are always different skills required to solve various kind of problems. Along the way, curiosity has led me to explore and learn more technologies, in turn, help me to work on various projects to help others solve problems.</p>
      </div>
    )
  }
}

export default Skill
