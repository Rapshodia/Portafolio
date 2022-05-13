import React, {useState} from 'react'
import logo from "../assets/logo.png";
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    
} from 'react-icons/fa';
  import { HiOutlineMail } from 'react-icons/hi';
  import { BsFillPersonLinesFill, BsWhatsapp } from 'react-icons/bs';
  import Logo from '../assets/logo.png';
  import { Link } from 'react-scroll';
  

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
        

        
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        
        <ul className={!nav ? 'hidden' :'absolute top-0 left-0 w-full h-screen bg-[#102d58] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Contac Us</li>
        </ul>

        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/jorge-fern%C3%A1ndez-30-desarrollo-backend/'>
                        Linkedin 
                        <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/Rapshodia'>
                         GitHub 
                        <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://api.whatsapp.com/send?phone=56984101236&text=Una%20manera%20directa%20de%20comunicarnos%20!'>
                         Watsapp 
                        <BsWhatsapp size={30} />
                    </a>
                </li>
            </ul>

        </div>
       
    </div>
  )
}

export default NavBar;