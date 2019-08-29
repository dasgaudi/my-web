import React from "react";
import Card from "react-bootstrap/Card";

function ExperienceCard(props) {
  return (
    <Card bg='info' style = {{ width: '30rem'}}>
      <Card.Body>
        <Card.Title><h3>{props.experience.position}</h3></Card.Title>
        <Card.Text>
          <h4><a href = {props.experience.url}>{props.experience.companyName}</a></h4>
          <p>{props.experience.period}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ExperienceCard
