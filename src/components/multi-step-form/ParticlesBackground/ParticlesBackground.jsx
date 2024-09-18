// import { loadFull } from "tsparticles";
// import Particles from "react-tsparticles";
// import { useCallback } from "react";

// const ParticlesBackground = () => {
//   const particlesInit = useCallback(async (engine) => {
//     console.log(engine); // Check if engine is initialized correctly
//     await loadFull(engine);
//   }, []);

//   const particlesLoaded = useCallback((container) => {
//     console.log(container); // Ensure container is loading properly
//   }, []);

//   return (
//     // <Particles
//     //   id="tsparticles"
//     //   init={particlesInit}
//     //   loaded={particlesLoaded}
//     //   options={{
//     //     autoPlay: true,
//     //     background: {
//     //       color: { value: "#232741" },
//     //       position: "50% 50%",
//     //       repeat: "no-repeat",
//     //       size: "cover",
//     //       opacity: 1,
//     //     },
//     //     fullScreen: { enable: true, zIndex: 0 },
//     //     detectRetina: true,
//     //     fpsLimit: 120,
//     //     interactivity: {
//     //       detectsOn: "window",
//     //       events: {
//     //         onClick: { enable: true, mode: "repulse" },
//     //         onHover: { enable: true, mode: "bubble" },
//     //         resize: true,
//     //       },
//     //       modes: {
//     //         bubble: {
//     //           distance: 250,
//     //           duration: 2,
//     //           opacity: 1, // Set to 1 for better visibility
//     //           size: 20, // Increase bubble size
//     //         },
//     //         repulse: { distance: 400, duration: 0.4 },
//     //       },
//     //     },
//     //     particles: {
//     //       number: {
//     //         value: 100, // Reduce number of particles if performance is an issue
//     //         density: { enable: true, width: 1920, height: 1080 },
//     //       },
//     //       color: { value: "#ffffff" },
//     //       opacity: {
//     //         value: { min: 0.3, max: 0.8 }, // Set a higher opacity range
//     //         animation: { enable: true, speed: 0.5, startValue: "random" },
//     //       },
//     //       size: {
//     //         value: { min: 2, max: 5 }, // Increased particle size for visibility
//     //       },
//     //       move: {
//     //         enable: true,
//     //         speed: { min: 1, max: 3 }, // Increased speed for movement
//     //         outModes: { default: "out" },
//     //       },
//     //     },
//     //   }}
//     // />
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       loaded={particlesLoaded}
//       options={{
//         autoPlay: true,
//         background: {
//           color: { value: "#f0f0f0" }, // Change to a lighter background for testing
//           position: "50% 50%",
//           repeat: "no-repeat",
//           size: "cover",
//           opacity: 1,
//         },
//         fullScreen: { enable: true, zIndex: -1 }, // Set zIndex to -1 to ensure it's behind other elements
//         detectRetina: true,
//         fpsLimit: 120,
//         interactivity: {
//           detectsOn: "window",
//           events: {
//             onClick: { enable: true, mode: "repulse" },
//             onHover: { enable: true, mode: "bubble" },
//             resize: true,
//           },
//           modes: {
//             bubble: {
//               distance: 250,
//               duration: 2,
//               opacity: 1,
//               size: 20,
//             },
//             repulse: { distance: 400, duration: 0.4 },
//           },
//         },
//         particles: {
//           number: {
//             value: 200, // Increase particle count to 200
//             density: { enable: true, area: 800 }, // Adjust density
//           },
//           color: { value: "#000000" }, // Use black particles for visibility
//           opacity: {
//             value: { min: 0.3, max: 0.8 },
//             animation: { enable: true, speed: 0.5, startValue: "random" },
//           },
//           size: {
//             value: { min: 3, max: 7 }, // Increase particle size
//           },
//           move: {
//             enable: true,
//             speed: { min: 2, max: 4 }, // Increase speed for movement
//             outModes: { default: "out" },
//           },
//         },
//       }}
//     />
//   );
// };

// export default ParticlesBackground;

import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    init && (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#221146",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            number: {
              value: 355,
              density: {
                enable: true,
                value_area: 789.1476416322727,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.48927153781200905,
              random: false,
              anim: {
                enable: true,
                speed: 0.2,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 83.91608391608392,
                size: 1,
                duration: 3,
                opacity: 1,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          detectRetina: true,
        }}
      />
    )
  );
};
export default ParticlesBackground;
