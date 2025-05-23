// import React from "react";
// import Typewriter from "typewriter-effect";

// function Type() {
//   return (
//     <Typewriter
//       options={{
//         strings: [
//           "Software Developer",
//           "Freelancer",
//           "MERN Stack Developer",
//           "Open Source Contributor",
//         ],
//         autoStart: true,
//         loop: true,
//         deleteSpeed: 50,
//       }}
//     />
//   );
// }

// export default Type;

// src/components/Home/Type.js
import React, { useEffect, useState } from "react";
import { useTransition, animated } from "@react-spring/web";

const roles = [
  "Full Stack Developer",
  "Mobile App Developer",
  "IoT Enthusiast",
  "ML Learner",
  "Tech Innovator",
];

function Type() {
  const [index, setIndex] = useState(0);

  const transitions = useTransition(roles[index], {
    from: { opacity: 0, transform: "translateY(20px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-20px)" },
    config: { tension: 200, friction: 20 },
  });

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % roles.length),
      2500
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontSize: "1.5rem", fontWeight: "500", color: "#c770f0" }}>
      {transitions((style, item) => (
        <animated.div style={style}>💡 {item}</animated.div>
      ))}
    </div>
  );
}

export default Type;
