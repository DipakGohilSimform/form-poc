import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import "./MultiStepForm.scss";
import Button from "./Button/Button";

function MultiStepForm() {
  const [currentForm, setCurrentForm] = useState(1); // Keep track of the current form
  const greetingRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const greetingBtnRef = useRef(null);
  const gradientRef = useRef(null);
  const formRef1 = useRef(null);
  const formRef2 = useRef(null);
  const formRef3 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    )
      .fromTo(
        descRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(
        greetingBtnRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      )
      .to(gradientRef.current, { y: 100, ease: "power1.out" }, 1);
  }, []);

  const handleGetStarted = () => {
    const tl = gsap.timeline();
    tl.to(
      [
        titleRef.current,
        descRef.current,
        greetingBtnRef.current,
        gradientRef.current,
      ],
      {
        y: -200,
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut",
        stagger: 0.2,
      }
    )
      .to(greetingRef.current, {
        height: 0,
        duration: 0.8,
        ease: "power1.inOut",
      })
      .to(formRef1.current, {
        scale: 1.15,
        y: "10",
        boxShadow:
          "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
      });
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
            to know you better. Let's begin your journey with us!
          </p>
          <div className="btn-wrapper" ref={greetingBtnRef}>
            <Button variant="primary" onClick={handleGetStarted}>
              Get Started Now
            </Button>
          </div>
        </div>
        <div className="bg-gradient" ref={gradientRef}></div>
      </div>
      {currentForm === 1 && (
        <div className="form-section">
          <div className="form-wrapper" ref={formRef1}>
            <h2 className="form-title">Personal Information</h2>
            <form className="form">
              <div className="form-fields">
                <div className="input-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter first name"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter last name"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="age">Age</label>
                  <input
                    type="text"
                    name="age"
                    id="age"
                    placeholder="Enter age"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    placeholder="Enter country"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter phone number"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="nationality">Nationality</label>
                  <input
                    type="text"
                    name="nationality"
                    id="nationality"
                    placeholder="Enter nationality"
                  />
                </div>
              </div>
              <div className="btn-wrapper">
                <Button text="Back" variant="secondary" className="form-btn" />
                <Button text="Next" variant="primary" className="form-btn" />
              </div>
            </form>
          </div>
          <div className="form-wrapper" ref={formRef2}>
            <h2 className="form-title">Contact Information</h2>
            <form className="form">
              <div className="form-fields">
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
                  <label htmlFor="confirmEmail">Confirm Email Address</label>
                  <input
                    type="email"
                    name="confirmEmail"
                    id="confirmEmail"
                    placeholder="Confirm email address"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="address">Street Address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter street address"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Enter city"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="state">State/Province</label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    placeholder="Enter state/province"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="zip">Zip/Postal Code</label>
                  <input
                    type="text"
                    name="zip"
                    id="zip"
                    placeholder="Enter postal code"
                  />
                </div>
              </div>
              <div className="btn-wrapper">
                <Button text="Back" variant="secondary" className="form-btn" />
                <Button text="Next" variant="primary" className="form-btn" />
              </div>
            </form>
          </div>
          <div className="form-wrapper" ref={formRef3}>
            <h2 className="form-title">Security & Preferences</h2>
            <form className="form">
              <div className="form-fields">
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
                    placeholder="Confirm password"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="securityAnswer">Security Answer</label>
                  <input
                    type="text"
                    name="securityAnswer"
                    id="securityAnswer"
                    placeholder="Enter security answer"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="nickname">Nickname</label>
                  <input
                    type="text"
                    name="nickname"
                    id="nickname"
                    placeholder="Enter your nickname"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="favoriteColor">Favorite Color</label>
                  <input
                    type="text"
                    name="favoriteColor"
                    id="favoriteColor"
                    placeholder="Enter your favorite color"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="birthPlace">Place of Birth</label>
                  <input
                    type="text"
                    name="birthPlace"
                    id="birthPlace"
                    placeholder="Enter your place of birth"
                  />
                </div>
              </div>
              <div className="btn-wrapper">
                <Button text="Back" variant="secondary" className="form-btn" />
                <Button text="Next" variant="primary" className="form-btn" />
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

export default MultiStepForm;
