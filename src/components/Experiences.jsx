import {Experience} from '../constants'

const Experiences = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">Experience</h1>
        <div>
            {Experience.map((E,index)=>(
                <div key={index}className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className='w-full lg:w-1/4'>
                        <p className='mb-2 text-sm text-neutral-400'>{E.year}</p>
                    </div>
                    <div className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>{E.role} - <span className='text-sm text-purple-100'>{E.company}</span></h6>
                        <p className='mb-4 text-neutral-400'>{E.description}</p>
                        {E.technologies.map((skill,index)=>(
                            <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2  text-sm font-medium text-purple-400'>{skill}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Experiences
