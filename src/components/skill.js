import React, { Component } from 'react';
import Helmet from 'react-helmet';

class Skill extends Component {
  render() {
    return (
      <div>
        <Helmet>
              <style>{'body { background-color: white; }'}</style>
        </Helmet>
        <img src={require(`../myskills.png`)} alt="my skills" style = {{width: '60%', height: 'auto', display: 'block', margin: 'auto'}}/>
        <br/><br/><br/>
        <p style = {{textAlign: 'left', fontSize: '18px', fontWeight: 'bold', marginLeft: '10%', marginRight: '10%'}}>I believe that there are always different skills required to solve various kind of problems. Along the way, curiosity has led me to explore and learn more technologies, in turn, help me to work on various projects to help others solve problems.</p>
      </div>
    )
  }
}

export default Skill
