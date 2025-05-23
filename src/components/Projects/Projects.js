// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

// function Projects() {
//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           My Recent <strong className="purple">Works </strong>
//         </h1>
//         <p style={{ color: "white" }}>
//           Here are a few projects I've worked on recently.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={chatify}
//               isBlog={false}
//               title="Agrivoice (AI & IoT)"
//               description="Built an AI-powered assistant for farmers to monitor crop health, weather, and soil conditions. Integrated IoT sensors for real-time data collection and analysis."
//               ghLink="https://github.com/soumyajit4419/Chatify"
//               demoLink="https://chatify-49.web.app/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={bitsOfCode}
//               isBlog={false}
//               title="Bits-0f-C0de"
//               description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
//               ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
//               demoLink="https://blogs.soumya-jit.tech/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={editor}
//               isBlog={false}
//               title="Editor.io"
//               description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
//               ghLink="https://github.com/soumyajit4419/Editor.io"
//               demoLink="https://editor.soumya-jit.tech/"              
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={leaf}
//               isBlog={false}
//               title="Plant AI"
//               description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
//               ghLink="https://github.com/soumyajit4419/Plant_AI"
//               demoLink="https://plant49-ai.herokuapp.com/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={suicide}
//               isBlog={false}
//               title="Ai For Social Good"
//               description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
//               ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
//               // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={emotion}
//               isBlog={false}
//               title="Face Recognition and Emotion Detection"
//               description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
//               Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
//               ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
//               // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
//             />
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Projects;



import "./projects.css"
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import Particle from "../Particle";
import Agrivoice from "./Agrivoice.jpg";
import Pharos from "./Pharos.png"
import Mess from "./Mess.jpg"
import image from "./image.png"
import Insta from "./Insta.jpg"
import Image from "../../Assets/image.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

AOS.init(); // Initialize AOS for scroll animations

function Projects() {
  return (
    <Container fluid className="project-section bg-dark-blue">
      <Particle />
      <Container>
        <h1 className="project-heading text-white">
          My Recent <strong className="text-purple">Works</strong>
        </h1>
        <p className="text-muted mb-5">
          Explore the innovative projects I’ve worked on, showcasing a mix of AI, IoT, and web technologies.
        </p>
        <Row className="d-flex justify-content-center gap-5 py-5">
          <Col md={4} className="project-card-container" data-aos="zoom-in-up">
            <ProjectCards
              imgPath={Agrivoice}
              isBlog={false}
              title="Agrivoice (AI & IoT)"
              description="AI-powered assistant to monitor crop health and soil conditions."
              
            />
          </Col>
<Col md={4} className="project-card-container" data-aos="zoom-in-up" data-aos-delay="600">
  <ProjectCards
    imgPath={Pharos}
    isBlog={false}
    title="Pharos Project"
    description="A face recognition system that scans public camera footage to identify and locate missing individuals in real time."
   
  />
</Col>

<Col md={4} className="project-card-container" data-aos="zoom-in-up" data-aos-delay="700">
  <ProjectCards
    imgPath={Mess}
    isBlog={false}
    title="Mess Management App with Prediction"
    description="Mobile application to manage daily mess operations with ML-powered consumption prediction model."
    
  />
</Col>
<Col md={4} className="project-card-container" data-aos="zoom-in-up" data-aos-delay="900">
  <ProjectCards
    imgPath={Insta} // Replace with actual image import or path
    isBlog={false}
    title="Instagram Clone - Mobile App"
    description="A mobile application inspired by Instagram, built using React Native. Features include user authentication, photo posting, likes, and comments for a seamless social experience."
  />
</Col>

<Col md={4} className="project-card-container" data-aos="zoom-in-up" data-aos-delay="800">
  <ProjectCards
    imgPath={image}
    isBlog={false}
    title="GenAI University Management"
    description="An AI-based student performance analysis system for smarter decision-making in universities."
    
  />
</Col>
<Col md={4} className="project-card-container" data-aos="zoom-in-up" data-aos-delay="900">
  <ProjectCards
    imgPath={Image}
    isBlog={false}
    title="Logistics Management App"
    description="A comprehensive logistics solution featuring real-time chat, delivery tracking, and warehouse inventory management for streamlined operations."
  
  />
</Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
