import React from "react";
import Card from "react-bootstrap/Card";

import "../css/experience.css";
function ExperienceCard(props) {
  return (
    <div className="centered">
    <div className="circle"></div>
      <Card style = {{ width: '40vmax', backgroundColor: "#FCDFA5"}}>
        <Card.Body style = {{ marginTop: '2%', marginBottom: '2%'}}>
          <Card.Title><h1 style = {{ fontWeight: 'bold'}}>{props.experience.position}</h1></Card.Title>
          <Card.Text>
            <h3><a href = {props.experience.url} style = {{color: "black", fontStyle: 'italic'}}>{props.experience.companyName}</a></h3>
            <p style = {{fontWeight: 'lighter'}}>{props.experience.period}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ExperienceCard
