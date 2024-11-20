import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Login = () => {
  const [login, setLogin] = useState(true); // State to toggle between Login and Sign Up

  return (
    <div className="login">
      <div className="form-container">
        <i
          className="fas fa-user"
          style={{
            fontSize: "150px",
            color: "#ccc",
            marginBottom: "50px",
          }}
        ></i>
        <form action={login ? "/login" : "/signup"} method="POST">
          <label style={{ display: "flex", alignItems: "center" }}>
            <i
              className="fas fa-envelope"
              style={{ color: "#ccc", marginRight: "10px" }}
            ></i>
            <input
              type="text"
              name="username"
              placeholder="Email ID"
              required
            ></input>
          </label>
          <label style={{ display: "flex", alignItems: "center" }}>
            <i
              className="fas fa-lock"
              style={{ color: "#ccc", marginRight: "10px" }}
            ></i>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            ></input>
          </label>

          {/* Show Confirm Password input only for Sign Up */}
          {!login && (
            <label style={{ display: "flex", alignItems: "center" }}>
              <i
                className="fas fa-lock"
                style={{ color: "#ccc", marginRight: "10px" }}
              ></i>
              <input
                type="password"
                name="confirm-password"
                placeholder="Confirm Password"
                required
              ></input>
            </label>
          )}

          <div className="remember">
            {login ? (
              <a
                style={{ color: "black" }}
                href="/forgot-password"
                className="forgot-password-link"
              >
                Forgot password?
              </a>
            ) : null}
          </div>

          {/* Toggle between Login and Sign Up button text */}
          <button className="login-btn">{login ? "LOGIN" : "SIGN UP"}</button>
        </form>
        <div style={{ color: "#ccc", marginTop: "20px" }}>
          <span style={{ fontSize: "14px", marginRight: "10px" }}>
            {login ? "Not a member ?" : "Already have an account?"}
          </span>
          {/* Toggle between Sign Up and Login */}
          <button
            style={{
              color: "black",
              background: "none",
              border: "none",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => setLogin(!login)}
          >
            {login ? "Sign up" : "log in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
