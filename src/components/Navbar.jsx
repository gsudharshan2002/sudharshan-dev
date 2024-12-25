import logo from '../assets/logo.png';
import { FaLinkedin } from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'


const Navbar = () => {
  return (
    <nav className=" mb-20  flex item-center justify-between py-1">
        <div className='flex flex-shrink-0 item-center  w-42 h-20   
 
          rounded-full  mx-2 pt-1'>
            <img src={logo} alt='LOGO ' style={{cursor:'pointer'}}onClick={()=>{window.location.href='/'}}/>
           


        </div> 
        <div className='m-8 flex item-center justify-center gap-4 text-2xl'>
            <FaGithub/>
            <FaLinkedin/>
            <FaSquareXTwitter/>
            <FaInstagram/>
           
        </div>
    </nav>
  )
}

export default Navbar
