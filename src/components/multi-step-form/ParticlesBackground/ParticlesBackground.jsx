import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { useCallback } from "react";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine); // Check if engine is initialized correctly
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log(container); // Ensure container is loading properly
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        autoPlay: true,
        background: {
          color: { value: "#232741" },
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
          opacity: 1,
        },
        fullScreen: { enable: true, zIndex: 0 },
        detectRetina: true,
        fpsLimit: 120,
        interactivity: {
          detectsOn: "window",
          events: {
            onClick: { enable: true, mode: "repulse" },
            onHover: { enable: true, mode: "bubble" },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              opacity: 1, // Set to 1 for better visibility
              size: 20, // Increase bubble size
            },
            repulse: { distance: 400, duration: 0.4 },
          },
        },
        particles: {
          number: {
            value: 100, // Reduce number of particles if performance is an issue
            density: { enable: true, width: 1920, height: 1080 },
          },
          color: { value: "#ffffff" },
          opacity: {
            value: { min: 0.3, max: 0.8 }, // Set a higher opacity range
            animation: { enable: true, speed: 0.5, startValue: "random" },
          },
          size: {
            value: { min: 2, max: 5 }, // Increased particle size for visibility
          },
          move: {
            enable: true,
            speed: { min: 1, max: 3 }, // Increased speed for movement
            outModes: { default: "out" },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
