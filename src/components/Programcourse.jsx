// 
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Programcourse() {
  const courses = [
    {
      courseTitle: "bbbbbbbb",
      videos: "videos",
      documents: "bbbbbb",
      images: "/mmmmmm",
      courseContent: "heloloolo",
      program_title: "Coding",
    },
  ];

  const { Pid } = useParams();
  const [program, setProgram] = useState([]);

  useEffect(() => {
    const singleProgram = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/program/getPrograms?_id=${Pid}`
        );
        console.log(response.data);
        setProgram(response.data);
      } catch (error) {
        console.log("fetching errors", error);
      }
    };
    singleProgram();
  }, [Pid]);

  return (
    <div>
      {courses.map((item, index) => (
        <div key={index}>
          <div>{item.courseTitle}</div>
          <div>{item.videos}</div>
          <div>{item.documents}</div>
          <div>{item.images}</div>
          <div>{item.courseContent}</div>
          <div>{item.program_title}</div>
        </div>
      ))}
      <div>
        {program.map((item) => (
          <div key={item._id}>
            <img src={item.images} alt={item.program_title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programcourse;
