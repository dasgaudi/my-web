import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "../components/home";
import Experience from "../components/experience";
import Project from "../components/project";
import Skill from "../components/skill";
// css
import '../navbar.css';

function Navbar() {
    return (
      <Router>
        <div className= "toolbar">
          <nav className="navbar navbar-expand-lg">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link" style = {{marginLeft: "10px"}}> Joonhyeok Ahn </Link> </li>
              <li><Link to={'/experience'} className="nav-link" style = {{marginLeft: "10px"}}> Experience </Link> </li>
              <li><Link to={'/project'} className="nav-link" style = {{marginLeft: "10px"}}> Projects </Link></li>
              <li><Link to={'/skill'} className="nav-link" style = {{marginLeft: "10px"}}> Skills </Link> </li>
              <li><a className="nav-link" style = {{marginLeft: "10px"}} href={require(`../RESUME.pdf`)} target="_blank">Resume</a></li>

              <div className="navbarRight">
                <li><a href="https://github.com/jooncsguy" target="_blank"><img className="navbarImages" src={require(`../octocat.png`)} alt="github img" /></a></li>
                <li><a href="https://github.com/jooncsguy" target="_blank"><img className="navbarImages" src={require(`../linkedin.png`)} alt="linkedin img"/></a></li>
              </div>
            </ul>
          </nav>
          <hr />

        <Switch>
          <Route exact path = '/' component={Home} />
          <Route path='/experience' component={Experience} />
          <Route path='/project' component={Project} />
          <Route path='/skill' component={Skill} />
        </Switch>
        </div>

      </Router>
    )
}

export default Navbar
