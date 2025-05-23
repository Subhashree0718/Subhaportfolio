import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 100,  // Fewer particles for a more subtle effect
            density: {
              enable: true,
              value_area: 800,  // Adjust density to control the amount of particles
            },
          },
          color: {
            value: "#ffffff",  // White color for the particles
          },
          shape: {
            type: "circle",  // Simple circular particles
          },
          opacity: {
            value: 0.5,  // Slight transparency for particles
            random: false,
            anim: {
              enable: false,  // No animation for opacity
            },
          },
          size: {
            value: 3,  // Moderate size for particles
            random: true,  // Randomize the size of particles
          },
          move: {
            enable: true,
            speed: 0.5,  // Slow particle movement
            direction: "none",  // Random movement direction
            random: true,  // Allow particles to move in random directions
            straight: false,  // No straight-line movement
            out_mode: "out",  // Particles disappear when they reach the edge
          },
        },
        retina_detect: true,  // Ensure good scaling on retina displays
      }}
    />
  );
}

export default Particle;


// import React from "react";
// import Particles from "react-tsparticles";

// function Particle() {
//   return (
// <div style={{ position: "absolute", width: "100%", height: "100%", zIndex: -1, backgroundColor: "#1a1a40" }}>
//       <Particles
//         id="tsparticles"
//         params={{
//           particles: {
//             number: {
//               value: 160,
//               density: {
//                 enable: true,
//                 value_area: 1500,
//               },
//             },
//             line_linked: {
//               enable: false,
//               opacity: 0.03,
//             },
//             move: {
//               direction: "right",
//               speed: 0.05,
//             },
//             size: {
//               value: 1,
//             },
//             opacity: {
//               anim: {
//                 enable: true,
//                 speed: 1,
//                 opacity_min: 0.05,
//               },
//             },
//           },
//           interactivity: {
//             events: {
//               onclick: {
//                 enable: true,
//                 mode: "push",
//               },
//             },
//             modes: {
//               push: {
//                 particles_nb: 1,
//               },
//             },
//           },
//           retina_detect: true,
//         }}
//       />
//     </div>
//   );
// }

// export default Particle;
