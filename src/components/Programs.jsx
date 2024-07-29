import React from "react";
import "../styles/programs.scss";
import { CgArrowLongRight } from "react-icons/cg";
function Programs() {
  const program = [
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
  return (
    <div className="programsContainer">
      <div className="pctitle">
        <span className="Jcontent">Join</span> Our Exciting Programs Today!
      </div>
      <div className="mappedProgramsP">
        <div className="cardsContainerp">
          {program.map((item, index) => (
            <div key={index} className="cardP">
              <div>
                <img src={item.courseImage} className="cardCourseImageaP" />
              </div>
              <div className="textcardaP">{item.buttonTitle}</div>
              <div className="prContentP">{item.programContent}</div>
              <div className="enrollP"><span>Enroll</span><CgArrowLongRight/></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Programs;
