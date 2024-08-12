import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/programcourse.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "bootstrap";

function Programcourse() {
  const { Pid } = useParams();
  const [program, setProgram] = useState({});

  const navigate = useNavigate();
  const navigateRegistration = (id) => {
    navigate(`/studentregistration/${id}`);
  };

  useEffect(() => {
    const singleProgram = async () => {
      const userToken = JSON.parse(localStorage.getItem("userToken"));
      // Access the accessToken within the nested tokens object
      const token = userToken?.user?.tokens?.accessToken;
      console.log("Access Token:", token);

      try {
        const res = await axios.get(
          `http://localhost:5000/program/getProgramById/${Pid}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log(res.data);
        setProgram(res.data);
      } catch (error) {
        console.log("fetching errors", error);
      }
    };
    singleProgram();
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
        <div className="programatitle">{program?.program_title}</div>
        <div className="endriver">
          <button
            type="submit"
            className="enrollbutton"
            onClick={() => navigateRegistration(Pid)}
          >
            enroll
          </button>
        </div>
      </div>
      <div className="programCourseContainer">
        <div className="cardPrograms">
          <div className="programDetails">
            Program Details For{" "}
            <span className="stylep">{program?.program_title}</span>
          </div>

          <div className="imagecontent">
            <img
              src={program.images}
              alt="Program image"
              className="single_image"
            />
            <div className="enrollContentButton">
              <div className="contentCourse">{program.programContent}</div>
              <div className="ENFIX">
                <button
                  type="submit"
                  className="enrollFinalbutton"
                  onClick={() => navigateRegistration(Pid)}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programcourse;
