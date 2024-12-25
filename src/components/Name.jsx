
import {PROFILE_CONTENT} from '../constants';
import profilePic from "../assets/myProfilePic.png";


const Name = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lgh:text-8xl">Sudharshan <span className= 'bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-6xl tracking-tight text-transparent font-bold'>G</span></h1>
                    <spam className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Full Stack Developer</spam>
                    <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{PROFILE_CONTENT}</p>
                </div>
              </div>

              <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                  <img className=' w-100 h-100 lg:h-[465px] rounded-custom lg:ml-16 ' src={profilePic} alt="proopic" />
                </div>
              </div>
            
            </div>

      
    </div>
  )
}

export default Name;
