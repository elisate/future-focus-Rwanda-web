import React from "react";
import "../styles/studentregistration.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Notify } from "notiflix";
import { Navigate } from "react-router-dom";
function StudentRegistration() {
  const { Pid } = useParams();
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [program, setProgram] = useState({});
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  const fname = userToken?.user?.firstname;
  const lname = userToken?.user?.lastname;
  const Email = userToken?.user?.email;

  useEffect(() => {
    const singleProgram = async () => {
      const userToken = JSON.parse(localStorage.getItem("userToken"));
      const token = userToken?.user?.tokens?.accessToken;
      try {
        const res = await axios.get(
          `https://future-focus-rwanada.onrender.com/program/getProgramById/${Pid}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setProgram(res.data);
      } catch (error) {
        console.log("fetching errors", error);
      }
    };
    singleProgram();
  }, [Pid]);

  const onsubmit = async (data) => {
    const userToken = JSON.parse(localStorage.getItem("userToken"));
    const token = userToken?.user?.tokens?.accessToken;
    const {
      student_firstname,
      student_lastname,
      student_email,
      program_enrolled_in,
      student_gender,
      student_level_of_education,
      student_country,
      student_district,
    } = data;

    try {
      const formData = new FormData();

      formData.append("student_firstname", student_firstname);
      formData.append("student_lastname", student_lastname);
      formData.append("student_email", student_email);
      formData.append("program_enrolled_in", program_enrolled_in);
      formData.append("student_gender", student_gender);
      formData.append("student_level_of_education", student_level_of_education);
      formData.append("student_country", student_country);
      formData.append("student_district", student_district);

      const res = await axios.post(
        "https://future-focus-rwanada.onrender.com/student/studentRegister",
        formData, // Send the data directly
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Show success notification
      Notify.success("Registration successful!");

      navigate("/studentCourse");
    } catch (error) {
      console.log(error);
      // Show error notification
      Notify.failure("Registration failed! Please try again.");
    }
  };

  return (
    <div className="regContainer">
      <div className="text">
        Please fill out the form and follow the instructions to complete your
        enrollment in <span className="special"> {program.program_title}</span>
      </div>

      <div className="registration-container">
        <div className="textregister">
          <span className="design">Student</span> Registration Form
        </div>
        <form className="registration-form" onSubmit={handleSubmit(onsubmit)}>
          <div className="form-group">
            <label className="labeling">First Name</label>
            <input
              type="text"
              name="student_firstname"
              value={fname}
              {...register("student_firstname", { required: true })}
            />
          </div>
          <div className="form-group">
            <label className="labeling">Last Name</label>
            <input
              type="text"
              name="student_lastname"
              value={lname}
              {...register("student_lastname", { required: true })}
            />
          </div>
          <div className="form-group">
            <label className="labeling">Email</label>
            <input
              type="email"
              name="student_email"
              value={Email}
              {...register("student_email", { required: true })}
            />
          </div>
          <div className="form-group">
            <label className="labeling">Program Enrolled In</label>
            <input
              type="text"
              name="program_enrolled_in"
              value={program.program_title}
              {...register("program_enrolled_in", { required: true })}
            />
          </div>

          <div className="form-group">
            <label className="labeling">Gender</label>
            <select
              id="gender"
              name="student_gender"
              {...register("student_gender", { required: true })}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label className="labeling">Level of Education</label>
            <input
              type="text"
              id="levelOfEducation"
              name="student_level_of_education"
              {...register("student_level_of_education", { required: true })}
            />
          </div>
          <div className="form-group">
            <label className="labeling">Country</label>
            <input
              type="text"
              id="country"
              name="student_country"
              {...register("student_country", { required: true })}
            />
          </div>
          <div className="form-group">
            <label className="labeling">District</label>
            <input
              type="text"
              id="district"
              name="student_district"
              {...register("student_district", { required: true })}
            />
          </div>

          <button type="submit" className="submit-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentRegistration;
