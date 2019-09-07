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
            <img src = {require('../' + this.props.project.imageSrc)}
                 alt="find your event app logo"
                 style = {{ margin: 'auto', width: '100%', height: 'auto'}}
            />
            <br/>
            <br/>

            <div style = {{margin: 'auto'}}>
              <h4 style = {{textAlign: 'left', fontSize: '2.2vmax'}}>{this.props.project.title}</h4>
              <p style = {{ fontSize: '1.8vmax' }}>{this.props.project.description}</p>
              <button style = {{ fontSize: '1.8vmax' }}> Click here to see details </button>
            </div>
          </FrontSide>
          <BackSide
            style={{ backgroundColor: '#FEFEFC'}}>
            <div>
              <p style = {{ margin: 'auto', fontWeight: 'bold', fontSize: '2.4vmax'}}>Accomplished with</p>
              <br/>
              <div style ={{marginLeft: 'auto', fontSize: '1.8vmax'}}>
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
