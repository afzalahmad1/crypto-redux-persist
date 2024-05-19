import React from 'react'
import './styles.css'
import TemporaryDrawer from './drawer'
import Button from '../Button'
import { Link } from 'react-router-dom'

function Header() {
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <div className='navbar'>
      <h1 className="logo">Hello {currentUser.name} <span style={{color:"var(--blue)"}}>.</span> </h1>
      <div className='links'>
        <Link to="/home">
        <p className='link'>Home</p>
        </Link>
        <Link to="/compare">
        <p className='link'>Compare</p>
        </Link>
        <Link to="/watchlist">
        <p className='link'>WatchList</p>
        </Link>
        <Link to="/dashboard">
         <Button  text={"Dashboard"}/>
        </Link>
      </div>
      <div className="mobile-drawer">
        <TemporaryDrawer />
      </div>
    </div>
  )
}

export default Header;
