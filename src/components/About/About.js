import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import LogoCard from "./LogoCard";
import EducationDetail from "./Education_detail"
import InternPos from "./Internship"
import Achivements from "./Achivements"

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="peach">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <LogoCard />

        <h1 className="project-heading" style={{ textAlign: "left" }}>
          Education <strong className="peach">Background</strong>
        </h1>
        <EducationDetail />

        <h1 className="project-heading" style={{ textAlign: "left" }}>
          <strong className="peach">Experience</strong>
        </h1>
        <InternPos />

        <h1 className="project-heading" style={{ textAlign: "left" }}>
          Volun<strong className="peach">teering</strong>
        </h1>
        <Achivements />

        <h1 className="project-heading">
          Professional <strong className="peach">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="peach">Tools</strong> I use
        </h1>
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
