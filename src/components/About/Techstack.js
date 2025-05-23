// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiPython,
//   DiGit,
//   DiJava,
// } from "react-icons/di";
// import {
//   SiRedis,
//   SiFirebase,
//   SiNextdotjs,
//   SiSolidity,
//   SiPostgresql,
// } from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

// function Techstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <CgCPlusPlus />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJavascript1 />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <TbBrandGolang />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiNodejs />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiReact />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiSolidity />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiMongodb />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiNextdotjs />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiGit />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiFirebase />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiRedis />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostgresql />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiPython />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJava />
//       </Col>
//     </Row>
//   );
// }

// export default Techstack;

// import React from "react";
// import { CgCPlusPlus } from "react-icons/cg";
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiPython,
//   DiGit,
//   DiJava,
// } from "react-icons/di";
// import {
//   SiRedis,
//   SiFirebase,
//   SiNextdotjs,
//   SiSolidity,
//   SiPostgresql,
// } from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";
// import "./tech.css";

// const techSkills = [
//   { icon: <CgCPlusPlus />, name: "C++" },
//   { icon: <DiJavascript1 />, name: "JavaScript" },
//   { icon: <TbBrandGolang />, name: "Golang" },
//   { icon: <DiNodejs />, name: "Node.js" },
//   { icon: <DiReact />, name: "React" },
//   { icon: <SiSolidity />, name: "Solidity" },
//   { icon: <DiMongodb />, name: "MongoDB" },
//   { icon: <SiNextdotjs />, name: "Next.js" },
//   { icon: <DiGit />, name: "Git" },
//   { icon: <SiFirebase />, name: "Firebase" },
//   { icon: <SiRedis />, name: "Redis" },
//   { icon: <SiPostgresql />, name: "PostgreSQL" },
//   { icon: <DiPython />, name: "Python" },
//   { icon: <DiJava />, name: "Java" },
// ];

// function Techstack() {
//   return (
//     <div className="techstack-container">
//       {techSkills.map((skill, index) => (
//         <div className="tech-card" key={index}>
//           <div className="tech-icon">{skill.icon}</div>
//           <div className="tech-name">{skill.name}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Techstack;

import React, { useEffect, useState } from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";

import { TbBrandGolang } from "react-icons/tb";
import { SiNextdotjs, SiMongodb, SiPostgresql, SiGit, SiFlutter, SiFigma, SiAdobephotoshop, SiPandas,SiCplusplus  } from "react-icons/si";
import { FaCss3Alt, FaHtml5, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiGithub } from "react-icons/si";

import "./tech.css";

// const techSkills = [
//   { icon: <CgCPlusPlus />, name: "C++" },
//   { icon: <DiJavascript1 />, name: "JavaScript" },
//   { icon: <TbBrandGolang />, name: "Golang" },
//   { icon: <DiNodejs />, name: "Node.js" },
//   { icon: <DiReact />, name: "React" },
//   { icon: <SiSolidity />, name: "Solidity" },
//   { icon: <DiMongodb />, name: "MongoDB" },
//   { icon: <SiNextdotjs />, name: "Next.js" },
//   { icon: <DiGit />, name: "Git" },
//   { icon: <SiFirebase />, name: "Firebase" },
//   { icon: <SiRedis />, name: "Redis" },
//   { icon: <SiPostgresql />, name: "PostgreSQL" },
//   { icon: <DiPython />, name: "Python" },
//   { icon: <DiJava />, name: "Java" },
// ];


const techSkills = [
  // Languages
  { icon: <DiJava />, name: "Java" },
  { icon: <DiPython />, name: "Python" },
  { icon: <SiCplusplus />, name: "C / C++" },

  // Frontend / Full-stack
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <DiReact />, name: "React.js / React Native" },
  { icon: <SiNextdotjs />, name: "Next.js" },

  // Databases & Cloud
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiGit />, name: "Git / GitHub" },  // Version control combined

  // Mobile App Dev
  { icon: <SiFlutter />, name: "Flutter" },

  // Design & Prototyping
  { icon: <SiFigma />, name: "Figma" },
  { icon: <SiAdobephotoshop />, name: "Adobe Photoshop" },

  // Python Libraries
  { icon: <SiPandas />, name: "Pandas / PyTorch" }, // No direct PyTorch icon, combined for simplicity
];


function Techstack() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const techSection = document.querySelector(".techstack-container");
      const rect = techSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check in case section is already in view

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="techstack-container">
      {techSkills.map((skill, index) => (
        <div
          className={`tech-card ${inView ? "in-view" : ""}`}
          key={index}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="tech-icon">{skill.icon}</div>
          <div className="tech-name">{skill.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
