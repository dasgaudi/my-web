import React from "react";
import Card from "react-bootstrap/Card";

import "../css/experience.css";
function ExperienceCard(props) {
  return (
    <div className="centered">
    <div className="circle"></div>
      <Card style = {{ width: '50vmin', height: 'auto', backgroundColor: "#FCDFA5"}}>
        <Card.Body style = {{ marginTop: '2%', marginBottom: '2%'}}>
          <img src = {require('../image/' + props.experience.imageSrc)}
               alt="find your event app logo" style = {{ width: '100%', height: '200px', borderRadius: '20px'}}/>
          <br/>
          <br/>
          <Card.Title><h1 style = {{ fontWeight: 'bold'}}>{props.experience.position}</h1></Card.Title>
          <Card.Text style = {{marginLeft: '2%'}}>
            <h3><a href = {props.experience.url} style = {{color: "black", fontStyle: 'italic'}}>{props.experience.companyName}</a></h3>
            <p style = {{fontWeight: 'lighter'}}>{props.experience.period}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ExperienceCard
