import React from 'react';
import { bounceOut } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import {Animated} from "react-animated-css";

import '../css/splash.css';

const styles = {
  bounceOut: {
    animation: 'x 2s',
    animationName: Radium.keyframes(bounceOut, 'bounceOut')
  }
}

class Splash extends React.Component {
  render() {
      return (
          <Animated className="boxContainer" animationIn="rotateIn" animationOut="rotateOut" animationInDuration={500} animationOutDuration={2500} isVisible={false}>
              <img className="box" src={require("../image/myarc.svg")} alt="logo"/>
          </Animated>
      )
    }

}

export default Splash
