import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, my name is <span className="peach">Chirag Bansal </span> and
            I'm a <span className="peach">Data Analysis Consultant</span> and
            enthusiast in{" "}
            <span className="peach">
              Artificial Intelligence and Machine Learning
            </span>
            . Presently, I'm deepening my expertise through a Post Graduate
            Certificate in
            <span className="peach">
              Artificial Intelligence and Machine Learning
            </span>{" "}
            at
            <span className="peach"> Lambton College</span> in Toronto, with a
            primary focus on honing my skills in{" "}
            <span className="peach">Data Science and Data Analysis</span>. 
            <br />
            <br />
            In my
            capacity as a Data Analysis Consultant at{" "}
            <span className="peach">Elara</span>, a prominent Toronto-based
            startup, I apply my analytical prowess to unravel insights that
            drive business decisions and foster growth. My dedication to
            unraveling the mysteries within data is matched only by my
            commitment to sharing knowledge and fostering innovation. 
            <br />
            <br />
            Outside of
            my professional endeavors, I proudly serve as the Vice President of
            my college's
            <span className="peach">
              Google Developer Student Clubs (GDSC) Chapter
            </span>
            , where I spearhead initiatives to promote tech education, organize
            workshops, and host events that inspire budding developers to
            explore the endless possibilities of technology. 
            <br />
            <br />
            Fuelled by an
            insatiable curiosity, I immerse myself in the latest advancements in
            <span className="peach">Data Science and AI</span>, constantly
            seeking opportunities to apply emerging technologies to real-world
            challenges. When I'm not unraveling data or exploring code, you'll
            often find me immersed in nature, drawing inspiration from its
            beauty and tranquility. 
            <br />
            <br />
            I'm passionate about leveraging data-driven
            insights to make a positive impact, and I look forward to
            contributing to the ever-evolving landscape of{" "}
            <span className="peach">
              Data Science and Artificial Intelligence
            </span>
            .
            <br />
            <br />
            {/* Apart from coding, some other activities that I love to do! */}
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "#f3bfa5" }}>
            "Developers are the architects of the digital world, building <br />{" "}
            the foundation upon which modern society is built.!"{" "}
          </p>
          <footer className="blockquote-footer">A.I.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
