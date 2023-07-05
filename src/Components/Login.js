
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
  };

  const handleButton = (e) => {
    e.preventDefault();
    const { email, password } = data;
    const API = "http://localhost:7000/user/login";
    
    if (email && password) {
      axios
        .post(API, data)
        .then((res) => {
          console.log(res.data);
          navigate("/home");
        })
        .catch((err) => console.log(err));
    }
    else {
      setError("Please enter email and password.");
    }
  };

  const handleBackBtn = ()=>{
    navigate("/")
  }
  return (
    <div>
      <button onClick={handleBackBtn} className="bButtn">Back</button>
      <div className="logText">Login here</div>
      <div className="logForm">
        <div className="logComCon">
          {/* <div>Login entering your Correct credentials</div> */}
          {/* <div>login</div> */}
          <img
            className="lockImg"
            src="https://www.freeiconspng.com/thumbs/secure-icon-png/lock-icon-17.png"
            alt="Locked"
          />
          <div className="Logcont1">
            {/* <label htmlFor="email">Email:</label> */}
            <input
              className="lLoginInp"
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="Logcont2">
            {/* <label htmlFor="password">Password:</label> */}
            <input
              className="lLoginInp"
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <span style={{ color: "red" }}>{error}</span>}
          <button className="Sbutn" onClick={handleButton}>
            Login
          </button>
        </div>
      </div>
      <div className="homeBody">
        <img
          className="homeImg"
          src="https://plus.unsplash.com/premium_photo-1678483692858-d9ca6e9c67f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt="no img"
        />
      </div>
    </div>
  );
}

export default Login;
