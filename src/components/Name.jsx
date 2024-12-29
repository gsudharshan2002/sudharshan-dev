
import {PROFILE_CONTENT} from '../constants';
import profilePic from "../assets/myProfilePic.png";
import { motion } from "motion/react";


const Name = () => {

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                      initial={{ opacity: 0, x:-100 }} animate={{ opacity: 1, x:0 }} transition={{duration:0.5, delay:1.5}}
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lgh:text-8xl">Sudharshan <span className= 'bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-6xl tracking-tight text-transparent font-bold'>G</span> </motion.h1>
                    <motion.spam initial={{ opacity: 0, x:-100 }} animate={{ opacity: 1, x:0 }} transition={{duration:0.5, delay:1.6}} className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Full Stack Developer</motion.spam>
                    <motion.p initial={{ opacity: 0, x:-100 }} animate={{ opacity: 1, x:0 }} transition={{duration:0.5, delay:1.7}} className="my-2 max-w-xl py-6 font-light tracking-tighter">{PROFILE_CONTENT}</motion.p>
                </div>
              </div>

              <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                  <motion.img initial={{ opacity: 0, x:100}} animate={{ opacity: 1, x:0 }} transition={{duration: 0.5, delay:1.4, }} className=' w-100 h-100 lg:h-[465px] rounded-custom lg:ml-16 ' src={profilePic} alt="proopic" />
                </div>
              </div>
            
            </div>

      
    </div>
  )
}

export default Name;
