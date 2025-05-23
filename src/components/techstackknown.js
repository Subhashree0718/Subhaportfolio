import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";

import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiPython,
    DiHtml5,
    DiCss3,
    DiMongodb,
    DiBootstrap,
    DiGit,
    DiJava, // ✅ Java icon correctly imported from Di*
  } from "react-icons/di";
  
  import { SiTailwindcss, SiCplusplus, SiC } from "react-icons/si"; // ✅ Removed DiJava
  

function techstackknown() {
  return (
    <section>
      <Container fluid className="home-section" id="techstack">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={12} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                My <strong className="main-name">Tech Stacks</strong>
              </h1>
              <p style={{ fontSize: "1.2rem" }}>
                These are the technologies and tools I'm familiar with and have
                worked with during my journey.
              </p>
            </Col>
          </Row>

          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons"><DiHtml5 /></Col>
            <Col xs={4} md={2} className="tech-icons"><DiCss3 /></Col>
            <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
            <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
            <Col xs={4} md={2} className="tech-icons"><DiNodejs /></Col>
            <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
            <Col xs={4} md={2} className="tech-icons"><DiMongodb /></Col>
            <Col xs={4} md={2} className="tech-icons"><DiBootstrap /></Col>
            <Col xs={4} md={2} className="tech-icons"><SiTailwindcss /></Col>
            <Col xs={4} md={2} className="tech-icons"><DiGit /></Col>
            <Col xs={4} md={2} className="tech-icons"><SiCplusplus /></Col>
            <Col xs={4} md={2} className="tech-icons"><SiC /></Col>
            <Col xs={4} md={2} className="tech-icons"><DiJava /></Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default techstackknown;
