import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/userdashboard.scss";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function UserDashboard() {
  const { Pid } = useParams();

  const navigate = useNavigate();
  const navigateSingleCourse = (courseId) => {
    navigate(`/viewCourse/${courseId}`);
  };
  const [course, setCourse] = useState([]);

  useEffect(() => {
    const getcourse = async () => {
      const userToken = JSON.parse(localStorage.getItem("userToken"));

      // Access the accessToken within the nested tokens object
      const token = userToken?.user?.tokens?.accessToken;
      console.log(token);
      try {
        const response = await axios.get(
          "http://localhost:5000/student/student/courses",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        setCourse(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getcourse();
  }, []);
  return (
    <div className="courseContainer">
      {course.map((item) => (
        <div
          className="coursecard"
          onClick={() => navigateSingleCourse(item._id)}
        >
          <div>
            <img src={item.images} className="images" />
          </div>
          <div className="title">{item.courseTitle}</div>
        </div>
      ))}
    </div>
  );
}

export default UserDashboard;
