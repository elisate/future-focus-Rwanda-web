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
    <div className="allPrograms">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${program.images})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "80vh",
          width: "100%",
        }}
      >
        <div className="programatitle" >{program?.program_title}</div>
        <div className="endriver"><button type="submit" className="enrollbutton">enroll</button></div>
      </div>
      <div className="programCourseContainer">
        <div className="cardPrograms">
          <h3>
            <b>Program Details</b>
          </h3>
         
        </div>
      </div>
    </div>
  );
}

export default Programcourse;
