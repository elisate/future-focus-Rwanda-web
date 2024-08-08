import React from "react";
import "../styles/login.scss";
import "../styles/button.scss";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const onsubmit = async (data) => {
    console.log(data);
    const {email, password } = data;
    try {
      const formData = new FormData();

      formData.append("email", email);
      formData.append("password", password);

      const res = await axios.post(
        "http://localhost:5000/user/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      navigate("/landing");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="loginController">
      <form className="loginContainer" onSubmit={handleSubmit(onsubmit)}>
        <div className="headtt">
          <div>
            <img src="logo_official.png" className="headerLogo" alt="Logo" />
          </div>
          <div className="title">Welcome Back !!!</div>
        </div>

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
        <div className="forgotPassword">Forget Password</div>
        <div>
          <button type="submit" className="buttonFixL">
            Login
          </button>
        </div>
        <div className="signupPrompt">
          If you don't have an account{" "}
          <Link to="/signIn">
            <span className="span">Sign up</span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
