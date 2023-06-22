import React, {useState} from 'react'
import letterH from '../assets/clipart-h.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail, } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#3f8bfc] text-gray-300'>
    
    <img src={letterH} alt="letter H"style={{width: '50px'}} />
 
 {/*menu*/}

    
      <ul className='hidden md:flex'>
        <li>  <Link  to="home"  smooth={true} duration={500}>
          Home
        </Link></li>
        <li>  <Link to="about" smooth={true} duration={500}>
          About
        </Link></li>
        <li>  <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link></li>
        <li>  <Link to="work" smooth={true} duration={500}>
          Work
        </Link></li>
        <li>  <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link></li>
      </ul>
    {/*hamburger*/}
    <div onClick={handleClick} className='md:hidden z-10'>
    {<FaBars/>}
    </div>
{/*mobile menu*/}
<div className={!nav 
? 'hidden' : 
'absolute top-0 left-0 w-full h-screen bg-[#1472ff] '}>
  <div className='flex justify-items-start'> {<FaTimes onClick={handleClick}/>}
  </div>
    <ul className='flex flex-col justify-center items-center' >
        <li  className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
        </Link></li>
        <li  className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>
          About
        </Link></li>
        <li  className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>
          Skills
        </Link></li>
        <li  className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500}>
          Work
        </Link></li>
        <li className='py-6 text-4xl'><Link  onClick={handleClick} to="contact" smooth={true} duration={500}>
          Contact
        </Link></li>
    </ul>
    </div>

    {/*Social icons*/}
    
<ul className='fixed flex-col top-[35%] left-0 hidden lg:flex'>
  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
    <a className='flex justify-between items-center w-full'
    href="https://www.linkedin.com/in/james-hoofard-ba8abb68/">
     Linkedin<FaLinkedin size={50}  />
    </a>
  </li>
  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
    <a className='flex justify-between items-center w-full'
    href="https://github.com/hoofmonger">
      Github<FaGithub size={50}/> 
    </a>
  </li>
  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#707525]'>
    <a className='flex justify-between items-center w-full'
    href="https://drive.google.com/file/d/1xuKqkrkP0lworyFprc9FHr1dlbApcWx7/view?usp=drive_link">
      Resume<BsFillPersonLinesFill size={50}/> 
    </a>
  </li>
  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#420a73]'>
    <a className='flex justify-between items-center w-full'
    href="https://github.com/hoofmonger">
      Email<HiOutlineMail size={50}/> 
    </a>
  </li>
</ul>
    </div>
    
    
  )
}

export default Navbar