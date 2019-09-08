import React, { Component } from 'react';
import ExperienceCard from './experienceCard';
import experienceData from '../json/experienceJson';

import "../css/experience.css";

class Experience extends Component {
  render() {
    const experienceComponents = experienceData.map(experience => <ExperienceCard key= {experience.id} experience={experience}/>)

    return (
      <div>
        <br/>
        <h3 style = {{textAlign: 'center', fontWeight: 'bold'}}>Experience</h3>
        <br/>
        {experienceComponents}
      </div>
    )
  }
}

export default Experience
