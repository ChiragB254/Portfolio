import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="peach"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Welcome 🙏 to my portfolio!
              <br />
              <br />I am Chirag Bansal, a passionate Data Scientist with
              expertise in{" "}
              <i>
                <b className="peach"> Machine learning </b>,{" "}
                <b className="peach"> Deep learning </b>,{" "}
                <b className="peach"> Database </b>,{" "}
                <b className="peach">Natural Language Processing</b>, and{" "}
                <b className="peach">Power BI</b>,{" "}
              </i>
              .
              <br />
              <br />
              My expertise also includes :-
              <ul>
                <li className="peach">Programming: Python</li>
                <li>
                  Machine Learning & Deep Learning: TensorFlow, Generative AI
                </li>
                <li className="peach">
                  Natural Language Processing: Advanced NLP techniques
                </li>
                <li>Data Analysis and Visualization: Power BI</li>
                <li className="peach">
                  Databases: MySQL, MongoDB, PostgreSQL, SQL Server
                </li>
                <li>Cloud Services: AWS, GCP</li>
                <li className="peach">
                  Development Tools: Git, Google Colab
                </li>
                <li>Office Productivity: Microsoft Suite, Excel</li>
              </ul>
              I also have a solid foundation in frontend development, enhancing
              my ability to create comprehensive solutions. I am always eager to
              learn and explore new technologies. Currently, I am focused on
              projects involving generative AI and data science, data analytics,
              uncovering valuable insights from data.
              {/* I have a keen interest in
              <i>
                <b className="peach">&nbsp;React.js</b>,
                <b className="peach">&nbsp;Blockchain</b>, and &nbsp;
                <b className="peach">Crypto Trading</b>
              </i> */}
              <br />
              I am dedicated to creating innovative solutions for complex
              problems and delivering exceptional results.
              <br />
              <br />
              Previously, I worked as a Software Application Support Engineer in
              a key Government department, where I led the development of a
              user-friendly chatbot and an automatic Gate Pass Generator system.
              At Lambton College, I served as a LinkedIn Student Ambassador,
              honing my skills in teamwork and communication.
              <br />
              <br />
              Through &nbsp;
              <i>
                <b className="peach">my portfolio website</b>
              </i>
              , you will gain insight into
              <i>
                <b className="peach"> my skills and experience</b>
              </i>
              , including my past projects,&nbsp;
              <i>
                <b className="peach">my contributions</b>
              </i>{" "}
              to the tech industry, and my ongoing efforts to improve my
              knowledge and expertise.
              <br />
              <br /> &nbsp; Thank you for visiting my website, and I look
              forward to connecting with you!
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
              Feel free to <span className="peach">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/chiragb254"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/ChiragB254"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chiragb254/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/data.scientist_chirag"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:devchirag27@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdEmail />
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
