import { useEffect } from "react";
import "./ParticlesBackground.scss"; // Create and import a corresponding CSS file for styling

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
            value: 400,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ead0ff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#130808",
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
            value: 0.5,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 10,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 500,
            color: "#000000",
            opacity: 0.4,
            width: 2,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "bottom",
            random: false,
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
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 0.5,
              },
            },
            bubble: {
              distance: 400,
              size: 4,
              duration: 0.3,
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
