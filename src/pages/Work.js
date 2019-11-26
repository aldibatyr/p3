import React, { useRef, useEffect } from "react";
import { Container, Col, Row, Carousel, Image } from "react-bootstrap";
import waitlinePhoto from "../screens/waitline/main.png";
import waitlineSignup from "../screens/waitline/signup.png";
import waitlineLogin from "../screens/waitline/login.png";
import wailtineAdd from "../screens/waitline/addguest.png";
import waitlineEdit from "../screens/waitline/editguest.png";
import jSignup from "../screens/jobreel/signup.png";
import jAddJob from "../screens/jobreel/addJob.png";
import jContactSearch from "../screens/jobreel/contactslist.png";
import jCreators from "../screens/jobreel/creators.png";
import jJobSearch from "../screens/jobreel/jobssearchlist.png";
import jProfile from "../screens/jobreel/profile.png";
import { Power4, TweenMax, TimelineMax } from "gsap";
import "../styles/Work.css";

export default function Work() {
  let workTitleDiv = useRef(null);
  let workh4 = useRef(null);
  let actionText = useRef(null);
  let headingBox = useRef(null);
  let headingTitle = useRef(null);
  let tl = new TimelineMax();
  let data = [
    {
      title: "Waitline",
      description: "Project built to keep track of customers in line",
      technologies: [
        "Material-UI",
        "React",
        "Node",
        "Express",
        "PostgreSQL",
        "Heroku",
        "Zeit"
      ],
      link: "https://waitline.now.sh"
    },
    {
      title: "JobReel",
      description:
        "Find your next job and keep track of places you have applied for",
      technologies: [
        "Vanilla CSS3",
        "React",
        "Node",
        "Express",
        "PostgreSQL",
        "Heroku",
        "Zeit"
      ],
      link: "https://jobreel.now.sh"
    },
    {
      title: "Spaced Repetition Trainer",
      description: "Test your skills in German language",
      technologies: [
        "Vanilla CSS3",
        "React",
        "Node",
        "Express",
        "PostgreSQL",
        "Heroku",
        "Zeit"
      ],
      link: "https://spaced-repetition.aldibatyrbekov.now.sh"
    },
    {
      title: "Vkuss",
      description: "Find your perfect hookah flavor",
      technologies: [
        "Vanilla CSS3",
        "React",
        "Node",
        "Express",
        "PostgreSQL",
        "Heroku",
        "Zeit"
      ],
      link: "https://vkuss.now.sh"
    }
  ];

  const renderTechsWaitline = data[0].technologies.map((tech, i) => {
    return (
      <li key={i} className="tech-li-element">
        {tech}
      </li>
    );
  });

  const renderTechsJobReel = data[1].technologies.map((tech, i) => {
    return (
      <li key={i} className='tech-li-element'>
        {tech}
      </li>
    )
  })

  useEffect(() => {
    TweenMax.from(workTitleDiv, 1.5, { y: -300, ease: Power4.easeInOut });
    TweenMax.from(workh4, 1.5, { y: -350, ease: Power4.easeInOut, delay: 0.1 });
    TweenMax.from(actionText, 1.5, {
      scale: 0,
      ease: Power4.easeInOut,
      delay: 0.5
    });
    TweenMax.from(headingBox, 1.2, {y: 200, opacity: 0, ease: Power4.easeInOut})
  });
  return (
    <Container as="section" className="works">
      <Row className="worksHero">
        <Col>
          <div ref={el => (workTitleDiv = el)} className="worksTitle">
            <h4 className="worksTitleText" ref={el => (workh4 = el)}>
              here is what I do
            </h4>
          </div>
        </Col>
      </Row>
      <Row ref={el => (headingBox = el)} className="heading">
        <Col/>
        <Col ref={el => (headingTitle = el)} className="heading-title">FIND BEAUTY IN CHAOS</Col>
        <Col/>
      </Row>
      <Row>
        <Col className="left-or-bottom">
          <div ref={el => (actionText = el)} className="action-text">
            <p>scroll down to see more</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={8} lg={6}>
          <Container as="div" className="project">
            <div className="projectBox">
              <Carousel className="projectImage">
                <Carousel.Item>
                  <Image src={waitlinePhoto} alt="waitline main page screen" />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src={waitlineSignup}
                    alt="waitline signup page screen"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={waitlineLogin} alt="waitline login page screen" />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={wailtineAdd} alt="waitline add page screen" />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={waitlineEdit} alt="waitline edit page screen" />
                </Carousel.Item>
              </Carousel>
              <div className="overlay"></div>
            </div>
            <ul className="technologies tech-left">{renderTechsWaitline}</ul>
            <h6 className="projectDescription project-left">{data[0].description}</h6>
            <div className="project-link link-left">
                <a
                  className="project-link-text"
                  href={data[0].link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Project
                  Demo
                </a>
                <span className="project-link-text-underline"></span>
              </div>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col sm={{span: 12}} md={{span: 8, offset: 4}} lg={{span: 6, offset: 6}}>
          <Container as="div" className="project">
            <div className="projectBox">
              <Carousel className="projectImage">
                <Carousel.Item>
                  <Image src={jSignup} alt="jobreel signup page screen" />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src={jJobSearch}
                    alt="jobreel job search page screen"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={jAddJob} alt="jobreel add job page screen" />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={jContactSearch} alt="jobreel contact search page screen" />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={jCreators} alt="jobreel creators page screen" />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={jProfile} alt="jobreel profile edit page screen" />
                </Carousel.Item>
              </Carousel>
              <div className="overlay"></div>
            </div>
            <ul className="technologies tech-right">{renderTechsJobReel}</ul>
            <h6 className="projectDescription project-right">{data[1].description}</h6>
            <div className="project-link link-right">
                <a
                  className="project-link-text"
                  href={data[0].link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Project Demo
                </a>
                <span className="project-link-text-underline"></span>
              </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
