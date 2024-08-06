import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/programcourse.scss";

function Programcourse() {
  const { Pid } = useParams();
  const [program, setProgram] = useState({});
  const [pcourse, setPcourse] = useState([]);

  useEffect(() => {
    const singleProgram = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/program/getProgramById/${Pid}`
        );
        console.log(res.data);
        setProgram(res.data);
      } catch (error) {
        console.log("fetching errors", error);
      }
    };
    singleProgram();
  }, [Pid]);

  useEffect(() => {
    const getprogramCourse = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/program/getProgramWithCourses/${Pid}`
        );
        console.log(response.data);
        setPcourse(response.data.courses || []);
      } catch (err) {
        console.log(err);
      }
    };
    getprogramCourse();
  }, [Pid]);

  return (
    <div className="programCourseContainer">
      <div className="cardPrograms">
        <h3><b>Program Details</b></h3>
        <div>
          <img
            src={program.images}
            alt="Program image"
            className="single_image"
          />
        </div>
        <div>{program?.program_title}</div>
      </div>
      <h1>Courses Related to the Program</h1>
      <div className="courses">
        {pcourse?.map((item, index) => (
          <div key={index}>
            <div>
              {<img src={item.images} alt="Course" className="images" />}
            </div>
            <div>{item.courseTitle}</div>
            <div>{item.courseContent}</div>
            <div>

               
                    <video controls>
                      <source src={item.videos} type="video/mp4" />
                    </video>
            </div>
            <div>
              <a href={item.documents}>document</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programcourse;
