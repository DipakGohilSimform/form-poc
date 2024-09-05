import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import "./PersonaAnimation.scss";

function PersonaAnimation() {
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);
  const descRef = useRef(null);
  const gradientRef = useRef(null);

  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const tl1 = gsap.timeline({
      defaults: { ease: "power4", duration: 0.8 },
    });
    const tl2 = gsap.timeline({
      defaults: { ease: "power4", duration: 0.8 },
    });

    tl1
      .fromTo(
        cardRef1.current,
        { y: 200, x: -100, scale: 0.8 },
        { y: -20, x: 10, duration: 0.6, scale: 1 },
        0
      )
      .fromTo(
        cardRef2.current,
        { y: 150, x: 0, scale: 0.8 },
        { y: -20, x: 0, duration: 0.65, scale: 1 },
        0
      )
      .fromTo(
        cardRef3.current,
        { y: 100, x: 100, scale: 0.8 },
        { y: -20, x: -10, duration: 0.6, scale: 1 },
        0
      );

    tl2
      .fromTo(
        descRef.current,
        { y: 70, opacity: 0, scale: 0.5 },
        { y: -50, opacity: 1, scale: 1, duration: 0.6 },
        0.7
      )
      .to(gradientRef.current, { y: -100 }, 0.7);
  }, []);

  useEffect(() => {
    // Apply the blur and opacity effect based on the current step
    gsap.to([cardRef1.current, cardRef2.current, cardRef3.current], {
      filter: "blur(1px)",
      opacity: 0.5,
      duration: 0.5,
      ease: "power4.out",
      pointerEvents: "none",
      userSelect: "none",
    });

    // Highlight the current step
    gsap.to(
      currentStep === 1
        ? cardRef1.current
        : currentStep === 2
        ? cardRef2.current
        : cardRef3.current,
      {
        opacity: 1,
        filter: "none",
        scale: 1,
        duration: 0.5,
        ease: "power4.out",
        pointerEvents: "all",
      }
    );
  }, [currentStep]);

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <div className="container">
      <div className="cards-wrapper">
        <div ref={cardRef1}>
          <div className="form-container">
            <p className="title">Signup Info</p>
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                handleNextStep();
              }}
            >
              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email address"
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                />
              </div>
              <div className="input-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Enter password again"
                />
              </div>
              <button className="form-btn" type="submit">
                Next
              </button>
            </form>
          </div>
        </div>
        <div ref={cardRef2}>
          <div className="form-container">
            <p className="title">Personal Info</p>
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                handleNextStep();
              }}
            >
              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email address"
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                />
              </div>
              <div className="input-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Enter password again"
                />
              </div>
              <div className="btn-wrapper">
                <button className="back-btn" type="submit">
                  Back
                </button>
                <button className="form-btn" type="submit">
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
        <div ref={cardRef3}>
          <div className="form-container">
            <p className="title">Professional Info</p>
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                handleNextStep();
              }}
            >
              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email address"
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                />
              </div>
              <div className="input-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Enter password again"
                />
              </div>
              <div className="btn-wrapper">
                <button className="back-btn" type="submit">
                  Back
                </button>
                <button className="form-btn" type="submit">
                  Finish
                </button>
              </div>
            </form>
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
