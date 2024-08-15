import React from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import "../styles/signup.scss";
import "../styles/button.scss";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Notify } from "notiflix";

function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { firstname, lastname, email, password } = data;
    try {
      const formData = {
        firstname,
        lastname,
        email,
        password,
      };

      const res = await axios.post(
        "https://future-focus-rwanada.onrender.com/user/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 201) {
        Notify.success("Account created successfully!");
        navigate("/login");
      } else {
        Notify.failure("Failed to create an account. Please try again.");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Notify.failure("Email already exists. Please use a different email.");
      } else {
        Notify.failure("An error occurred. Please try again later.");
      }
      console.log(error);
    }
  };

  return (
    <div className="signupholderSpecific">
      <div className="signupContainer">
        <form onSubmit={handleSubmit(onSubmit)}>
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
                  {...register("firstname", {
                    required: "First name is required",
                    minLength: {
                      value: 2,
                      message: "First name must be at least 2 characters",
                    },
                  })}
                />
              </div>
              {errors.firstname && (
                <span className="errorText">{errors.firstname.message}</span>
              )}
            </div>

            <div className="formGroup">
              <label>Last Name</label>
              <div className="inputContainer">
                <FaUser className="inputIcon" />
                <input
                  type="text"
                  placeholder="Last Name"
                  {...register("lastname", {
                    required: "Last name is required",
                    minLength: {
                      value: 2,
                      message: "Last name must be at least 2 characters",
                    },
                  })}
                />
              </div>
              {errors.lastname && (
                <span className="errorText">{errors.lastname.message}</span>
              )}
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
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <span className="errorText">{errors.email.message}</span>
              )}
            </div>

            <div className="formGroup">
              <label>Password</label>
              <div className="inputContainer">
                <FaLock className="inputIcon" />
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
              </div>
              {errors.password && (
                <span className="errorText">{errors.password.message}</span>
              )}
            </div>
          </div>

          <div>
            <button type="submit" className="buttonFixS">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
