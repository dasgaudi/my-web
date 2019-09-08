import React from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';

class ProjectCard extends React.Component {

  render() {
    return (
      <div>
        <Flippy
          flipOnHover={false} // default false
          flipOnClick={true} // default false
          flipDirection="horizontal" // horizontal or vertical
          ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
          // if you pass isFlipped prop component will be controlled component.
          // and other props, which will go to div
          /*style={{ flexBasis: '100%', height: 'auto' }}*/ /// these are optional style, it is not necessary
          >
          <FrontSide
            style={{
              backgroundColor: '#FEFEFC',
            }}
          >
            <img src = {require('../image/' + this.props.project.imageSrc)}
                 alt="find your event app logo"

            />
            <br/>
            <br/>

            <div style = {{margin: 'auto'}}>
              <h4>{this.props.project.title}</h4>
              <br/>
              <p>{this.props.project.description}</p>
              <br/>
              <button> Click here to see details </button>
            </div>
          </FrontSide>
          <BackSide
            style={{ backgroundColor: '#FEFEFC'}}>
            <div>
              <h4>Accomplished with</h4>
              <br/>
              <div style ={{marginLeft: 'auto'}}>
                {this.props.project.technology.map(function(technology, index){
                    return <h5>- {technology}</h5>;
                  })}
              </div>

            </div>


          </BackSide>
        </Flippy>
        <br/>
        <br/>

      </div>
    )
  }

}

export default ProjectCard
