import { useRef } from "react";
import gsap from "gsap";
import "./AnimationDemo.scss";

const AnimationDemo = () => {
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);
  const form1 = useRef(null);
  const form2 = useRef(null);
  const form3 = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const line4Ref = useRef(null);

  // Store timelines to reverse animations
  const tl1 = useRef(gsap.timeline({ paused: true }));
  const tl2 = useRef(gsap.timeline({ paused: true }));
  const tl3 = useRef(gsap.timeline({ paused: true }));

  const handleForm1Submit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Animate the box first
    tl1.current
      .to(
        boxRef1.current,
        {
          scale: 0.8,
          duration: 0.7,
          x: -380,
          y: -55,
          ease: "back.inOut",
        },
        0
      )
      .to(
        form1.current,
        {
          webkitFilter: "blur(2px)",
          pointerEvents: "none",
          duration: 0.7,
        },
        0
      )
      .to(line1Ref.current, {
        duration: 0.3,
        height: 150,
        ease: "power1.out",
      })
      .to(line2Ref.current, {
        duration: 0.3,
        width: 200,
        ease: "power1.out",
      })
      .to(boxRef2.current, {
        pointerEvents: "all",
        opacity: 1,
        duration: 0.3,
        ease: "back.inOut",
      })
      .to(boxRef2.current, {
        scale: 1.8,
        duration: 0.7,
        y: -320,
        x: 140,
        width: 350,
        ease: "back.inOut",
      });
    tl1.current.play();
  };

  const handleForm2Submit = (event) => {
    event.preventDefault(); // Prevent default form submission

    tl2.current
      .to(
        boxRef2.current,
        {
          scale: 1,
          duration: 0.8,
          y: -10,
          x: -10,
          ease: "back.inOut",
        },
        0
      )
      .to(
        form2.current,
        {
          webkitFilter: "blur(2px)",
          pointerEvents: "none",
        },
        0
      )
      .to(line3Ref.current, {
        duration: 0.3,
        height: 150,
        ease: "power1.out",
      })
      .to(line4Ref.current, {
        duration: 0.3,
        width: 200,
        ease: "power1.out",
      })
      .to(boxRef3.current, {
        pointerEvents: "all",
        scale: 1,
        opacity: 1,
        duration: 0.7,
        ease: "back.inOut",
      })
      .to(boxRef3.current, {
        scale: 2,
        x: -200,
        y: 100,
        duration: 0.7,
        ease: "back.inOut",
      });

    tl2.current.play();
  };

  const handleForm3Submit = (event) => {
    event.preventDefault();
    tl3.current
      .to(line1Ref.current, {
        backgroundColor: "transparent",
        duration: 0,
      })
      .to(line2Ref.current, {
        backgroundColor: "transparent",
        duration: 0,
      })
      .to(line3Ref.current, {
        backgroundColor: "transparent",
        duration: 0,
      })
      .to(line4Ref.current, {
        backgroundColor: "transparent",
        duration: 0,
      })
      .to(boxRef3.current, {
        pointerEvents: "all",
        scale: 1,
        x: 30,
        y: 382,
        duration: 0.7,
        ease: "back.out",
      })
      .to(
        boxRef2.current,
        {
          pointerEvents: "all",
          ease: "power1.out",
          x: 55,
          y: -385,
          width: "unset",
        },
        0
      )
      .to(
        [form2.current, form1.current],
        {
          webkitFilter: "blur(0px)",
          pointerEvents: "all",
        },
        0
      )
      .to(boxRef1.current, {
        pointerEvents: "all",
        ease: "power1.out",
        scale: 1,
      });

    tl3.current.play();
  };

  // Handle "Back" button clicks to reverse animations
  const handleBack1Click = () => {
    tl1.current.reverse();
  };

  const handleBack2Click = () => {
    tl2.current.reverse();
  };

  return (
    <div ref={boxRef1} className="animated-box box-1">
      <form onSubmit={handleForm1Submit}>
        <div className="form-wrapper" ref={form1}>
          <h1 className="form-title">Signup Info</h1>
          <div className="form-item">
            <label htmlFor="email" className="form-item-label">
              Email Address:
            </label>
            <input
              type="email"
              className="input"
              id="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="form-item">
            <label htmlFor="password" className="form-item-label">
              Password:
            </label>
            <input
              type="password"
              className="input"
              id="password"
              placeholder="Enter password"
            />
          </div>
          <div className="form-item">
            <label htmlFor="confirm-password" className="form-item-label">
              Confirm Password:
            </label>
            <input
              type="password"
              className="input"
              id="confirm-password"
              placeholder="Enter password"
            />
          </div>
          <div className="btn-wrapper">
            <button type="submit">Next</button>
          </div>
        </div>
      </form>
      {/* Line elements to animate */}
      <div ref={line1Ref} className="line1">
        <div ref={line2Ref} className="line2">
          <div ref={boxRef2} className="animated-box box-2">
            <form onSubmit={handleForm2Submit}>
              <div className="form-wrapper" ref={form2}>
                <h1 className="form-title">Personal Info</h1>
                <div className="form-item">
                  <label htmlFor="user-name" className="form-item-label">
                    User Name:
                  </label>
                  <input
                    type="input"
                    className="input"
                    id="user-name"
                    placeholder="Enter your user name"
                  />
                </div>
                <div className="form-item">
                  <label htmlFor="first-name" className="form-item-label">
                    First Name:
                  </label>
                  <input
                    type="input"
                    className="input"
                    id="first-name"
                    placeholder="Enter first name"
                  />
                </div>
                <div className="form-item">
                  <label htmlFor="last-name" className="form-item-label">
                    Last Name:
                  </label>
                  <input
                    type="input"
                    className="input"
                    id="last-name"
                    placeholder="Enter last name"
                  />
                </div>
                <div className="btn-wrapper">
                  {/* Back button with reversal functionality */}
                  <button
                    type="button"
                    className="back-btn"
                    onClick={handleBack1Click}
                  >
                    Back
                  </button>
                  <button type="submit">Next</button>
                </div>
              </div>
            </form>

            <div ref={line3Ref} className="line3">
              <div ref={line4Ref} className="line4">
                <div ref={boxRef3} className="animated-box box-3">
                  <form onSubmit={handleForm3Submit}>
                    <div className="form-wrapper" ref={form3}>
                      <h1 className="form-title">Professional Info</h1>
                      <div className="form-item">
                        <label
                          htmlFor="current-comapny"
                          className="form-item-label"
                        >
                          Current Comapny:
                        </label>
                        <input
                          type="input"
                          className="input"
                          id="current-comapny"
                          placeholder="Enter your current comapny"
                        />
                      </div>
                      <div className="form-item">
                        <label
                          htmlFor="total-experience"
                          className="form-item-label"
                        >
                          Total Experience:
                        </label>
                        <input
                          type="input"
                          className="input"
                          id="total-experience"
                          placeholder="Enter total experience"
                        />
                      </div>
                      <div className="form-item">
                        <label
                          htmlFor="designation"
                          className="form-item-label"
                        >
                          Designation:
                        </label>
                        <input
                          type="input"
                          className="input"
                          id="designation"
                          placeholder="Enter designation"
                        />
                      </div>
                      <div className="btn-wrapper">
                        <button
                          type="button"
                          className="back-btn"
                          onClick={handleBack2Click}
                        >
                          Back
                        </button>
                        <button type="submit">Done</button>
                      </div>
                    </div>
                  </form>
                  <div ref={line3Ref} className="line3">
                    <div ref={line4Ref} className="line4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationDemo;
