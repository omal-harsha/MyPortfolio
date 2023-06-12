import React from 'react'
import { UilBars } from '@iconscout/react-unicons'

export const Navbar = () => {
  return (
    <div className='flex justify-between px-8 md:px-20 lg:px-40 bg-gray-500/5 py-6 items-center fixed w-full  backdrop-filter backdrop-blur-md '>
        <div>
            <h1 className='text-2xl md:text-5xl font-bold text-logoBlue font-logoFont'>&lt;<span className='text-white'>omal</span>/&gt;</h1>
        </div>
        <div className='md:hidden  text-white'>
          <UilBars/>
        </div>
        <div className='hidden md:flex space-x-16 font-menuFont text-white'>
          
          <h1 className='border-b-2 border-transparent transition-all duration-300 hover:border-logoBlue hover:border-b-2 cursor-pointer'>Home</h1>
          <h1 className='border-b-2 border-bgBlack transition-all duration-300 hover:border-logoBlue hover:border-b-2 cursor-pointer'>About</h1>
          <h1 className='border-b-2 border-bgBlack transition-all duration-300 hover:border-logoBlue hover:border-b-2 cursor-pointer'>Skills</h1>
          <h1 className='border-b-2 border-bgBlack transition-all duration-300 hover:border-logoBlue hover:border-b-2 cursor-pointer'>Projects</h1>
          <h1 className='border-b-2 border-bgBlack transition-all duration-300 hover:border-logoBlue hover:border-b-2 cursor-pointer'>Contact</h1>
        </div>
    </div>
  )
}
