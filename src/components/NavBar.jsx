import React, {useState} from 'react'
import logo from "../assets/logo.png";
import {FaBeer, FaTimes} from "react-icons/fa"

function NavBar() {
    
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={logo} alt="myLogo" style={{width: '50px'}} />
        </div>
        
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Contac Us</li>
        </ul>
        

        /*Hamburger*/
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBeer /> : <FaTimes />}
        </div>

        /*Mobile menu*/
        <ul className={!nav ? 'hidden' :'absolute top-0 left-0 w-full h-screen bg-[#102d58] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Contac Us</li>
        </ul>
       
    </div>
  )
}

export default NavBar;