
import React from 'react'
import './styles.css'
import { useNavigate } from "react-router-dom";

function Button({text, outlined}) {
  const navigate = useNavigate()
  const handleLogout = ()=>{
    console.log("logout")
    if(text === 'Logout'){
      localStorage.removeItem("currentUser")
      navigate("/login")
    }
  }
  return (
    <div  onClick={handleLogout} className={outlined?'outlined-btn':'btn'} >
      {text}
    </div>
  )
}

export default Button
