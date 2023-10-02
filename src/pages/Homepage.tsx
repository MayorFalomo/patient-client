// import React from 'react'
import Headerbar from "../components/header/Headerbar"
import Navbar from "../components/navbar/Navbar"
import Patientpage from "../components/patient-page/Patientpage"
import { HomeContainer } from "./Homepage.styled"

const Homepage = () => {
  return (
    <HomeContainer>
    <div className="homeContainer" >
        <Navbar />
      <div style={{backgroundColor: "#F9F9F9"}} >
          <Headerbar />
          <Patientpage/>
          </div>
      Homepage
      </div>
      </HomeContainer>
  )
}

export default Homepage