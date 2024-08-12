import React from "react";
import "../styles/studentregistration.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
function StudentRegistration() {
  const { Pid } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const [program, setProgram] = useState({});
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  const fname = userToken?.user?.firstname;
  const lname = userToken?.user?.lastname;
  const Email = userToken?.user?.email;

  useEffect(() => {
    const singleProgram = async () => {
      const userToken = JSON.parse(localStorage.getItem("userToken"));

      // Access the accessToken within the nested tokens object
      const token = userToken?.user?.tokens?.accessToken;
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


  const onsubmit = async (data) => {
     const userToken = JSON.parse(localStorage.getItem("userToken"));

     // Access the accessToken within the nested tokens object
     const token = userToken?.user?.tokens?.accessToken;
    console.log(data);
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
        "http://localhost:5000/student/studentRegister",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.setItem("userToken", JSON.stringify(res.data));
      navigate("/landing");
    } catch (error) {
      console.log(error);
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
