import { NavContainer } from './Nav.styled'
import { BiBell } from 'react-icons/bi'
import { BiPhoneCall } from 'react-icons/bi'
import { AiOutlineHome, AiOutlineForm } from 'react-icons/ai'
// import {} from 'react-icons/si'
import { BiExit } from 'react-icons/bi'
import { BsEnvelope, BsCreditCard } from 'react-icons/bs'

const Navbar = () => {
  return (
    <NavContainer>
      <nav>
        <div className='navSection' >
        <h1>Medika </h1>
        <ul>
          <li>Home<span><AiOutlineHome fontSize="25px" /> </span> </li>
          <li>Medical Form <span><AiOutlineForm  fontSize="25px" /> </span> </li>
          <li>Payments <span><BsCreditCard  fontSize="25px" /> </span> </li>
          <li>Messages <span><BsEnvelope  fontSize="25px" /> </span> </li>
          <li>Find Hospital <span><BiBell fontSize="25px" />  </span> </li>
          <li>Customer care <span><BiPhoneCall fontSize="25px"/> </span> </li>
          <li>Calendar <span><BiPhoneCall fontSize="25px"/> </span> </li>
          <li>Light Mode <span><BiPhoneCall fontSize="25px"/> </span> </li>
        </ul>
          <p style={{fontSize: '20px'}} >Log Out<span> <BiExit fontSize='25px' /> </span> </p>
          </div>
      </nav>
      </NavContainer>
  )
}

export default Navbar