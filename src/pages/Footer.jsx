import React from 'react'
import { UilEnvelope,UilPhone,UilInstagram ,UilFacebookF,UilTwitter,UilLinkedin,UilGithub,UilYoutube} from '@iconscout/react-unicons'

export const Footer = () => {
  return (
    <div className=' md:flex bg-logoBlue flex-col md:flex-row  md:justify-between py-4 md:py-8 lg:px-40 md:px-20'>
      <div className='space-y-2 text-white flex flex-col sm:items-center md:items-start sm:text-sm md:text-base'>
        <div className='flex space-x-2 '>
          <UilEnvelope/>
          <h1 className=''>omalharshanuwan@gmail.com</h1>
        </div>
        <div className='flex space-x-2'>
          <UilPhone/>
          <h1>+94 77 29 45 455</h1>
        </div>
      </div>
      <div className='flex mt-3 space-x-2 items-center text-white mb-5 md:mb-0 sm:justify-center md:justify-end'>
      <UilFacebookF className='text-[#ffffff] cursor-pointer'/>
                    <UilTwitter className='text-[#ffffff] cursor-pointer'/>
                    <UilInstagram className="cursor-pointer"/>
                    <UilLinkedin className='text-[#ffffff]'/>
                    <UilGithub className='text-[#ffffff] cursor-pointer'/>
                    <UilYoutube className='text-[#ffffff] cursor-pointer'/>
                  
      </div>
    </div>
  )
}
