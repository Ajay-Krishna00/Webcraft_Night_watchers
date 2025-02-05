import React, { useState } from "react";
import "./Login.css";
import { IoMdClose } from "react-icons/io";

const Login = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");

  const handleClose = () => {
    console.log("Closing the login modal");
    setShowLogin(false); 
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <button onClick={handleClose} className="cursor-pointer">
  <IoMdClose />
</button>
        </div>
        <div className="login-popup-inputs">
          {currentState === "Login" ? null : (
            <input type="text" id="signup" placeholder="Your name" required />
          )}
          <input type="email" id="email" placeholder="Your email" required />
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">
          {currentState === "Sign up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrentState("Sign up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
