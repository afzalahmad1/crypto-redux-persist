import React, { useState } from "react";
import "./styles.css";
import user_icon from "../../assets/person.png";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../store/slices/UsersSlice";


const SignupComponent = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const usersList = useSelector(state => state.users)
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };

  const registerUser = () => {
   console.log("sign state",usersList);
   console.log("USER",!user.name|| !user.email || !user.password);
   if(!user.name || !user.email || !user.password){
    console.log("empty");
    setMessage("All fields are required")
    return
   }else if(usersList.find(val => val.email === user.email)){
    console.log("find");
    setMessage("Email already exist")
    return
   }
  setMessage("User has been created!")
  setUser({
   name: "",
   email: "",
   password: "",
  })
  user.watchList = [];
   dispatch(createUser(user))

  };
  return (
    <div className="form">
      <div className="container">
        <div className="header">
          <div className="text">SignUp</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="user-icon" />
            <input
              type="text"
              placeholder="Name"
              value={user.name}
              onChange={handleUser}
              name="name"
              required
            />
          </div>
          <div className="input">
            <img src={email_icon} alt="email-icon" />
            <input
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={handleUser}
              name="email"
              required
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="password-icon" />
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={handleUser}
              name="password"
              required
            />
          </div>
        </div>
        {message && (
          <div
            className="message"
            style={{
              color: message === "User has been created!" ? "green" : "red",
            }}
          >
            {message}
          </div>
        )}
        <div className="submit-container">
          <div className="submit" onClick={registerUser}>
            Sign Up
          </div>
          <div className="submit" onClick={() => navigate("/login")}>
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;