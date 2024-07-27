import React, { useState, useEffect } from "react";
import "../styles/landing.scss";
import Writer from "./Writer";

function Landing() {
  const courses = [
    {
      courseImage: "/C1.jpeg",
      buttonTitle: "Coding",
      programContent:
        "Robotics is a fascinating educational tool that brings to life abstract concepts in Science, Technology, Engineering, & Mathematics. Students learn to build intricate robots to solve complex challenges, acquire technical, scientific, & other skills that are critical to be successful in the 21st century such as deep-thinking, problem-solving, creativity, teamwork, communication & collaboration.",
    },
    {
      courseImage: "/ro1.jpg",
      buttonTitle: "Robotics",
      programContent:
        "Robotics is a fascinating educational tool that brings to life abstract concepts in Science, Technology, Engineering, & Mathematics. Students learn to build intricate robots to solve complex challenges, acquire technical, scientific, & other skills that are critical to be successful in the 21st century such as deep-thinking, problem-solving, creativity, teamwork, communication & collaboration.",
    },
    {
      courseImage: "/pr1.jpg",
      buttonTitle: "3D Designing & 3D Printing",
      programContent:
        "Robotics is a fascinating educational tool that brings to life abstract concepts in Science, Technology, Engineering, & Mathematics. Students learn to build intricate robots to solve complex challenges, acquire technical, scientific, & other skills that are critical to be successful in the 21st century such as deep-thinking, problem-solving, creativity, teamwork, communication & collaboration.",
    },
    {
      courseImage: "/P1.jpg",
      buttonTitle: "Electronics & Embedded Systems",
      programContent:
        "Robotics is a fascinating educational tool that brings to life abstract concepts in Science, Technology, Engineering, & Mathematics. Students learn to build intricate robots to solve complex challenges, acquire technical, scientific, & other skills that are critical to be successful in the 21st century such as deep-thinking, problem-solving, creativity, teamwork, communication & collaboration.",
    },
    {
      courseImage: "/R1.jpeg",
      buttonTitle: "Mathematics of Problems Solving",
      programContent:
        "Robotics is a fascinating educational tool that brings to life abstract concepts in Science, Technology, Engineering, & Mathematics. Students learn to build intricate robots to solve complex challenges, acquire technical, scientific, & other skills that are critical to be successful in the 21st century such as deep-thinking, problem-solving, creativity, teamwork, communication & collaboration.",
    },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cardsPerPage = 3;
  const autoScrollInterval = 10000; // 15 second

  useEffect(() => {
    const autoScrollTimer = setInterval(() => {
      nextCard();
    }, autoScrollInterval);

    // Cleanup timer on component unmount
    return () => clearInterval(autoScrollTimer);
  }, []);

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % courses.length);
  };

  const visibleCards = courses.slice(
    currentCardIndex,
    currentCardIndex + cardsPerPage
  );
  if (visibleCards.length < cardsPerPage) {
    visibleCards.push(...courses.slice(0, cardsPerPage - visibleCards.length));
  }

  const totalPages = Math.ceil(courses.length / cardsPerPage);

  const handleDotClick = (pageIndex) => {
    setCurrentCardIndex(pageIndex * cardsPerPage);
  };

  const cardServices = [
    {
      cardImage: "/C1.jpeg",
      cardTitle: "In-School Program",
      cardDescription:
        "The STEM activities 100% match REB's Curriculum, we are building partnerships with different schools in region so that STEM programs gets into schools basing on Singapore's Teaching Methodology.",
    },
    {
      cardImage: "/D1.jpeg",
      cardTitle: "After School Program",
      cardDescription:
        "The STEM activities 100% match REB's Curriculum, we are building partnerships with different schools in region so that STEM programs gets into schools basing on Singapore's Teaching Methodology.",
    },
    {
      cardImage: "/P1.jpg",
      cardTitle: "Online Learning",
      cardDescription:
        "The STEM activities 100% match REB's Curriculum, we are building partnerships with different schools in region so that STEM programs gets into schools basing on Singapore's Teaching Methodology.",
    },
    {
      cardImage: "/pr1.jpg",
      cardTitle: "Centered Learning",
      cardDescription:
        "The STEM activities 100% match REB's Curriculum, we are building partnerships with different schools in region so that STEM programs gets into schools basing on Singapore's Teaching Methodology.",
    },
    {
      cardImage: "/P1.jpg",
      cardTitle: "Online Learning",
      cardDescription:
        "The STEM activities 100% match REB's Curriculum, we are building partnerships with different schools in region so that STEM programs gets into schools basing on Singapore's Teaching Methodology.",
    },
    {
      cardImage: "/ro1.jpg",
      cardTitle: "Home Coaching",
      cardDescription:
        "The STEM activities 100% match REB's Curriculum, we are building partnerships with different schools in region so that STEM programs gets into schools basing on Singapore's Teaching Methodology.",
    },
  ];

  return (
    <div className="landingContainer">
      <div className="landSectiona">
        <div className="textLa">
          <div>Welcome to Future Focus Rwanda</div>
          <div>
            <Writer />
          </div>
        </div>
        <div className="textLb">
          Join our coding and robotics community and discover how to harness
          your full potential. Develop cutting-edge solutions, collaborate with
          peers, and prepare for a successful career in technology.
        </div>
      </div>
      <div className="landSectionb">
        <div className="texta">Future Focus Rwanda Platform</div>
        <div className="textb">Course Categories</div>

        <div className="mappedCategories">
          <div className="cardsContainer">
            {visibleCards.map((item, index) => (
              <div key={index} className="card">
                <div>
                  <img src={item.courseImage} className="cardCourseImagea" />
                </div>
                <div className="textcarda">{item.buttonTitle}</div>
                <div className="prContent">{item.programContent}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="pagination-controls">
          {Array.from({ length: totalPages }, (_, pageIndex) => (
            <span
              key={pageIndex}
              className={`pagination-dot ${
                currentCardIndex / cardsPerPage === pageIndex ? "active" : ""
              }`}
              onClick={() => handleDotClick(pageIndex)}
            ></span>
          ))}
        </div>
      </div>
      <div className="ctitle">Join Us For</div>
      <div className="landingc">
        {cardServices.map((item, index) => (
          <div  className="landccards" key={index}>
            <div >
              <img
                src={item.cardImage}
                alt="card images"
                className="serviceCardimage"
              />
            </div>
            <div className="cardTitle">{item.cardTitle}</div>
            <div className="cardDesc">{item.cardDescription}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Landing;
