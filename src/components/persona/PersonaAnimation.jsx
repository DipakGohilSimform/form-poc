import { useRef, useEffect } from "react";
import gsap from "gsap";
import "./PersonaAnimation.scss";

function PersonaAnimation() {
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);
  const cardRef4 = useRef(null);
  const cardRef5 = useRef(null);
  const descRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    // Create timelines for the card animations
    const tl1 = gsap.timeline({
      defaults: { ease: "power4", duration: 0.8 },
    });
    const tl2 = gsap.timeline({
      defaults: { ease: "power4", duration: 0.8 },
    });

    tl1
      .fromTo(
        cardRef1.current,
        { opacity: 0, y: 220, x: -15, scale: 0.8, rotate: -10 },
        { opacity: 1, y: -100, x: 15, rotate: 0, scale: 1, duration: 0.7 },
        0
      )
      .fromTo(
        cardRef2.current,
        { opacity: 0, y: 200, x: -10, scale: 0.8 },
        { opacity: 1, y: -100, x: 10, duration: 0.6, scale: 1 },
        0
      )
      .fromTo(
        cardRef3.current,
        { opacity: 0, y: 150, x: 0, scale: 0.8 },
        { opacity: 1, y: -100, x: 0, duration: 0.65, scale: 1 },
        0
      )
      .fromTo(
        cardRef4.current,
        { opacity: 0, y: 100, x: 10, scale: 0.8 },
        { opacity: 1, y: -100, x: -10, duration: 0.6, scale: 1 },
        0
      )
      .fromTo(
        cardRef5.current,
        { opacity: 0, y: 100, x: 15, rotate: 10, scale: 0.8 },
        { opacity: 1, y: -100, x: -15, rotate: 0, duration: 0.5, scale: 1 },
        0
      );

    tl2
      .to(cardRef3.current, { y: -65, scale: 1.1, duration: 0.6 }, 1)
      .to(cardRef1.current, { rotate: -4, x: -15, y: 10, duration: 0.62 }, 1)
      .to(cardRef2.current, { rotate: -2, x: -10, y: -20, duration: 0.69 }, 1)
      .to(cardRef4.current, { rotate: 2, x: 10, y: -20, duration: 0.69 }, 1)
      .to(cardRef5.current, { rotate: 4, x: 10, y: 10, duration: 0.62 }, 1)
      .fromTo(
        descRef.current,
        { y: 70, opacity: 0, scale: 0.5 },
        { y: -40, opacity: 1, scale: 1, duration: 0.6 },
        1
      )
      .to(
        gradientRef.current,
        {
          y: -100,
        },
        1
      );
  }, []);

  return (
    <div className="container">
      <div className="cards-wrapper">
        <div className="card" ref={cardRef1}>
          <div className="card-wrapper">
            <div className="card-wrapper-acounts">
              <div className="card-score">1</div>
            </div>
          </div>
          <div className="card-title">Web Design templates Selection</div>
          <div className="card-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do
            eiusmod.
          </div>
        </div>
        <div className="card" ref={cardRef2}>
          <div className="card-wrapper">
            <div className="card-wrapper-acounts">
              <div className="card-score">2</div>
            </div>
          </div>
          <div className="card-title">Web Design templates Selection</div>
          <div className="card-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do
            eiusmod.
          </div>
        </div>
        <div className="card" ref={cardRef3}>
          <div className="card-wrapper">
            <div className="card-wrapper-acounts">
              <div className="card-score">3</div>
            </div>
          </div>
          <div className="card-title">Web Design templates Selection</div>
          <div className="card-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do
            eiusmod.
          </div>
        </div>
        <div className="card" ref={cardRef4}>
          <div className="card-wrapper">
            <div className="card-wrapper-acounts">
              <div className="card-score">4</div>
            </div>
          </div>
          <div className="card-title">Web Design templates Selection</div>
          <div className="card-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do
            eiusmod.
          </div>
        </div>
        <div className="card" ref={cardRef5}>
          <div className="card-wrapper">
            <div className="card-wrapper-acounts">
              <div className="card-score">5</div>
            </div>
          </div>
          <div className="card-title">Web Design templates Selection</div>
          <div className="card-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do
            eiusmod.
          </div>
        </div>
      </div>

      <div className="desc-wrapper" ref={descRef}>
        <h1 className="title">Choose your persona</h1>
        <p className="desc">
          Select a persona that best represents you. Customize your experience
          to match your style and preferences.
        </p>
        <button>
          Let&apos;s Go
          <div className="arrow-wrapper">
            <div className="arrow"></div>
          </div>
        </button>
      </div>
      <div className="bg-gradient" ref={gradientRef}></div>
    </div>
  );
}

export default PersonaAnimation;
