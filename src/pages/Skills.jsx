import React from 'react'
import {skillsData} from '../components/SkillsData.js'

export const Skills = () => {

  console.log(skillsData)

  return (
    <div className='bg-bgBlack px-4 md:px-20 lg:px-40 pt-10 lg:pt-20 pb-10 md:pb-20'>
      <div>
        <h1 className=' md:flex text-logoBlue text-4xl md:text-5xl font-kanit font-bold sm:ml-3 md:ml-0'>My Skills</h1>
      </div>

      {/* skill card */}
      <div className='mt-10 flex gap-3 md:gap-8 flex-wrap justify-around md:justify-center lg:pt-10'> 

              {skillsData.map((data,i) => (
            <div className='group cursor-pointer w-36  md:w-52 lg:w-60 mb-5 rounded-2xl flex flex-col items-center justify-center h-20 md:h-28 bg-gradient-to-b from-cardBottomBlack to-bgBlack border-gray-700 shadow-2xl' key={i}>
                <div className='text-center '>
                   <img src={data.logo} alt="" className='w-10 md:w-14 mx-auto group-hover:scale-125 duration-200  md:mt-0'/>
                  <h1 className='text-white sm:text-sm md:text-base'>{data.title}</h1>
                  <p className='text-gray-400 font-openSans text-xs '>{data.desc}</p>
                </div>
            </div>
              ))}

        
      </div>
      <div className='bg-gray-500 mx-auto mt-10 md:mt-20 h-[1px] md:h-[2px] rounded-full md:w-52 w-24 '></div>
    </div>
  )
}
