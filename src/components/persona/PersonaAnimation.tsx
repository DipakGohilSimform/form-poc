// import { useRef } from "react";
// import gsap from "gsap";
// import "./PersonaAnimation.scss";
// import React from "react";

// function PersonaAnimation() {
//   const cardRef1 = useRef(null);
//   const cardRef2 = useRef(null);
//   const cardRef3 = useRef(null);
//   const cardRef4 = useRef(null);
//   const cardRef5 = useRef(null);
//   const descRef = useRef(null);

//   const tl = gsap.timeline();

//   gsap.from(cardRef1.current, {
//     scale: 0.8,
//     rotate: 120,
//     duration: 1,
//     x: 50,
//     y: 55,
//   });

//   return (
//     <div className="container">
//       <div className="cards-wrapper">
//         <div className="card" ref={cardRef1}>
//           <div className="card-wrapper">
//             <div className="card-wrapper-acounts">
//               <div className="card-score">1</div>
//             </div>
//           </div>
//           <div className="card-title">Web Design templates Selection</div>
//           <div className="card-subtitle">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do
//             eiusmod.
//           </div>
//           <div className="card-progress">
//             <progress max="100" value="40"></progress>
//           </div>
//         </div>
//         <div className="card">
//           <div className="card-wrapper">
//             <div className="card-wrapper-acounts">
//               <div className="card-score">2</div>
//             </div>
//           </div>
//           <div className="card-title">Web Design templates Selection</div>
//           <div className="card-subtitle">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do
//             eiusmod.
//           </div>
//           <div className="card-progress">
//             <progress max="100" value="40"></progress>
//           </div>
//         </div>
//         <div className="card">
//           <div className="card-wrapper">
//             <div className="card-wrapper-acounts">
//               <div className="card-score">3</div>
//             </div>
//           </div>
//           <div className="card-title">Web Design templates Selection</div>
//           <div className="card-subtitle">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do
//             eiusmod.
//           </div>
//           <div className="card-progress">
//             <progress max="100" value="40"></progress>
//           </div>
//         </div>
//         <div className="card">
//           <div className="card-wrapper">
//             <div className="card-wrapper-acounts">
//               <div className="card-score">4</div>
//             </div>
//           </div>
//           <div className="card-title">Web Design templates Selection</div>
//           <div className="card-subtitle">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do
//             eiusmod.
//           </div>

//           <div className="card-progress">
//             <progress max="100" value="40"></progress>
//           </div>
//         </div>
//         <div className="card">
//           <div className="card-wrapper">
//             <div className="card-wrapper-acounts">
//               <div className="card-score">5</div>
//             </div>
//           </div>
//           <div className="card-title">Web Design templates Selection</div>
//           <div className="card-subtitle">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do
//             eiusmod.
//           </div>
//           <div className="card-progress">
//             <progress max="100" value="40"></progress>
//           </div>
//         </div>
//       </div>

//       <div className="desc-wrapper">
//         <h1 className="title">Choose your persona</h1>
//         <p className="desc">
//           Select a persona that best represents you. Customize your experience
//           to match your style and preferences.
//         </p>
//         <button>
//           Sign up
//           <div className="arrow-wrapper">
//             <div className="arrow"></div>
//           </div>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default PersonaAnimation;

import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./PersonaAnimation.scss";
import React from "react";

function PersonaAnimation() {
  const cardRefs = useRef([]);
  const descRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate cards
    tl.from(cardRefs.current, {
      y: 100,
      opacity: 0,
      rotate: 10,
      duration: 1,
      ease: "power3.out",
      onStart: () => {
        gsap.set(cardRefs.current[2], { scale: 1.3 }); // set scale for the 3rd card
      },
    }).to(descRef.current, {
      opacity: 1,
    });

    // Animate description wrapper after cards
    tl.from(descRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }).to(descRef.current, {
      opacity: 1,
    });
  }, []);

  return (
    <div className="container">
      <div className="cards-wrapper">
        {[1, 2, 3, 4, 5].map((num, index) => (
          <div
            className="card"
            key={num}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div className="card-wrapper">
              <div className="card-wrapper-acounts">
                <div className="card-score">{num}</div>
              </div>
            </div>
            <div className="card-title">Web Design templates Selection</div>
            <div className="card-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do
              eiusmod.
            </div>
            <div className="card-progress">
              <progress max="100" value="40"></progress>
            </div>
          </div>
        ))}
      </div>

      <div className="desc-wrapper" ref={descRef}>
        <h1 className="title">Choose your persona</h1>
        <p className="desc">
          Select a persona that best represents you. Customize your experience
          to match your style and preferences.
        </p>
        <button>
          Sign up
          <div className="arrow-wrapper">
            <div className="arrow"></div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default PersonaAnimation;
