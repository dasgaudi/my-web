import React from "react";
import Card from "react-bootstrap/Card";

function ExperienceCard(props) {
  return (
    <div className="centered">
    <div className="circle"></div>
      <Card style = {{ width: '40vmax', backgroundColor: "#FCDFA5"}}>
        <Card.Body>
          <Card.Title><p style = {{ color: "#black", fontWeight: 'bold', fontSize: '2.4vmax'}}>{props.experience.position}</p></Card.Title>
          <Card.Text>
            <p><a href = {props.experience.url} style = {{color: "black", fontSize: '2.0vmax'}}>{props.experience.companyName}</a></p>
            <p style = {{ color: "black", fontSize: '1.8vmax'}}>{props.experience.period}</p>
          </Card.Text>
        </Card.Body>
      </Card>

    </div>

  )
}

export default ExperienceCard
