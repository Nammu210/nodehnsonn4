
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'

function NewRegister() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    phonenumber: "",
    email: "",
    password: "",
  });
  const [store, setStore] = useState(null);
  const [error, setError] = useState(null);

  const handleButton = (e) => {
    e.preventDefault();
    setStore({ ...data });
    console.log(store,"store");
    console.log("data", data);
    const { email, password } = data;
    const API = "http://localhost:7070/user/register"
    
    setData({
      name: "",
      phonenumber: "",
      email: "",
      password: ""
    });
    if (email && password) {
      axios.post(API,data)
        .then(res => {
          // alert("user registered")
          console.log(res.data);
          navigate('/home');
        })
        .catch((err) => console.log(err));
    } else {
      setError("Please enter email and password.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="SignupCon">
      <div className="SignText">Sign up here</div>
      <div className="cForm">
        <form className="SignForm">
          <img
            className="lockImg"
            src="https://www.freeiconspng.com/thumbs/secure-icon-png/lock-icon-17.png"
            alt="Locked"
          />
          <input
            className="sInp"
            type="text"
            name="name"
            value={data.name}
            placeholder="Enter Your Name"
            onChange={handleChange}
            required
          />
          <input
            className="sInp"
            type="number"
            name="phonenumber"
            value={data.phonenumber}
            placeholder="Enter Your Phone Number"
            onChange={handleChange}
            required
          />
          <input
            className="sInp"
            type="email"
            name="email"
            value={data.email}
            placeholder="Enter Your Email"
            onChange={handleChange}
            required
          />
          <input
            className="sInp"
            type="password"
            name="password"
            value={data.password}
            placeholder="Enter Your Password"
            onChange={handleChange}
            required
          />
          {error && <span style={{ color: "red" }}>{error}</span>}
          <button className="Sbutn" onClick={handleButton}>
            Signup
          </button>
          <div>
            <NavLink to="/user/login"> Already have an account? Sign in</NavLink>
          </div>
        </form>
      </div>

      <div className="homeBody">
        <img
          className="homeImg"
          src="https://plus.unsplash.com/premium_photo-1675173541631-6daa66970196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjZ8fG5hdHVyYWx8ZW58MHx8fHwxNjg4NDcyNDMwfDE&ixlib=rb-4.0.3&q=80&w=1080"
          alt="no img"
        />
      </div>
    </div>
  );
}

export default NewRegister;
