import React, { Component } from 'react';
import ProjectCard from './projectCard';
import projectsData from '../json/projectsJson';

import '../css/projects.css'
class Project extends Component {
  render() {
    const projectsComponent = projectsData.map(project => <div className = "item"><ProjectCard key= {project.id} project={project}/></div>)

    return (
      <div>
        <h2 style ={{ textAlign: 'center', fontWeight: 'bold'}}>Projects</h2>
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
