import React from 'react'
import { UilFacebookF,UilInstagram,UilTwitter,UilLinkedin,UilGithub,UilYoutube } from '@iconscout/react-unicons'

export const Home = () => {
  return (

    
    <div className='md:h-screen  bg-bgBlack'>
      <div className="md:flex">

        {/* my photo */}
          <img className='h-screen hidden md:flex' src='https://firebasestorage.googleapis.com/v0/b/blogsite-33dcd.appspot.com/o/images%2FhomeWeb.jpg?alt=media&token=001654a9-6683-409b-be59-481d04e2e753&_gl=1*7reky8*_ga*MTgyOTgzNTkwNi4xNjgzMTc2MTE3*_ga_CW55HF8NVT*MTY4NjU1MjIyMy4zNS4xLjE2ODY1NTIyNjEuMC4wLjA.'/>

          <img className=' md:hidden ' src='https://firebasestorage.googleapis.com/v0/b/blogsite-33dcd.appspot.com/o/images%2FhomeMobile.jpg?alt=media&token=114ec791-fbe2-4c05-a109-de99077b5f94&_gl=1*1fziybm*_ga*MTgyOTgzNTkwNi4xNjgzMTc2MTE3*_ga_CW55HF8NVT*MTY4NjU1ODI3Ni4zNi4xLjE2ODY1NTg2NjQuMC4wLjA.'/>
          
          {/* my name and intro */}
          <div className='pt-48 lg:pt-80 md:-ml-28 lg:-ml-64 space-y-3 md:space-y-5 flex flex-col items-start px-8 md:px-0 -mt-96 md:mt-0'>
                
              <div className='bg-white h-1 md:h-2 md:w-32 w-24 '></div>
              <p className=' text-white text-4xl font-dpTitle md:tracking-wider'>i'm omal, a <br/> <span className='text-logoBlue'>full-stack</span> developer</p>
              <p className='max-w-lg text-sm md:text-base text-gray-300'>I am a skilled full-stack web developer specializing in React and Node.js.
I am passionate about translating creative ideas into efficient 
and impactful web solutions.</p>
          
                {/* social media link */}
              <div className='flex flex-col items-center md:items-start mx-auto md:mx-0'>
                  <h1 className='font-poppins mt-5 md:mt-28 text-sm md:text-base lg:mt-52 text-gray-400 font-semibold'>FOLLOW ME</h1>
                  <div  className='flex mt-3 -ml-1 space-x-2 items-center text-white mb-5 md:mb-0'>
                    <UilFacebookF className='text-[#1877F2]'/>
                    <UilTwitter className='text-[#00AAEC]'/>
                    <div className='w-6'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="instagram"><linearGradient id="a" x1="1.464" x2="14.536" y1="14.536" y2="1.464" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFC107"></stop><stop offset=".507" stop-color="#F44336"></stop><stop offset=".99" stop-color="#9C27B0"></stop></linearGradient><path fill="url(#a)" d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"></path><linearGradient id="b" x1="5.172" x2="10.828" y1="10.828" y2="5.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFC107"></stop><stop offset=".507" stop-color="#F44336"></stop><stop offset=".99" stop-color="#9C27B0"></stop></linearGradient><path fill="url(#b)" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"></path><linearGradient id="c" x1="11.923" x2="12.677" y1="4.077" y2="3.323" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFC107"></stop><stop offset=".507" stop-color="#F44336"></stop><stop offset=".99" stop-color="#9C27B0"></stop></linearGradient><circle cx="12.3" cy="3.7" r=".533" fill="url(#c)"></circle></svg>
                    </div>
                    <UilLinkedin className='text-[#2A66BC]'/>
                    <UilGithub className='text-[#6563FF]'/>
                    <UilYoutube className='text-[#E02F2F]'/>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}
