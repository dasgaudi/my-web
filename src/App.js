import React, { Component } from 'react';
import Splash from './components/splash';
import Navbar from "./containers/navbar";
import './App.css';



class App extends Component {

  render() {
      return (
          <div>

            <Navbar />
            <Splash />
          </div>
      )
  }
}

export default App;
