import React from "react";
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import {Animated} from "react-animated-css";
import Home from "../components/home";
import Experience from "../components/experience";
import Project from "../components/project";
import Skill from "../components/skill";
// css
import '../css/navbar.css';

class Navbar extends React.Component {

  render() {
    return (
      <div>
      <Animated animationIn="fadeIn" animationInDuration={4000} isVisible={true}>
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg">
            <ul className="navbar-nav mr-auto">
              <li><NavLink to="/" activeStyle={{ color:'#127bfe' }} className="nav-link" style = {{marginLeft: "10px"}}>Joonhyeok Ahn</NavLink></li>
              <li><NavLink to="/experience" activeStyle={{ color:'#127bfe' }} className="nav-link" style = {{marginLeft: "10px"}}>Experience</NavLink></li>
              <li><NavLink to="/project" activeStyle={{ color:'#127bfe' }} className="nav-link" style = {{marginLeft: "10px"}}>Projects</NavLink></li>
              <li><NavLink to="/skill" activeStyle={{ color:'#127bfe' }} className="nav-link" style = {{marginLeft: "10px"}}>Skills</NavLink></li>
              <li><a className="nav-link" style = {{marginLeft: "10px"}} href={require(`../RESUME.pdf`)} target="_blank">Resume</a></li>
            </ul>
            <div className="narbarRight">
              <li style = {{marginRight: "10px"}}><a href="https://github.com/jooncsguy" target="_blank"><img className="navbarImages" src={require(`../image/octocat.png`)} alt="github img" /></a></li>
              <li style = {{marginRight: "10px"}}><a href="https://www.linkedin.com/in/joonhyeok-ahn-b3600515b/" target="_blank"><img className="navbarImages" src={require(`../image/linkedin.png`)} alt="linkedin img"/></a></li>
            </div>
          </nav>
          <hr/>

          <Switch>
            <Route exact path = '/' component={Home} />
            <Route path='/experience' component={Experience} />
            <Route path='/project' component={Project} />
            <Route path='/skill' component={Skill} />
          </Switch>

        </div>
      </Router>

      </Animated>

      </div>


    )
  }
}

export default Navbar
