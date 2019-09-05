import React from "react";
import Card from "react-bootstrap/Card";

function ExperienceCard(props) {
  return (
    <div className="centered">
    <div className="circle"></div>
      <Card style = {{ width: '30rem', marginTop: "15px", backgroundColor: "#FCDFA5"}}>
        <Card.Body>
          <Card.Title><h3 style = {{ color: "#black", fontWeight: 'bold'}}>{props.experience.position}</h3></Card.Title>
          <Card.Text>
            <h4><a href = {props.experience.url} style = {{color: "black"}}>{props.experience.companyName}</a></h4>
            <p style = {{ color: "black"}}>{props.experience.period}</p>
          </Card.Text>
        </Card.Body>
      </Card>

    </div>

  )
}

export default ExperienceCard
