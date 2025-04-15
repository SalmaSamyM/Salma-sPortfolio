import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Commerce from "../../Assets/Projects/Electronics-E-Commerce_TypeScriptReact.png"
import TravelList from "../../Assets/Projects/TravelList_ReactJS.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Commerce}
              isBlog={false}
              title="Electronics-E-Commerce"
              description="The app includes multiple pages: home page, product listing, product details, shopping cart, login, and registration. All functionality is fully implemented, including product filtering, cart management, and mock authentication."
              ghLink="https://github.com/SalmaSamyM/Electronics-E-Commerce_TypeScriptReact"
              demoLink="https://electronics-e-commerce-type-script-react.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TravelList}
              isBlog={false}
              title="Travel List"
              description="TravelList_ReactJS is a responsive web application built using React.js that helps users plan and manage their travel packing lists. The app allows users to add, edit, categorize, and check off items to ensure nothing is forgotten before a trip."
              ghLink="https://github.com/SalmaSamyM/TravelList_ReactJS"
              demoLink="https://travellistreactjs.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
