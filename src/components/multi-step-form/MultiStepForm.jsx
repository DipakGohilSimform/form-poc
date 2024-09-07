// import { useRef, useState, useEffect } from "react";
// import gsap from "gsap";
// import "./MultiStepForm.scss";
// import Button from "./Button/Button";

// function MultiStepForm() {
//   const [showForm, setShowForm] = useState(false);
//   const greetingRef = useRef(null);
//   const titleRef = useRef(null);
//   const descRef = useRef(null);
//   const greetingBtnRef = useRef(null);
//   const gradientRef = useRef(null);
//   const formRef1 = useRef(null);
//   const formRef2 = useRef(null);
//   const formRef3 = useRef(null);

//   useEffect(() => {
//     const tl = gsap.timeline();
//     tl.fromTo(
//       titleRef.current,
//       { y: 100, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
//     )
//       .fromTo(
//         descRef.current,
//         { y: 100, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
//         "-=0.4"
//       )
//       .fromTo(
//         greetingBtnRef.current,
//         { y: 100, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
//         "-=0.4"
//       )
//       .to(gradientRef.current, { y: 100 }, 1);
//   }, []);

//   const handleGetStarted = () => {
//     const tl = gsap.timeline();
//     tl.to(
//       [
//         titleRef.current,
//         descRef.current,
//         greetingBtnRef.current,
//         gradientRef.current,
//       ],
//       {
//         y: -200,
//         opacity: 0,
//         duration: 0.8,
//         ease: "power3.inOut",
//         stagger: 0.2,
//       }
//     )
//       .to(greetingRef.current, {
//         height: 0,
//       })
//       .from(formRef1.current, {
//         y: 0,
//         opacity: 1,
//         duration: 0.8,
//         ease: "power3.out",
//       })
//       .to(formRef1.current, {
//         scale: 1.1,
//       });

//     // Show the form after the animation of current elements
//     setShowForm(true);
//   };

//   return (
//     <main className="multi-step-form">
//       <div className="greetings-section" ref={greetingRef}>
//         <div className="greeting-wrapper">
//           <h1 className="title" ref={titleRef}>
//             Hello User, Nice to meet you!
//           </h1>
//           <p className="desc" ref={descRef}>
//             This form will guide you through a few simple steps to help us get
//             to know you better. Let's begin your journey with us!
//           </p>
//           <div className="btn-wrapper" ref={greetingBtnRef}>
//             <Button variant="primary" onClick={handleGetStarted}>
//               Get Started Now
//             </Button>
//           </div>
//         </div>
//         <div className="bg-gradient" ref={gradientRef}></div>
//       </div>

//       {/* New Form that slides in after greeting section */}
//       <div className="form-section" ref={formRef1}>
//         {showForm && (
//           <div className="form-wrapper">
//             <h2 className="form-title">Signup Info</h2>
//             <form className="form">
//               <div className="input-group">
//                 <label htmlFor="email">Email Address</label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   placeholder="Enter email address"
//                 />
//               </div>
//               <div className="input-group">
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   placeholder="Enter password"
//                 />
//               </div>
//               <div className="input-group">
//                 <label htmlFor="confirmPassword">Confirm Password</label>
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   id="confirmPassword"
//                   placeholder="Enter password again"
//                 />
//               </div>
//               <div className="btn-wrapper">
//                 <Button text="Next" variant="primary" className="form-btn" />
//               </div>
//             </form>
//           </div>
//         )}
//       </div>
//       <div className="form-section" ref={formRef2}>
//         {showForm && (
//           <div className="form-wrapper">
//             <h2 className="form-title">Signup Info</h2>
//             <form className="form">
//               <div className="input-group">
//                 <label htmlFor="email">Email Address</label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   placeholder="Enter email address"
//                 />
//               </div>
//               <div className="input-group">
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   placeholder="Enter password"
//                 />
//               </div>
//               <div className="input-group">
//                 <label htmlFor="confirmPassword">Confirm Password</label>
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   id="confirmPassword"
//                   placeholder="Enter password again"
//                 />
//               </div>
//               <div className="btn-wrapper">
//                 <Button text="Next" variant="primary" className="form-btn" />
//               </div>
//             </form>
//           </div>
//         )}
//       </div>
//       <div className="form-section" ref={formRef3}>
//         {showForm && (
//           <div className="form-wrapper">
//             <h2 className="form-title">Signup Info</h2>
//             <form className="form">
//               <div className="input-group">
//                 <label htmlFor="email">Email Address</label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   placeholder="Enter email address"
//                 />
//               </div>
//               <div className="input-group">
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   placeholder="Enter password"
//                 />
//               </div>
//               <div className="input-group">
//                 <label htmlFor="confirmPassword">Confirm Password</label>
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   id="confirmPassword"
//                   placeholder="Enter password again"
//                 />
//               </div>
//               <div className="btn-wrapper">
//                 <Button text="Next" variant="primary" className="form-btn" />
//               </div>
//             </form>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }

// export default MultiStepForm;

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import "./MultiStepForm.scss";
import Button from "./Button/Button";

function MultiStepForm() {
  const [currentForm, setCurrentForm] = useState(1);
  const [showForm, setShowForm] = useState(false);

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
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    )
      .fromTo(
        descRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        greetingBtnRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      )
      .to(gradientRef.current, { y: 100 }, 1);
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
      })
      .from(formRef1.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      });

    setShowForm(true);
  };

  const handleNextForm = () => {
    const nextFormRef = currentForm === 1 ? formRef2 : formRef3;

    const tl = gsap.timeline();
    tl.to(currentForm === 1 ? formRef1.current : formRef2.current, {
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "power3.inOut",
    }).from(nextFormRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
    });

    setCurrentForm(currentForm + 1);
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

      <div className="form-section" ref={formRef1}>
        {currentForm === 1 && showForm && (
          <div className="form-wrapper">
            <h2 className="form-title">Signup Info</h2>
            <form className="form">
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
                <Button
                  text="Next"
                  variant="primary"
                  onClick={handleNextForm}
                  className="form-btn"
                />
              </div>
            </form>
          </div>
        )}
      </div>
      <div className="form-section" ref={formRef2}>
        {currentForm === 2 && showForm && (
          <div className="form-wrapper">
            <h2 className="form-title">Additional Info</h2>
            <form className="form">
              <div className="input-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter address"
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
              <div className="btn-wrapper">
                <Button
                  text="Next"
                  variant="primary"
                  onClick={handleNextForm}
                  className="form-btn"
                />
              </div>
            </form>
          </div>
        )}
      </div>
      <div className="form-section" ref={formRef3}>
        {currentForm === 3 && showForm && (
          <div className="form-wrapper">
            <h2 className="form-title">Final Info</h2>
            <form className="form">
              <div className="input-group">
                <label htmlFor="terms">
                  <input type="checkbox" name="terms" id="terms" />I agree to
                  the terms and conditions
                </label>
              </div>
              <div className="btn-wrapper">
                <Button text="Submit" variant="primary" className="form-btn" />
              </div>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}

export default MultiStepForm;
