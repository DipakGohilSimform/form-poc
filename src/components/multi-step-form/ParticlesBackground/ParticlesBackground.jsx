import { useEffect } from "react";
import "./ParticlesBackground.scss"; // Include the corresponding CSS styles

const ParticlesBackground = () => {
  useEffect(() => {
    // Load particles.js script
    const scriptParticles = document.createElement("script");
    scriptParticles.src =
      "http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    scriptParticles.async = true;
    document.body.appendChild(scriptParticles);

    // Load stats.js script
    const scriptStats = document.createElement("script");
    scriptStats.src = "http://threejs.org/examples/js/libs/stats.min.js";
    scriptStats.async = true;
    document.body.appendChild(scriptStats);

    // Initialize particles.js
    scriptParticles.onload = () => {
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 800,
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
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 4,
              size_min: 0.3,
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
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 600,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
              mode: "grab",
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
              distance: 250,
              size: 0,
              duration: 2,
              opacity: 0,
              speed: 3,
            },
            repulse: {
              distance: 400,
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
        retina_detect: true,
      });
    };

    // Initialize stats.js
    scriptStats.onload = () => {
      const stats = new Stats();
      stats.setMode(0);
      stats.domElement.style.position = "absolute";
      stats.domElement.style.left = "0px";
      stats.domElement.style.top = "0px";
      document.body.appendChild(stats.domElement);

      const countParticles = document.querySelector(".js-count-particles");
      const update = () => {
        stats.begin();
        stats.end();
        if (
          window.pJSDom[0].pJS.particles &&
          window.pJSDom[0].pJS.particles.array
        ) {
          countParticles.innerText =
            window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    };

    return () => {
      document.body.removeChild(scriptParticles);
      document.body.removeChild(scriptStats);
    };
  }, []);

  return (
    <div>
      {/* Particles.js container */}
      <div id="particles-js"></div>
    </div>
  );
};

export default ParticlesBackground;
