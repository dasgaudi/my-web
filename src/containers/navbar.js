import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import {Animated} from "react-animated-css";

import Home from "../components/home";
import Experience from "../components/experience";
import Project from "../components/project";
import Skill from "../components/skill";
// css
import '../navbar.css';

class Navbar extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.handleToggle = this.handleToggle.bind(this);
  //   this.state = {
  //     isOpen: false,
  //   };
  // }
  //
  // handleToggle() {
  //   this.setState(prev => {}
  //     return {
  //       isOpen: !prev.state.isOpen
  //     }
  //   )
  // }

  render() {
    return (
      <Animated animationIn="fadeIn" animationInDuration={3000} isVisible={true}>
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg">
            <ul className="navbar-nav mr-auto">
              <li><NavLink to="/MyWebsite" activeStyle={{ color:'#127bfe' }} className="nav-link" style = {{marginLeft: "10px"}}>Joonhyeok Ahn</NavLink></li>
              <li><NavLink to="/MyWebsite/experience" activeStyle={{ color:'#127bfe' }} className="nav-link" style = {{marginLeft: "10px"}}>Experience</NavLink></li>
              <li><NavLink to="/MyWebsite/project" activeStyle={{ color:'#127bfe' }} className="nav-link" style = {{marginLeft: "10px"}}>Projects</NavLink></li>
              <li><NavLink to="/MyWebsite/skill" activeStyle={{ color:'#127bfe' }} className="nav-link" style = {{marginLeft: "10px"}}>Skills</NavLink></li>
              <li><a className="nav-link" style = {{marginLeft: "10px"}} href={require(`../RESUME.pdf`)} target="_blank">Resume</a></li>
            </ul>
            <div className="narbarRight">
              <li style = {{marginRight: "10px"}}><a href="https://github.com/jooncsguy" target="_blank"><img className="navbarImages" src={require(`../octocat.png`)} alt="github img" /></a></li>
              <li style = {{marginRight: "10px"}}><a href="https://www.linkedin.com/in/joonhyeok-ahn-b3600515b/" target="_blank"><img className="navbarImages" src={require(`../linkedin.png`)} alt="linkedin img"/></a></li>
            </div>
          </nav>
          <hr/>

          <Switch>
            <Route path = '/' component={Home} />
            <Route path='/MyWebsite/experience' component={Experience} />
            <Route path='/MyWebsite/project' component={Project} />
            <Route path='/MyWebsite/skill' component={Skill} />
          </Switch>
        </div>
      </Router>
      </Animated>


    )
  }
}

export default Navbar
