import React from "react";
import "../styles/login.scss";
import "../styles/button.scss";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Notify } from "notiflix";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 const onSubmit = async (data) => {
   const { email, password } = data;
   try {
     const res = await axios.post(
       "https://future-focus-rwanada.onrender.com/user/login",
       { email, password },
       {
         headers: {
           "Content-Type": "application/json",
         },
       }
     );

     if (res.status === 200) {
       Notify.success("Login successful!");
      const userToken = res.data;
      localStorage.setItem("userToken", JSON.stringify(userToken));

      // Access the role from the stored userToken
      const role = userToken.user.role;

       // Check the user's role and navigate accordingly
       if (role === "isAdmin") {
         navigate("/dashboard");
       } else {
         navigate("/landing");
       }
     } else {
       Notify.failure("Login failed. Please check your credentials.");
     }
   } catch (error) {
     if (error.response && error.response.status === 401) {
       Notify.failure("Invalid credentials. Please try again.");
     } else if (error.response && error.response.status === 404) {
       Notify.failure("User not found. Please sign up.");
     } else {
       Notify.failure("An error occurred. Please try again later.");
     }
   }
 };

  return (
    <div className="loginControllerSpecific">
      <form className="loginContainer" onSubmit={handleSubmit(onSubmit)}>
        <div className="headtt">
          <div>
            <img src="logo_official.png" className="headerLogo" alt="Logo" />
          </div>
          <div className="title">Welcome Back User!!!</div>
        </div>

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

        <div className="forgotPassword">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>

        <div>
          <button type="submit" className="buttonFixL">
            Login
          </button>
        </div>

        <div className="signupPrompt">
          Don't have an account?{" "}
          <Link to="/signIn">
            <span className="span">Sign up</span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
