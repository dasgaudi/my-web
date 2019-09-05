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
        <h2 className="centered" style = {{fontWeight: "bold"}}>My Experience</h2>
        <br/>
        {experienceComponents}
      </div>
    )
  }
}

export default Experience
