import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";

const Login = ({ setUserState }) => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const errors = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user);
      axios.post("http://localhost:8085/login", user).then((res) => {
        alert("Login successful")
        setUserState(res.data.user);
        navigate("/FINDJOB", { replace: true });
      });
    }
  }, [formErrors]);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "black" }}>
      <div style={{ maxWidth: "400px", width: "100%", padding: "20px", backgroundColor: "black" }}>
        <form>
          <h1 style={{ textAlign: "center", marginBottom: "20px", color: "white" }}>Login</h1>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={changeHandler}
            value={user.email}
            style={{
              marginBottom: "10px",
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: "black",
              color: "white",
            }}
          />
          {formErrors.email && (
            <p style={{ color: "red", marginBottom: "10px" }}>{formErrors.email}</p>
          )}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={changeHandler}
            value={user.password}
            style={{
              marginBottom: "10px",
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: "black",
              color: "white",
            }}
          />
          {formErrors.password && (
            <p style={{ color: "red", marginBottom: "10px" }}>{formErrors.password}</p>
          )}
          <button
            style={{
              width: "100%",
              backgroundColor: "#4caf50",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={loginHandler}
          >
            Login
          </button>
          <br />
          <NavLink
            to="/signup"
            style={{ marginTop: "10px", display: "block", textAlign: "center", color: "white" }}
          >
            Not yet registered? Register Now
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Login;



