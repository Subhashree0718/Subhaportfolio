// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
// import Github from "./Github";
// import Techstack from "./Techstack";
// import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";
// import Toolstack from "./Toolstack";
// import "./about.css"
// function About() {
//   return (
//     <Container fluid className="about-section"  >
//       <Particle />

//       <Container>

//         {/* Intro Section */}
//         <Row className="align-items-center py-5" style={{ minHeight: "80vh" }}>
//           <Col md={6} className="text-start">
//             <h1 style={{ fontSize: "3rem", fontWeight: "800", color: "#001a57" }}>
//               Hello! 👋<br />
//               <span className="purple">I'm Subhashree</span>
//             </h1>
//             <p className="fs-5 mt-3 text-muted">
//               Passionate developer with experience in building web applications,
//               learning AI and exploring design principles to solve real-world problems.
//             </p>
//           </Col>
//           <Col md={6} className="text-center">
//             <img src={laptopImg} alt="about" className="img-fluid rounded-4 shadow-lg" style={{ maxWidth: "85%" }} />
//           </Col>
//         </Row>

//         {/* About Card */}
//         <Row className="justify-content-center my-5">
//           <Col md={10}>
//             <Aboutcard />
//           </Col>
//         </Row>

//         {/* Skills + Tools Grid */}
//         {/* Skills + Tools Grid */}
// <Row className="my-5 align-items-start">
//   <Col md={12} className="text-center mb-5">
//     <h2 className="section-title">
//       My <span className="purple">Tech Arsenal</span>
//     </h2>
//     <p className="text-muted">
//       Here are the languages, frameworks, and tools I work with.
//     </p>
//   </Col>

//   <Col md={12}>
//     <Techstack />
//   </Col>

//   <Col md={12} className="mt-5">
//     <h3 className="section-title text-center">
//       Tools <span className="purple">I Use</span>
//     </h3>
//     <Toolstack />
//   </Col>
// </Row>

//         {/* GitHub Stats */}
//        {/* What I'm Currently Exploring */}
// {/* What I’m Currently Exploring */}
// <Row className="my-5">
//   <Col>
//     <h2 className="section-title text-center mb-4">
//       What I’m <span className="purple">Currently Exploring</span>
//     </h2>
//     <div className="d-flex flex-wrap justify-content-center gap-4 px-3">
      
//       <div className="explore-box shadow-sm p-4 rounded">
//         <h5 className="fw-bold text-dark">🤖 Machine Learning & AI</h5>
//         <p className="text-muted">
//           Building intelligent systems, exploring neural networks, and prompt engineering.
//         </p>
//       </div>

//       <div className="explore-box shadow-sm p-4 rounded">
//         <h5 className="fw-bold text-dark">🔗 Blockchain</h5>
//         <p className="text-muted">
//           Learning how decentralized apps work, smart contracts, and Web3 development.
//         </p>
//       </div>

//       <div className="explore-box shadow-sm p-4 rounded">
//         <h5 className="fw-bold text-dark">🕶️ AR/VR</h5>
//         <p className="text-muted">
//           Immersive experience design and how it transforms learning and interaction.
//         </p>
//       </div>

//       <div className="explore-box shadow-sm p-4 rounded">
//         <h5 className="fw-bold text-dark">☁️ Cloud & DevOps</h5>
//         <p className="text-muted">
//           Automating deployment, working with CI/CD pipelines, and mastering AWS/GCP.
//         </p>
//       </div>

//       <div className="explore-box shadow-sm p-4 rounded">
//         <h5 className="fw-bold text-dark">🧬 Quantum Computing</h5>
//         <p className="text-muted">
//           Exploring quantum algorithms and how they can solve complex problems faster.
//         </p>
//       </div>

//     </div>
//   </Col>
// </Row>


//       </Container>
//     </Container>
//   );
// }

// export default About;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import "./about.css";
import "./explore.css"
function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>

        {/* Intro Section */}
        <Row className="align-items-center py-5 intro-section">
          <Col md={6} className="text-start">
           
            <p className="intro-description">
             <Aboutcard/>
            </p>
          </Col>
          <Col md={6} className="text-center">
            <img src={laptopImg} alt="about" className="img-fluid rounded-4 shadow-lg hover-effect" />
          </Col>
        </Row>

        {/* About Card */}
        {/* <Row className="justify-content-center my-5">
          <Col md={10}>
            <Aboutcard />
          </Col>
        </Row> */}

        {/* Skills + Tools Grid */}
        <Row className="my-5 align-items-start">
          <Col md={12} className="text-center mb-5">
            <h2 className="section-title">My <span className="purple">Tech Arsenal</span></h2>
            <p className="text-muted">Here are the languages, frameworks, and tools I work with.</p>
          </Col>
          <Col md={12}>
            <Techstack />
          </Col>
          <Col md={12} className="mt-5">
            <h3 className="section-title text-center">Tools <span className="purple">I Use</span></h3>
            <Toolstack />
          </Col>
        </Row>

        {/* Currently Exploring */}
        <Row className="my-5">
      <Col>
        <h2 className="section-title text-center mb-4">
          What I’m <span className="purple">Currently Exploring</span>
        </h2>
        <div className="d-flex flex-wrap justify-content-center gap-4 px-3 explore-section">
          <div className="explore-box">
            <h5 className="fw-bold">🤖 Machine Learning & AI</h5>
            <p>Building intelligent systems, exploring neural networks, and prompt engineering.</p>
          </div>
          <div className="explore-box">
            <h5 className="fw-bold">🔗 Blockchain</h5>
            <p>Learning how decentralized apps work, smart contracts, and Web3 development.</p>
          </div>
          <div className="explore-box">
            <h5 className="fw-bold">🕶️ AR/VR</h5>
            <p>Immersive experience design and how it transforms learning and interaction.</p>
          </div>
          <div className="explore-box">
            <h5 className="fw-bold">☁️ Cloud & DevOps</h5>
            <p>Automating deployment, working with CI/CD pipelines, and mastering AWS/GCP.</p>
          </div>
          <div className="explore-box">
            <h5 className="fw-bold">🧬 Quantum Computing</h5>
            <p>Exploring quantum algorithms and how they can solve complex problems faster.</p>
          </div>
        </div>
      </Col>
    </Row>


      </Container>
    </Container>
  );
}

export default About;
