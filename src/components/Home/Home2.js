import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
              <p className="home-about-body">
              I've developed a deep passion for programming and have continuously refined my skills through hands-on experience.
              <br />
              <br />
              I focus on
              <i>
                <b className="purple"> Frontend Development </b>
              </i>
              , bringing
              <i>
                <b className="purple"> over three years of experience </b>
              </i>
              in building user-centric and dynamic interfaces.
              I also have
              <i>
                <b className="purple"> over Two years of experience </b>
              </i>
              in developing
              <i>
                <b className="purple"> TV software solutions </b>
              </i>
              , focusing on performance and usability.
              <br />
              <br />
              My interests lie in
              <i>
                <b className="purple"> developing modern Web Technologies and Products </b>
              </i>
              , and I'm enthusiastic about exploring the world of
              <i>
                <b className="purple"> Blockchain Technology </b>
              </i>.
              <br />
              <br />
              I work extensively with tools and frameworks like
              <i>
                <b className="purple"> React.js, Redux.js, and Next.js </b>
              </i>
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SalmaSamyM"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/salmaasamy/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
