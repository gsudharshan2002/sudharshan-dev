import aboutPic from '../assets/about.jpg';
import {ABOUT_TEXT} from '../constants';
import { motion } from "motion/react";



const About = () => {

  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">About 
        <span className="text-neutral-500"> Me</span></h1>
        <div className="flex flex-wrap">
            <motion.div initial={{ opacity: 0, x:-100 }} animate={{ opacity: 1, x:0 }} transition={{duration:0.5, delay:1.5}}
              className="w-full lg:w-1/2 lg:p-8">
                <div className="flec items-center justify-center">
                    <img className='rounded-3xl' src={aboutPic} alt="picc" />
                </div>
            </motion.div>
            <div className='w-full lg:w-1/2 '>
                <motion.div 
                  initial={{ opacity: 0, x:100 }} animate={{ opacity: 1, x:0 }} transition={{duration:0.5, delay:1.5}}
                  style={{display:'inline'}}className='flex flex-warp justify-center lg:justify-start'>
                    <p className='py-8 text-justify '>{ABOUT_TEXT}</p><div onClick={()=>{window.location.href='./'}}className=" text-center w-[200px] px-6 py-3 bg-neutral-900 text-white font-semibold rounded-lg shadow-md cursor-pointer hover:bg-blue-600">
                        View Resume
                    </div>
                    
                </motion.div>
                    
            </div>
            
        </div>      
    </div>
  )
}

export default About
