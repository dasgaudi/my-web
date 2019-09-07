import React, { Component } from 'react';
import ExperienceCard from './experienceCard';
import experienceData from '../experienceJson';

import '../experience.css';

class Experience extends Component {

  render() {

    const experienceComponents = experienceData.map(experience => <ExperienceCard key= {experience.id} experience={experience}/>)

    return (
      <div>
        <br/>
        <p className="centered" style = {{fontWeight: "bold", fontSize: '2.8vmin'}}>My Experience</p>
        <br/>
        {experienceComponents}
      </div>
    )
  }
}

export default Experience
