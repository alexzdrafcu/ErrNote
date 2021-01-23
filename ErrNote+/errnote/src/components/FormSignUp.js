import React, {useEffect} from "react";
import useForm from "./useForm";
import validateInfo from "./validateInfo";
import "./FormSignUp.css";
import LOGO from "../images/LOGO.png";
import SignupImg from "../images/Signup.png"

const FormSignUp = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validateInfo
  );
  return (
    <div className="form-container">
      <div className="form-content-left">
        <img src={SignupImg} className="left-img"></img>
      </div>
      <div className="form-content-right">
        <img src={LOGO} alt="" className="logoSignUp"></img>
        <form className="form" onSubmit={handleSubmit}>

          <h1 id='title'> Create account</h1>

          <div className="form-inputs">
            <div className="labels">
              <label htmlFor="" className="form-label">
                Last Name
          </label>
              {errors.lastName && <p>{errors.lastName}</p>}
            </div>
            <input
              id="lastName"
              type="text"
              name="lastName"
              className="form-input"
              // placeholder="Enter your username"
              value={values.lastName}
              onChange={handleChange}
            ></input>
          </div>

          <div className="form-inputs">
            <div className="labels">
              <label htmlFor="" className="form-label">
                First Name
          </label>
              {errors.firstName && <p>{errors.firstName}</p>}
            </div>
            <input
              id="firstName"
              type="text"
              name="firstName"
              className="form-input"
              // placeholder="Enter your username"
              value={values.firstName}
              onChange={handleChange}
            ></input>
          </div>

          <div className="form-inputs">
            <div className="labels">
              <label htmlFor="email" className="form-label">
                Email
          </label>
              {errors.email && <p>{errors.email}</p>}
            </div>
            <input
              id="email"
              type="email"
              name="email"
              className="form-input"
              // placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            ></input>
          </div>

          <div className="form-inputs">
            <div className="labels">
            <label htmlFor="password" className="form-label">
              Password
          </label>
          {errors.password && <p>{errors.password}</p>}
          </div>
            <input
              id="password"
              type="password"
              name="password"
              className="form-input"
              // placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            ></input>
          </div>

          <div className="form-inputs">
            <div className="labels">
            <label htmlFor="password2" className="form-label">
              Re-type Password
          </label>
          {errors.password2 && <p>{errors.password2}</p>}
          </div>
            <input
              id="password2"
              type="password"
              name="password2"
              className="form-input"
              // placeholder="Enter your password"
              value={values.password2}
              onChange={handleChange}
            ></input>
          </div>

          <button className="form-input-button" type="submit">
            Sign up
        </button>
          <span className="form-input-login">
            Already have an account? Login <a href="/login">here</a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default FormSignUp;
