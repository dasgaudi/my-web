import React, { Component } from 'react';
import ProjectCard from './projectCard';
import projectsData from '../json/projectsJson';

import '../css/projects.css'
class Project extends Component {
  render() {
    const projectsComponent = projectsData.map(project => <div className = "item"><ProjectCard key= {project.id} project={project}/></div>)

    return (
      <div>
        <br/>
        <h3 style ={{ textAlign: 'center', fontWeight: 'bold'}}>Projects</h3>
        <br/>
        <div className="flexbox-container">
          {projectsComponent}
        </div>
        <br/>
        <br/>
      </div>
    )
  }
}

export default Project
