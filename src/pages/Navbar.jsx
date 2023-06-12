import React from 'react'
import { UilBars } from '@iconscout/react-unicons'

export const Navbar = () => {
  return (
    <div className='flex justify-between px-8 md:px-20 lg:px-40 bg-gray-500/5 py-5 items-center fixed w-full  backdrop-filter backdrop-blur-sm '>
        <div>
            <h1 className='text-4xl font-bold text-logoBlue font-logoFont'>&lt; <span className='text-white'>omal</span>/&gt;</h1>
        </div>
        <div className='md:hidden text-white'>
          <UilBars/>
        </div>
        <div className='hidden md:flex space-x-16 font-menuFont text-white'>
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Skills</h1>
          <h1>Projects</h1>
          <h1>Contact</h1>
        </div>
    </div>
  )
}
