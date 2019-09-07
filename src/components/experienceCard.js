import React from "react";
import Card from "react-bootstrap/Card";

function ExperienceCard(props) {
  return (
    <div className="centered">
    <div className="circle"></div>
      <Card style = {{ width: '40vw', backgroundColor: "#FCDFA5"}}>
        <Card.Body>
          <Card.Title><p style = {{ color: "#black", fontWeight: 'bold', fontSize: '2.4vmin'}}>{props.experience.position}</p></Card.Title>
          <Card.Text>
            <p><a href = {props.experience.url} style = {{color: "black", fontSize: '2.0vmin'}}>{props.experience.companyName}</a></p>
            <p style = {{ color: "black", fontSize: '1.8vmin'}}>{props.experience.period}</p>
          </Card.Text>
        </Card.Body>
      </Card>

    </div>

  )
}

export default ExperienceCard
