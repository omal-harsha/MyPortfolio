import React from 'react'

export const MobleMenu = ({togleHandle}) => {
  return (
    <div onClick={togleHandle}>
    <div className='z-[999] flex h-[500px] w-[300px] bg-gray-500/5 py-6 items-center fixed top-20 rounded-bl-2xl right-0 backdrop-filter backdrop-blur-md '>
        <div className='mx-auto text-white font-kanit text-4xl text-center font-bold space-y-5'>
          <a href='#home' onClick={togleHandle}>Home</a>
            <div className='bg-gray-400 mx-auto mt-10 md:mt-20 h-[1px] md:h-[2px] rounded-full md:w-52 w-24 '></div>
          <a href='#about' onClick={togleHandle}>About</a>
            <div className='bg-gray-400 mx-auto mt-10 md:mt-20 h-[1px] md:h-[2px] rounded-full md:w-52 w-24 '></div>
          <a href='#skills' onClick={togleHandle}>Skills</a>
            <div className='bg-gray-400 mx-auto mt-10 md:mt-20 h-[1px] md:h-[2px] rounded-full md:w-52 w-24 '></div>
          <a href='#projects' onClick={togleHandle}>Projects</a>
            <div className='bg-gray-400 mx-auto mt-10 md:mt-20 h-[1px] md:h-[2px] rounded-full md:w-52 w-24 '></div>
          <a href='#contact' onClick={togleHandle}>Contact</a>
        </div>
    </div>
    </div>
  )
}
