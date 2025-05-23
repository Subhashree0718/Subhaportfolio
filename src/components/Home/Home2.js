// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
// import Tilt from "react-parallax-tilt";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

// function Home2() {
//   return (
//     <Container fluid className="home-about-section" id="about">
//       <Container>
//         <Row>
//           <Col md={8} className="home-about-description">
//             <h1 style={{ fontSize: "2.6em" }}>
//               LET ME <span className="purple"> INTRODUCE </span> MYSELF
//             </h1>
//             <p className="home-about-body">
//               I fell in love with programming and I have at least learnt
//               something, I think… 🤷‍♂️
//               <br />
//               <br />I am fluent in classics like
//               <i>
//                 <b className="purple"> HTML, </b>
//               </i>
//               <br />
//               <br />
//               My field of Interest's are building new &nbsp;
//               <i>
//                 <b className="purple">Web Technologies and Products </b> and
//                 also in areas related to{" "}
//                 <b className="purple">
//                   Blockchain.
//                 </b>
//               </i>
//               <br />
//               <br />
//               Whenever possible, I also apply my passion for developing products
//               with <b className="purple">Node.js</b> and
//               <i>
//                 <b className="purple">
//                   {" "}
//                   Modern Javascript Library and Frameworks
//                 </b>
//               </i>
//               &nbsp; like
//               <i>
//                 <b className="purple"> React.js and Next.js</b>
//               </i>
//             </p>
//           </Col>
//           <Col md={4} className="myAvtar">
//             <Tilt>
//               <img src={myImg} className="img-fluid" alt="avatar" />
//             </Tilt>
//           </Col>
//         </Row>
//         <Row>
//           <Col md={12} className="home-about-social">
//             <h1>FIND ME ON</h1>
//             <p>
//               Feel free to <span className="purple">connect </span>with me
//             </p>
//             <ul className="home-about-social-links">
//               <li className="social-icons">
//                 <a
//                   href="https://github.com/soumyajit4419"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour  home-social-icons"
//                 >
//                   <AiFillGithub />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://twitter.com/Soumyajit4419"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour  home-social-icons"
//                 >
//                   <AiOutlineTwitter />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://www.linkedin.com/in/soumyajit4419/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour  home-social-icons"
//                 >
//                   <FaLinkedinIn />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://www.instagram.com/soumyajit4419"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour home-social-icons"
//                 >
//                   <AiFillInstagram />
//                 </a>
//               </li>
//             </ul>
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }
// export default Home2;
import React from "react";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import myImg from "../../Assets/avatar.png";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <section className="w-full bg-[#2d3142] min-h-screen py-16 px-6 flex justify-center items-center">
      <div className="max-w-6xl w-full bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-lg border border-white/20">
        <Row className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          
          {/* Image Section */}
          <Col md={4} className="flex justify-center items-center md:items-start md:justify-start">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid w-40 h-40 object-cover rounded-xl border-4 border-[#00e0ff] shadow-md"
                alt="avatar"
              />
            </Tilt>
          </Col>

      {/* Text Section with proper top margin */}
{/* Text Section with proper top margin */}
<Col md={8} className="text-white">
  <div style={{ marginTop: '100px' }}>
    <h1 className="text-4xl font-bold mb-6 leading-tight">
      Let me <span className="text-[#00e0ff]">introduce</span> myself
    </h1>

    <p className="mb-4 text-lg text-gray-200">
      I'm Subhashree B, a passionate Computer Science and Business Systems student at Chennai Institute of Technology, deeply fascinated by AI, IoT, and full-stack development.
    </p>

    <p className="mb-4 text-lg text-gray-200">
      Skilled in <span className="text-[#00e0ff] font-semibold">Python</span>, <span className="text-[#00e0ff] font-semibold">JavaScript</span>, and <span className="text-[#00e0ff] font-semibold">C++</span>, I build intelligent applications ranging from AI-powered assistants and facial recognition systems to advanced web and mobile apps using <span className="text-[#00e0ff] font-semibold">React.js</span>, <span className="text-[#00e0ff] font-semibold">Next.js</span>, <span className="text-[#00e0ff] font-semibold">Node.js</span>, and <span className="text-[#00e0ff] font-semibold">Flutter</span>.
    </p>

    <p className="mb-8 text-lg text-gray-200">
      My projects include innovative solutions like AI-driven crop health monitoring, real-time missing person detection, and logistics management systems integrated with machine learning and blockchain technologies.
    </p>

    <div>
      <h2 className="text-xl font-semibold mb-3 text-white">Find me on</h2>
      <p className="text-gray-300 mb-4">Feel free to connect with me</p>
      <div className="flex space-x-6 text-2xl">
        <a
          href="https://github.com/Subhashree0718"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#00e0ff] transition text-white"
        >
          <AiFillGithub />
        </a>
        
      
        <a
          href="https://linkedin.com/in/subhashree-b-9a9644290"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#00e0ff] transition text-white"
        >
          <FaLinkedinIn />
        </a>
       
        
      </div>
    </div>
  </div>
</Col>
        </Row>
      </div>
    </section>
  );
}

export default Home2;
