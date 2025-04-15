import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Salma Samy </span>
            from <span className="purple"> Cairo, Egypt.</span>
            <br />
            I am currently working as a <span className="purple">TV Software Frontend Developer</span>, with over three years of experience in frontend development
             and over two years in TV software development.
            <br />
            I specialize in React.js, Redux.js, Next.js, and crafting seamless user interfaces using modern UI libraries like Ant Design and Material UI.
            <br />
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning New Web Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Blockchain Technology
            </li>
            <li className="about-activity">
              <ImPointRight /> Read Docs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Passionate about building impactful solutions that stand the test of time."{" "}
          </p>
          <footer className="blockquote-footer">Salma Samy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
