import React from "react";
import { Col, Row } from "react-bootstrap";

function EducationDetail() {
  return (
    <Row
      className="resume-wrap"
      style={{ justifyContent: "left", paddingBottom: "50px" }}
    >
      <Col xs={4} md={2} className="tech-icons" style={{ width: "100%" }}>
        <div className="date" style={{ textAlign: "left" }}>
          May 2024 - Present
        </div>

        <h2 style={{ textAlign: "left" }}>
          Data Analytics Consultant (Contract Part-time){" "}
        </h2>
        <div class="position" style={{ textAlign: "left" }}>
          Elara, Toronto, ON, Canada
        </div>
        <div className="CGPA" style={{ textAlign: "left" }}>
          <ul>
            <li>
              Work with <b className="peach">Microsoft tools</b> to develop Data
              insights on <b className="peach">ERP/Financial data</b>, <b className="peach">manufacture relational data</b>, and
              share those insights with our clients for their business growth.
            </li>
            <li>
              • Communicate with clients and the front to understand their needs
              and expectations and increase client satisfaction by <b className="peach">15%</b>,
              according to company surveys.
            </li>
          </ul>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ width: "100%" }}>
        <div className="date" style={{ textAlign: "left" }}>
          Aug 2022 - Nov 2023
        </div>

        <h2 style={{ textAlign: "left" }}>
          Software Application Support Engineer{" "}
        </h2>
        <div class="position" style={{ textAlign: "left" }}>
          Haryana Shahari Vikar Pradhikaran, Panchkula, Haryana
        </div>
        <div className="CGPA" style={{ textAlign: "left" }}>
          <ul>
            <li>
              Developed a user-friendly{" "}
              <b className="peach">conversational artificial intelligence</b>
              chatbot based on{" "}
              <b className="peach">natural language processing</b> models to
              address user issues, resulting in a <b className="peach">27%</b>{" "}
              reduction in company customer service costs. This initiative also
              boosted customer satisfaction by <b className="peach">36%</b> and
              increased company revenue.
            </li>
            <li>
              Create <b className="peach">Power BI</b> dashboards to get user
              traffic and other pendency at the department levels for various
              types of application insights with the Department Head and{" "}
              <b className="peach">Chief Information officer</b>.
            </li>
            <li>
              Successfully delivered a{" "}
              <b className="peach">Django web application</b> with{" "}
              <b className="peach">MongoDB</b>
              integration to enhance the user experience, resulting in a{" "}
              <b className="peach">19%</b>
              increase in user traffic.
            </li>
            <li>
              Managed a team of developers and testers and handled the regular
              meetings and discussions with the{" "}
              <b className="peach">
                Chief Information officer and other officers
              </b>
              .
            </li>
            <li>
              Engineered an automated{" "}
              <b className="peach">Gate Pass Generator system</b> using{" "}
              <b className="peach">Machine Learning</b> and{" "}
              <b className="peach">Deep Learning models</b>, achieving a{" "}
              <b className="peach">15%</b> decrease in vehicle security breaches
              and a <b className="peach">28%</b> increase in parking efficiency,
              ensuring smooth database operations and security.
            </li>
          </ul>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ width: "100%" }}>
        <div className="date" style={{ textAlign: "left" }}>
          Jan 2022 - Jul 2022
        </div>

        <h2 style={{ textAlign: "left" }}>Machine Learning Intern</h2>
        <div class="position" style={{ textAlign: "left" }}>
          National Informatics Center Haryana, Chandigarh
        </div>
        <div className="CGPA" style={{ textAlign: "left" }}>
          <ul>
            <li>
              Developed a well-documented single-handed{" "}
              <b className="peach">Realtime Skin Cancer Detection System </b>{" "}
              using a <b className="peach">multi-model</b> approach and
              relational database SQL, achieving an accuracy of{" "}
              <b className="peach">78%</b>.
            </li>
            <li>
              Developed and deployed a{" "}
              <b className="peach">Facial recognition</b> based automatic
              Attendance capturing and anomaly detection system for enhancement
              of security.
            </li>
            <li>
              Collaborated with interdisciplinary teams and streamlined
              communication, which led to a <b className="peach">reduction</b>{" "}
              in <b className="peach">project development</b>
              time by <b className="peach">12%</b> and saved the extra money
              used on resources.
            </li>
          </ul>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ width: "100%" }}>
        <div className="date" style={{ textAlign: "left" }}>
          2021
        </div>

        <h2 style={{ textAlign: "left" }}>Student Mentor And Speaker</h2>
        <div class="position" style={{ textAlign: "left" }}>
          CodeAsylums, India
        </div>
        <div className="CGPA" style={{ textAlign: "left" }}>
          I was a <b className="peach">Student mentor </b>and{" "}
          <b className="peach">Speaker </b>at{" "}
          <b className="peach">CodeAsylums</b>, where I teach students about
          machine learning and give sessions at different colleges to help
          students get on the right path. I am{" "}
          <b className="peach">passionate about helping students</b> to learn
          and grow, and I believe that everyone has the potential to succeed in{" "}
          <b className="peach">machine learning</b>. I am excited to continue
          working with students and helping them reach their full potential.
        </div>
      </Col>
    </Row>
  );
}

export default EducationDetail;
