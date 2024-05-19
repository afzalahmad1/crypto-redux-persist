import React, {  useState } from "react";
import "./styles.css";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.jpg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const LoginComponent = () => {
  const navigate = useNavigate();
  const usersList = useSelector(state => state.users)
  const [loginObj, setLoginObj] = useState({
    email: "",
    password: "",
  });
  const [message,setMessage] = useState("")

  

  const handleInputChange = (e) => {
    setLoginObj({
      ...loginObj,
      [e.target.name]: e.target.value,
    });
    console.log(loginObj);
  };

  const handleSubmit = (e) => {
    console.log("login userlist" , usersList);
    const user = usersList.find(user => user.email === loginObj.email)
    console.log(user);
    if(user){
      if(user.password === loginObj.password){
        setMessage("Login Success")
        localStorage.setItem("currentUser",JSON.stringify(user))
        navigate("/home")
      }else{
        setMessage("Invalid Password")
      }
    }else{
      setMessage("Email does not exist")
    }
  };
  return (
    <div className="form">
      <div className="container">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="email-icon" />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={loginObj.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="password-icon" />
            <input
              type="password"
              placeholder="Password"
              value={loginObj.password}
              name="password"
              onChange={handleInputChange}
            />
          </div>
        </div>
        {message && <p style={{color:message==="Login Success"?"green":"red"}}>{message}</p>}
        <div className="submit-container">
          <div className="submit" onClick={() => navigate("/")}>
            Sign Up
          </div>
          <div className="submit" onClick={handleSubmit}>
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;