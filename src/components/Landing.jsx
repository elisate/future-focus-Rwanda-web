import React from "react";
import "../styles/landing.scss";
import Writer from "./Writer";

function Landing() {
  const courses = [
    {
      courseImage: "../../public/C1.jpeg",
      buttonTitle: "Coding", // Corrected typo here
    },
    {
      courseImage: "../../public/R1.jpeg",
      buttonTitle: "Robotics", // Corrected typo here
    },
    {
      courseImage: "../../public/D1.jpeg",
      buttonTitle: "UI/UX Design", // Corrected typo here
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
          {courses.map((item, index) => {
            return (
              <div key={index}>
                <div>
                  <img
                    src={item.courseImage}
                    className="cardCourseImagea"
                
                  />
                </div>
                <div className="textcarda">{item.buttonTitle}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Landing;
