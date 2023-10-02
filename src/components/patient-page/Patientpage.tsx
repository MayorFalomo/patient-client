import React from 'react'
import { Patient } from './Patientpage.styled'

const Patientpage = () => {
  return (
    <Patient>
      <div className="patientInfoContainer" >
          <h1>Welcome Mr Guile </h1>
          <span>Your health, our priority </span>
          <p>Want to book an appointment? <a> Click here</a> </p>
      </div>
      </Patient>
  )
}

export default Patientpage