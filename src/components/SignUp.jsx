import React from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import "../styles/signup.scss";
import '../styles/button.scss';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function SignUp() {
const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const onsubmit = async (data) => {
    console.log(data);
    const { firstname,lastname, email, password } = data;
    try {
      const formData = new FormData();
      formData.append("firstname", firstname);
       formData.append("lastname", lastname);
      formData.append("email", email);
      formData.append("password", password);

      const res = await axios.post(
        "https://future-focus-rwanada-1.onrender.com/user/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      
        navigate("/login");
     
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="signupholder">
      <div className="signupContainer">
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="headt">
            <div>
              <img src="logo_official.png" className="headerLogo" alt="Logo" />
            </div>
            <div className="title">Create Your Profile To FFR System</div>
          </div>

          <div className="formRow">
            <div className="formGroup">
              <label>First Name</label>
              <div className="inputContainer">
                <FaUser className="inputIcon" />
                <input
                  type="text"
                  placeholder="First name"
                  name="firstname"
                  {...register("firstname", { required: true })}
                />
              </div>
            </div>
            <div className="formGroup">
              <label>Last Name</label>
              <div className="inputContainer">
                <FaUser className="inputIcon" />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  {...register("lastname", { required: true })}
                />
              </div>
            </div>
          </div>
          <div className="formRow">
            <div className="formGroup">
              <label>Email</label>
              <div className="inputContainer">
                <FaEnvelope className="inputIcon" />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  {...register("email", { required: true })}
                />
              </div>
            </div>
            <div className="formGroup">
              <label>Password</label>
              <div className="inputContainer">
                <FaLock className="inputIcon" />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  {...register("password", { required: true })}
                />
              </div>
            </div>
          </div>
          <div>
            <button type="submit" className="buttonFixS ">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
