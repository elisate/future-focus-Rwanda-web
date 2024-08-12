import React, { useState, useEffect } from "react";
import "../styles/landing.scss";
import Writer from "./Writer";
import { mycontext } from "../fetch/ContextProvider";
function Landing() {

   const { program } = mycontext();
   
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
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % program.length);
  };

  const visibleCards = program.slice(
    currentCardIndex,
    currentCardIndex + cardsPerPage
  );
  if (visibleCards.length < cardsPerPage) {
    visibleCards.push(...program.slice(0, cardsPerPage - visibleCards.length));
  }

  const totalPages = Math.ceil(program.length / cardsPerPage);

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
            <div>
              <Writer />
            </div>
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
        <div className="textb">Program Categories</div>

        <div className="mappedCategories">
          <div className="cardsContainer">
            {visibleCards.map((item, index) => (
              <div key={index} className="card">
                <div>
                  <img src={item.images} className="cardCourseImagea" />
                </div>
                <div className="textcarda">{item.program_title}</div>
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
          <div className="landccards" key={index}>
            <div>
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
