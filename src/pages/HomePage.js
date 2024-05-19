import React from 'react'
import MainComponent from '../components/LandingPage/MainComponent'
import Header from '../components/Common/Header'

function HomePage() {
  let currentUser = JSON.parse(localStorage.getItem("currentUser"))
  if(!currentUser){
    return <h1 style={{textAlign:"center"}}>Please Login First.....</h1>
  }
  return (
    <div>
      <Header />
      <MainComponent />
    </div>
  )
}

export default HomePage;
