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

  const handleForm1Submit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Create a GSAP timeline for the first form
    const tl = gsap.timeline();

    // Animate the box first
    tl.to(boxRef1.current, {
      scale: 0.8,
      duration: 1.3,
      x: -380,
      y: -55,
      ease: "back.inOut",
    });
    // tl.to(boxRef1.current, {
    //   duration: 1,
    //   x: -380,
    //   y: -55,
    //   ease: "back.out",
    // })
    tl.to(form1.current, {
      webkitFilter: "blur(2px)",
      pointerEvents: "none",
      duration: 0.5,
    })
      // Animate the first line (line1) after the box animation
      .to(line1Ref.current, {
        duration: 0.5,
        height: 150,
        ease: "power1.out",
      })
      // Animate the second line (line2) after the first line animation
      .to(line2Ref.current, {
        duration: 0.5,
        width: 200,
        ease: "power1.out",
      })
      .to(boxRef2.current, {
        pointerEvents: "all",
        opacity: 1,
        duration: 0.5,
        ease: "back.out",
      })
      .to(boxRef2.current, {
        scale: 1.8,
        duration: 0.7,
        y: -250,
        x: 100,
        width: 350,
        ease: "back.out",
      });
  };

  const handleForm2Submit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Create a GSAP timeline for the second form
    const tl2 = gsap.timeline();

    tl2
      .to(boxRef2.current, {
        scale: 1,
        duration: 0.8,
        y: 50,
        x: -10,
        ease: "back.inOut",
      })
      .to(form2.current, {
        webkitFilter: "blur(2px)",
        pointerEvents: "none",
      })
      .to(line3Ref.current, {
        duration: 0.5,
        height: 150,
        ease: "power1.out",
      })
      .to(line4Ref.current, {
        duration: 0.5,
        width: 200,
        ease: "power1.out",
      })
      .to(boxRef3.current, {
        pointerEvents: "all",
        scale: 1,
        opacity: 1,
        duration: 0.7,
        ease: "power1.out",
      });
    tl2.to(boxRef3.current, {
      scale: 2,
      x: -200,
      y: 100,
      duration: 0.8,
      ease: "back.out",
    });
  };

  const handleForm3Submit = (event) => {
    event.preventDefault();
    const tl3 = gsap.timeline();

    tl3
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
        ease: "power1.out",
      })
      .to(boxRef2.current, {
        pointerEvents: "all",
        ease: "power1.out",
        x: 55,
        y: -337,
        width: "unset",
      })
      .to(boxRef1.current, {
        pointerEvents: "all",
        ease: "power1.out",
        scale: 1,
      })
      .to(form2.current, {
        webkitFilter: "blur(0px)",
        pointerEvents: "all",
      })
      .to(form1.current, {
        webkitFilter: "blur(0px)",
        pointerEvents: "all",
      });
  };

  return (
    <div ref={boxRef1} className="animated-box box-1">
      <form onSubmit={handleForm1Submit}>
        <div className="form-wrapper" ref={form1}>
          <div className="form-item">
            <label htmlFor="first-name" className="form-item-label">
              First Name:
            </label>
            <input
              type="text"
              className="input"
              id="first-name"
              placeholder="Enter your first name"
            />
          </div>
          <div className="form-item">
            <label htmlFor="last-name" className="form-item-label">
              Last Name:
            </label>
            <input
              type="text"
              className="input"
              id="last-name"
              placeholder="Enter your last name"
            />
          </div>
          <div className="form-item">
            <label htmlFor="contact" className="form-item-label">
              Contact Number:
            </label>
            <input
              type="text"
              className="input"
              id="contact"
              placeholder="Enter your contact number"
            />
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {/* Line elements to animate */}
      <div ref={line1Ref} className="line1">
        <div ref={line2Ref} className="line2">
          <div ref={boxRef2} className="animated-box box-2">
            <form onSubmit={handleForm2Submit}>
              <div className="form-wrapper" ref={form2}>
                <div className="form-item">
                  <label htmlFor="first-name" className="form-item-label">
                    First Name:
                  </label>
                  <input
                    type="text"
                    className="input"
                    id="first-name"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="form-item">
                  <label htmlFor="last-name" className="form-item-label">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    className="input"
                    id="last-name"
                    placeholder="Enter your last name"
                  />
                </div>
                <div className="form-item">
                  <label htmlFor="contact" className="form-item-label">
                    Contact Number:
                  </label>
                  <input
                    type="text"
                    className="input"
                    id="contact"
                    placeholder="Enter your contact number"
                  />
                </div>
                <button type="submit">Submit</button>
              </div>
            </form>
            <div ref={line3Ref} className="line3">
              <div ref={line4Ref} className="line4">
                <div ref={boxRef3} className="animated-box box-3">
                  <form onSubmit={handleForm3Submit}>
                    <div className="form-wrapper" ref={form3}>
                      <div className="form-item">
                        <label htmlFor="first-name" className="form-item-label">
                          First Name:
                        </label>
                        <input
                          type="text"
                          className="input"
                          id="first-name"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="form-item">
                        <label htmlFor="last-name" className="form-item-label">
                          Last Name:
                        </label>
                        <input
                          type="text"
                          className="input"
                          id="last-name"
                          placeholder="Enter your last name"
                        />
                      </div>
                      <div className="form-item">
                        <label htmlFor="contact" className="form-item-label">
                          Contact Number:
                        </label>
                        <input
                          type="text"
                          className="input"
                          id="contact"
                          placeholder="Enter your contact number"
                        />
                      </div>
                      <button type="submit">Submit</button>
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
