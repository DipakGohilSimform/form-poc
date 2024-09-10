import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import "./MultiStepForm.scss";
import Button from "./Button/Button";
import Logo from "../svgs/Logo";
import Chat from "../svgs/Chat";
import Message from "../svgs/Message";
import Insta from "../svgs/Insta";
import Phone from "../svgs/Phone";
import Location from "../svgs/Location";

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const greetingRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const greetingBtnRef = useRef(null);
  const formRef1 = useRef(null);
  const formRef2 = useRef(null);
  const formRef3 = useRef(null);
  const endGreetingRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // Initialize the follower with GSAP
    const follower = followerRef.current;
    gsap.set(follower, { xPercent: -50, yPercent: -50, ease: "power1.out" }); // Centers the follower

    const moveFollower = (e) => {
      // Move the follower to the mouse coordinates with GSAP
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        ease: "power1.out",
        duration: 0.3, // Smooth following effect
      });
    };

    window.addEventListener("mousemove", moveFollower);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", moveFollower);
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    )
      .fromTo(
        descRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        greetingBtnRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      );
  }, []);

  const handleGetStarted = () => {
    const tl = gsap.timeline();
    tl.to([titleRef.current, descRef.current, greetingBtnRef.current], {
      y: -150,
      opacity: 0,
      duration: 0.8,
      ease: "power3.in",
    })
      .to(greetingRef.current, {
        height: 0,
        duration: 0.8,
        ease: "power1.inOut",
      })
      .to(
        formRef1.current,
        {
          scale: 1.1,
          y: "25",
          zIndex: 5,
          boxShadow:
            "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
          ease: "power1.inOut",
        },

        0
      )
      .to(
        formRef2.current,
        {
          y: "-100",
          ease: "power1.inOut",
        },
        0
      )
      .to([formRef2.current, formRef3.current], {
        opacity: 0.5,
        // filter: "blur(2px)",
      });
  };

  // Handle Next Button
  const handleNext = () => {
    const tl = gsap.timeline();
    if (currentStep === 1) {
      tl.to(
        formRef1.current,
        {
          scale: 0.8,
          y: "-380",
          zIndex: 1,
          boxShadow: "none",
          opacity: 0.5,
          duration: 0.65,
          // filter: "blur(2px)",
          ease: "power1.inOut",
        },
        0
      )
        .to(
          formRef2.current,
          {
            scale: 1.1,
            y: "-650",
            zIndex: 5,
            opacity: 1,
            duration: 0.65,
            filter: "blur(0)",
            boxShadow:
              "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
            ease: "power1.inOut",
          },
          0
        )
        .to(
          formRef3.current,
          {
            y: "-830",
            ease: "power1.inOut",
          },
          0
        );
    } else if (currentStep === 2) {
      tl.to(
        formRef2.current,
        {
          scale: 0.8,
          y: "-1000",
          zIndex: 1,
          boxShadow: "none",
          // filter: "blur(2px)",
          opacity: 0.5,
          duration: 0.65,
          ease: "power1.inOut",
        },
        0
      )
        .to(
          formRef3.current,
          {
            scale: 1.1,
            y: "-1300",
            zIndex: 5,
            opacity: 1,
            duration: 0.65,
            filter: "blur(0)",
            boxShadow:
              "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
            ease: "power1.inOut",
          },
          0
        )
        .to(
          formRef1.current,
          {
            y: "-800",
            zIndex: 1,
            opacity: 0.5,
            duration: 0.65,
            filter: "blur(2)",
            boxShadow: "none",
            ease: "power1.inOut",
          },
          0
        );
    } else if (currentStep === 3) {
      tl.to(
        formRef2.current,
        {
          y: "-1500",
          ease: "power1.inOut",
        },
        0
      )
        .to(
          formRef3.current,
          {
            y: "-2000",
            scale: 0.8,
            zIndex: 1,
            boxShadow: "none",
            // filter: "blur(2px)",
            opacity: 0.5,
            duration: 0.65,
            ease: "power1.inOut",
          },
          0
        )
        .to(
          endGreetingRef.current,
          {
            y: "-1800",
            duration: 0.8,
            ease: "power1.out",
          },
          0
        );
    }
    setCurrentStep(currentStep + 1);
  };

  // Handle Back Button
  const handleBack = () => {
    const tl = gsap.timeline();
    if (currentStep === 2) {
      // Returning from Form 2 to Form 1
      tl.to(
        formRef2.current,
        {
          scale: 0.8,
          y: "-100", // Moves formRef2 upwards before returning formRef1
          zIndex: 1,
          opacity: 0.5,
          duration: 0.65,
          boxShadow: "none",
          ease: "power1.inOut",
          // filter: "blur(2px)",
        },
        0
      )
        .to(
          formRef1.current,
          {
            scale: 1.1,
            y: "0", // Brings formRef1 back into view
            zIndex: 5,
            opacity: 1,
            duration: 0.65,
            boxShadow:
              "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
            filter: "blur(0)",
            ease: "power1.inOut",
          },
          0
        )
        .to(
          formRef3.current,
          {
            scale: 0.8,
            y: "800", // Brings formRef1 back into view
            zIndex: 1,
            opacity: 0.5,
            duration: 0.65,
            boxShadow: "none",
            filter: "blur(2)",
            ease: "power1.inOut",
          },
          0
        );
    } else if (currentStep === 3) {
      // Returning from Form 3 to Form 2
      tl.to(
        formRef3.current,
        {
          scale: 0.8,
          y: "-830px", // Moves formRef3 upwards before returning formRef2
          zIndex: 1,
          opacity: 0.5,
          duration: 0.65,
          boxShadow: "none",
          // filter: "blur(2px)",
          ease: "power1.inOut",
        },
        0
      )
        .to(
          formRef2.current,
          {
            scale: 1.1,
            y: "-650",
            zIndex: 5,
            opacity: 1,
            duration: 0.65,
            boxShadow:
              "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
            filter: "blur(0)",
            ease: "power1.inOut",
          },
          0
        )
        .to(
          formRef1.current,
          {
            scale: 0.8,
            y: "-325",
            zIndex: 1,
            opacity: 0.5,
            duration: 0.65,
            boxShadow:
              "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
            // filter: "blur(2px)",
            ease: "power1.inOut",
          },
          0
        );
    }
    setCurrentStep(currentStep - 1);
  };

  return (
    <main className="multi-step-form">
      <div className="greetings-section" ref={greetingRef}>
        <div className="greeting-wrapper">
          <h1 className="title" ref={titleRef}>
            Hello User, Nice to meet you!
          </h1>
          <p className="desc" ref={descRef}>
            This form will guide you through a few simple steps to help us get
            to know you better. Let&apos;s begin your journey with us!
          </p>
          <div className="btn-wrapper" ref={greetingBtnRef}>
            <Button variant="primary" onClick={handleGetStarted}>
              Get Started Now
            </Button>
          </div>
        </div>
        <div ref={followerRef} className="mouse-follower" />
      </div>

      <div className="form-section">
        {/* Form 1 */}
        <div
          className={`form-wrapper ${currentStep === 1 ? "active" : ""}`}
          ref={formRef1}
        >
          <div className="left-sidebar">
            <h2 className="logo">
              <Logo /> Untitled UI
            </h2>
            <div className="title-wrapper">
              <h3 className="sidebar-heading">Chat with us</h3>
              <p className="desc">Speak to our friendly team via live chat.</p>
              <a href="#" className="dark">
                <Chat />
                Start a live chat
              </a>
              <a href="#" className="dark">
                <Message />
                Shoot us an email
              </a>
              <a href="#" className="dark">
                <Insta />
                Like us on instagram
              </a>
            </div>
            <div className="title-wrapper">
              <h3 className="sidebar-heading">Call us</h3>
              <p className="desc">Call out team Mon-Fri from 8am to 5pm.</p>
              <a href="#" className="dark">
                <Phone />
                +1&nbsp;(555)&nbsp;000-0000
              </a>
            </div>
            <div className="title-wrapper">
              <h3 className="sidebar-heading">Visit us</h3>
              <p className="desc">Chat to us in person at our Melbourne HQ.</p>
              <a href="#" className="dark">
                <Location />
                100 smith street, Collingwood NSW 3066
              </a>
            </div>
          </div>
          <div className="form-content">
            <div className="content">
              <div className="content-logo">
                <Logo />
              </div>
              <h2 className="content-title">How big is your team?</h2>
              <p className="content-desc">
                We&apos;ve worked with small startups and fortune 500 companies.
              </p>
              <h4 className="range-title">1-10 people</h4>
              <input type="range" min="1" max="100" className="progress" />
              <div className="btn-wrapper">
                <Button
                  text="Next"
                  variant="primary"
                  className="form-btn"
                  onClick={handleNext}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Form 2 */}
        <div
          className={`form-wrapper ${currentStep === 2 ? "active" : ""}`}
          ref={formRef2}
        >
          <div className="left-sidebar">
            <h2 className="logo">
              <Logo /> Untitled UI
            </h2>
            <div className="title-wrapper">
              <h3 className="sidebar-heading">Chat with us</h3>
              <p className="desc">Speak to our friendly team via live chat.</p>
              <a href="#" className="dark">
                <Chat />
                Start a live chat
              </a>
              <a href="#" className="dark">
                <Message />
                Shoot us an email
              </a>
              <a href="#" className="dark">
                <Insta />
                Like us on instagram
              </a>
            </div>
            <div className="title-wrapper">
              <h3 className="sidebar-heading">Call us</h3>
              <p className="desc">Call out team Mon-Fri from 8am to 5pm.</p>
              <a href="#" className="dark">
                <Phone />
                +1&nbsp;(555)&nbsp;000-0000
              </a>
            </div>
            <div className="title-wrapper">
              <h3 className="sidebar-heading">Visit us</h3>
              <p className="desc">Chat to us in person at our Melbourne HQ.</p>
              <a href="#" className="dark">
                <Location />
                100 smith street, Collingwood NSW 3066
              </a>
            </div>
          </div>
          <div className="form-content">
            <div className="content">
              <div className="content-logo">
                <Logo />
              </div>
              <h2 className="content-title">How do we get in touch?</h2>
              <p className="content-desc">
                Leave us your details and we&apso;ll reach out within 24 hours!.
              </p>
              <div className="form-fields">
                <div className="input-group">
                  <label htmlFor="firstName">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter first name"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter last name"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                  />
                </div>
              </div>
              <div className="btn-wrapper">
                <Button
                  text="Back"
                  variant="secondary"
                  className="form-btn"
                  onClick={handleBack}
                />
                <Button
                  text="Next"
                  variant="primary"
                  className="form-btn"
                  onClick={handleNext}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Form 3 */}
        <div
          className={`form-wrapper ${currentStep === 3 ? "active" : ""}`}
          ref={formRef3}
        >
          <div className="left-sidebar">
            <h2 className="logo">
              <Logo /> Untitled UI
            </h2>
            <div className="title-wrapper">
              <h3 className="sidebar-heading">Chat with us</h3>
              <p className="desc">Speak to our friendly team via live chat.</p>
              <a href="#" className="dark">
                <Chat />
                Start a live chat
              </a>
              <a href="#" className="dark">
                <Message />
                Shoot us an email
              </a>
              <a href="#" className="dark">
                <Insta />
                Like us on instagram
              </a>
            </div>
            <div className="title-wrapper">
              <h3 className="sidebar-heading">Call us</h3>
              <p className="desc">Call out team Mon-Fri from 8am to 5pm.</p>
              <a href="#" className="dark">
                <Phone />
                +1&nbsp;(555)&nbsp;000-0000
              </a>
            </div>
            <div className="title-wrapper">
              <h3 className="sidebar-heading">Visit us</h3>
              <p className="desc">Chat to us in person at our Melbourne HQ.</p>
              <a href="#" className="dark">
                <Location />
                100 smith street, Collingwood NSW 3066
              </a>
            </div>
          </div>
          <div className="form-content">
            <div className="content">
              <div className="content-logo">
                <Logo />
              </div>
              <h2 className="content-title">What do you need help with?</h2>
              <p className="content-desc">
                We&apos;re a full service agency with experts ready to help.
              </p>
              <div className="form-fields">
                <div className="input-group">
                  <label htmlFor="helpMessage">How can we assist you?</label>
                  <textarea
                    className="help-msg"
                    name="helpMessage"
                    id="helpMessage"
                    placeholder="Describe your needs"
                  ></textarea>
                </div>
              </div>
              <div className="btn-wrapper">
                <Button
                  text="Back"
                  variant="secondary"
                  className="form-btn"
                  onClick={handleBack}
                />
                <Button
                  text="Finish"
                  variant="primary"
                  className="form-btn"
                  onClick={handleNext}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="greeting-wrapper" ref={endGreetingRef}>
        <div className="title-with-emoji">
          <h1 className="title">Congratulations!</h1>
          <span className="emoji">🎉</span>
        </div>
        <p className="desc">
          You have successfully completed the onboarding process. We&apos;re
          excited to have you on board and look forward to working together.
        </p>
        <div className="btn-wrapper">
          <a href="/">
            <Button type="submit" variant="primary">
              Back to home
            </Button>
          </a>
        </div>
      </div>
    </main>
  );
}

export default MultiStepForm;
