// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import {
//   SiVisualstudiocode,
//   SiPostman,
//   SiSlack,
//   SiVercel,
//   SiMacos,
// } from "react-icons/si";

// function Toolstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiMacos />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVisualstudiocode />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostman />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiSlack />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVercel />
//       </Col>
//     </Row>
//   );
// }

// export default Toolstack;
import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit,DiDatabase } from "react-icons/di";          // Git
import { SiGithub } from "react-icons/si";       // GitHub
import { SiMicrosoftword, SiMicrosoftexcel, SiMicrosoftpowerpoint } from "react-icons/si";  // MS Word, Excel, PowerPoint
import { SiPgadmin } from "react-icons/si";      // PgAdmin
import "./toolstack.css";
import { SiGit, SiMicrosoftoffice, SiVisualstudiocode, SiPostman } from "react-icons/si";

// const tools = [
//   { icon: <SiMacos />, name: "macOS" },
//   { icon: <SiVisualstudiocode />, name: "VS Code" },
//   { icon: <SiPostman />, name: "Postman" },
//   { icon: <SiSlack />, name: "Slack" },
//   { icon: <SiVercel />, name: "Vercel" },
// ];

const tools = [
  { icon: <SiGit />, name: "Git" }, // Repeating Git here optional, but you can remove if you want
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <DiDatabase />, name: "PgAdmin" }, // No direct icon for PgAdmin; may need substitute or skip icon
  { icon: <SiMicrosoftoffice />, name: "MS Word / Excel / PowerPoint" }, // No direct icon in react-icons, substitute with MS Office icon or omit
  { icon: <SiVisualstudiocode />, name: "VS Code" },
  { icon: <SiPostman />, name: "Postman" },
];

function Toolstack() {
  return (
    <Row className="justify-content-center gap-4">
      {tools.map((tool, index) => (
        <Col xs={10} sm={6} md={4} lg={3} key={index}>
          <div className="tool-card">
            <div className="tool-icon">{tool.icon}</div>
            <p className="tool-name">{tool.name}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
