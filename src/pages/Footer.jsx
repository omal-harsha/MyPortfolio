import React from 'react'
import { UilEnvelope,UilPhone,UilInstagram ,UilFacebookF,UilTwitter,UilLinkedin,UilGithub,UilYoutube,UilWhatsapp } from '@iconscout/react-unicons'

export const Footer = () => {
  return (
    <div className=' md:flex bg-logoBlue flex-col md:flex-row  md:justify-between py-4 md:py-8 lg:px-40 md:px-20'>
      <div className='space-y-2 text-white flex flex-col sm:items-center md:items-start sm:text-sm md:text-base'>
        <div className='flex space-x-2 '>
          <UilEnvelope/>
          <a href="https://mail.google.com/mail/?view=cm&to=omalharshanuwan@gmail.com" className='cursor-pointer' target='_blank'>omalharshanuwan@gmail.com</a>
        </div>
        <div className='flex space-x-2 cursor-pointer'>
          <UilWhatsapp/>
          <a href="https://wa.me/971525038774" target='_blank'>+971  52 503 8774</a>
        </div>
      </div>
      <div className='flex mt-3 space-x-2 items-center text-white mb-5 md:mb-0 sm:justify-center md:justify-end'>
      <a href='https://www.facebook.com/omal.harsha?mibextid=ZbWKwL' target='_blank'><UilFacebookF className='text-[#ffffff] cursor-pointer'/></a>
      <a href="https://twitter.com/HarshaOmal?t=UAGoaWXcZ4qo5fIyuufhTw&s=08" target='_blank'><UilTwitter className='text-[#ffffff] cursor-pointer'/></a>
      <a href="https://instagram.com/omal_harsh?igshid=MzNlNGNkZWQ4Mg==" target='_blank'><UilInstagram className="cursor-pointer"/></a>
      <a href="https://www.linkedin.com/in/omal-harsha-a53030165" target='_blank'><UilLinkedin className='text-[#ffffff]'/></a>
      <a href="https://github.com/omal-harsha" target='_blank'><UilGithub className='text-[#ffffff] cursor-pointer'/></a>
      <a href="https://www.youtube.com/@omal" target='_blank'><UilYoutube className='text-[#ffffff] cursor-pointer'/></a>
                  
      </div>
    </div>
  )
}
