import React from "react";
import "../styles/programs.scss";
import { CgArrowLongRight } from "react-icons/cg";
import { mycontext } from "../fetch/ContextProvider";
import { useNavigate } from "react-router-dom";
import { Notify } from "notiflix";
function Programs() {

  const {program} = mycontext();
  const navigate=useNavigate();
  
  const handleNavigate = (id) => {
    // Retrieve the userToken from localStorage
    const userToken = JSON.parse(localStorage.getItem("userToken"));
    // Access the accessToken within the nested tokens object
    const token = userToken?.user?.tokens?.accessToken;
    if (!token) {
      Notify.warning("Please log in to enroll in a program");
      navigate("/login"); 
    } else {
      navigate(`/sprogram/${id}`);
    }
  };

  return (
    <div className="programsContainer">
      <div className="pctitle">
        <span className="Jcontent">Join</span> Our Exciting Programs Today!
      </div>
      <div className="mappedProgramsP">
        <div className="cardsContainerp">
          {program?.map((item) => (
            <div key={item.id} className="cardProgram">
              <div>
                <img src={item.images} className="cardCourseImageaP" />
              </div>
              <div className="textcardaP">{item.program_title}</div>
              <div className="prContentProgram">{item.programContent}</div>
              <div
                className="enrollP"
                onClick={() => handleNavigate(item?._id)}
              >
                <span>Enroll Now</span>
                <CgArrowLongRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Programs;
