import React, { useState } from 'react'
import { UilBars,UilMultiply } from '@iconscout/react-unicons'
import { MobleMenu } from './MobleMenu'

export const Navbar = () => {

  const [toggleMenu,setToggleMenu] = useState(false)

  const togleHandle = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <div>
      {toggleMenu && <MobleMenu togleHandle={togleHandle} />}
    <div className='flex justify-between px-8 md:px-20 lg:px-40 z-[999] bg-gray-500/5 py-6 items-center fixed  w-full  backdrop-filter backdrop-blur-md '>
        <div>
            <h1 className='text-2xl md:text-5xl font-bold text-logoBlue font-logoFont'>&lt;<span className='text-white'>omal</span>/&gt;</h1>
        </div>
        <div className='md:hidden  text-white duration-300' onClick={togleHandle}>
          {toggleMenu? (<UilMultiply/>) : (<UilBars/>)}
        </div>
        <div className='hidden md:flex space-x-16 font-menuFont text-white'>
          
          <a href='#home' className='border-b-2 border-transparent transition-all duration-300 hover:scale-105 hover:border-logoBlue hover:border-b-2 cursor-pointer'>Home</a>
          <a href='#about' className='border-b-2 border-transparent transition-all duration-500 hover:border-logoBlue hover:border-b-2 cursor-pointer'>About</a>
          <a href='#skills' className='border-b-2 border-transparent transition-all duration-500 hover:border-logoBlue hover:border-b-2 cursor-pointer'>Skills</a>
          <a href='#projects' className='border-b-2 border-transparent transition-all duration-500 hover:border-logoBlue hover:border-b-2 cursor-pointer'>Projects</a>
          <a href='#contact' className='border-b-2 border-transparent transition-all duration-500 hover:border-logoBlue hover:border-b-2 cursor-pointer'>Contact</a>
          
        </div>
    </div>
    </div>
  )
}
