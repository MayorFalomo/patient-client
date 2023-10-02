import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import {BiBell} from 'react-icons/bi'
import { GoTriangleDown } from 'react-icons/go'
import { Header } from './Headerbar.styled'

const Headerbar = () => {

  return (
    <Header>
          <div className="headerStyle" >
      <div className="subHeader" >
        <form className='' >
          <span className="searchBtn" ><CiSearch fontSize="25px" /> </span>
          <input type="text" className="searchInput" placeholder="Search Appointment, Doctor..." />
        </form>
        <div className='flexHeader' >
        <span><AiOutlineQuestionCircle fontSize="25px" /> </span>
          <span><BiBell cursor="pointer" fontSize="25px" /> </span>
          <div className='flexArea' >
            <img className="flexAreaImg" src='./irene.jpg'  alt="image" />
            <div className='patient-Info' >
              <div>
              <h2 className='font-bold' >Gavin Guile </h2>
                <p>Patient </p>
                </div>
              <span><GoTriangleDown fontSize="25px" /> </span>
            </div>
          </div>
          </div>
      </div>
      </div>
      </Header>
  )
}

export default Headerbar