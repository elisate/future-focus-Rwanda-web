import React, { useState, useEffect } from "react";
import "../styles/landing.scss";
import Writer from "./Writer";

function Landing() {
  const courses = [
    {
      courseImage: "/C1.jpeg",
      buttonTitle: "Coding",
    },
    {
      courseImage: "/ro1.jpg",
      buttonTitle: "Robotics",
    },
    {
      courseImage: "/pr1.jpg",
      buttonTitle: "3D Designing & 3D Printing",
    },
    {
      courseImage: "/P1.jpg",
      buttonTitle: "Electronics & Embedded Systems",
    },
    {
      courseImage: "/R1.jpeg",
      buttonTitle: "Mathematics of Problems Solving",
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
    </div>
  );
}

export default Landing;
