import React, { useRef, useEffect } from "react";
import "../styles/Main.css";
import { Link } from "react-router-dom";
import face from "../screens/face.png";
import { Container, Row, Col } from "react-bootstrap";
import { Power4, TweenMax, Power3 } from "gsap";

export default function Main() {
  let spanEl1 = useRef(null);
  let spanEl2 = useRef(null);
  let spanEl3 = useRef(null);
  let afterSpan1 = useRef(null);
  let faceDiv = useRef(null);

  useEffect(() => {
    TweenMax.from(spanEl1, 1.5, { y: 230, ease: Power4.easeOut, delay: 0.5 });
    TweenMax.from(spanEl2, 1.5, { y: 230, ease: Power4.easeOut, delay: 0.7 });
    TweenMax.from(spanEl3, 1.5, { y: 230, ease: Power4.easeOut, delay: 0.9 });
    TweenMax.from(faceDiv, 3, { x: "100%", ease: Power4.easeOut });
  });

  const hoverAction = () => {
    return TweenMax({ paused: true }).fromTo(
      afterSpan1,
      0.5,
      { x: 0 },
      { x: 100 }
    );
  };

  return (
    <section className="mainPage">
        <div className="linkContainer">
          <Link to="/work">
            <span ref={el => (spanEl1 = el)} className="hideText">
              WORK
            </span>
            <span
              className="underline"
              onMouseEnter={hoverAction}
              ref={el => (afterSpan1 = el)}
            />
          </Link>
        </div>
        <div className="linkContainer">
          <Link to="/about">
            <span ref={el => (spanEl2 = el)} className="hideText">
              ABOUT
            </span>
          </Link>
        </div>
        <div className="linkContainer">
          <Link to="/contact">
            <span ref={el => (spanEl3 = el)} className="hideText">
              CONTACT
            </span>
          </Link>
        </div>
      <div ref={el => (faceDiv = el)} className="face">
        <img className="faceImage" src={face} alt="my-face" />
      </div>
    </section>
  );
}
