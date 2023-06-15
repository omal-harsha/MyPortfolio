import React from 'react'

export const Contact = () => {
  return (
    <div className='bg-bgBlack flex lg:pl-40 md:justify-between md:pl-20 md:flex-row sm:flex-col-reverse sm:pb-10 md:pb-0'>
      <div className='flex flex-col space-y-3 md:space-y-5 sm:px-8 md:px-0 sm:-mt-20 md:mt-0'>
          <h1 className=' md:flex text-white md:my-10 text-3xl md:text-5xl font-kanit font-bold md:ml-0'>Contact me</h1>
          <input type='text' required className='w-full md:w-96 bg-transparent border border-gray-200 py-2 px-2 text-sm md:text-lg text-white font-sans focus:outline-none' placeholder='Name'/>
          <input type='text' required className='w-full md:w-96 bg-transparent border border-gray-200 py-2 px-2 text-sm md:text-lg text-white font-sans focus:outline-none' placeholder='Email'/>
          <textarea  required className='w-full md:w-96 bg-transparent border border-gray-200 py-2 h-52 px-2 text-sm md:text-lg text-white font-sans focus:outline-none' placeholder='Message'/>
          <button className='text-white bg-logoBlue px-10 py-1 w-max font-oswald text-2xl hover:scale-105 duration-300'>Send</button>
      </div>
      <div className='self-end'>
        <img src='https://firebasestorage.googleapis.com/v0/b/blogsite-33dcd.appspot.com/o/myPhoto%2Fcontact(web).png?alt=media&token=ec6dcda3-1c73-4ad6-9517-990b9a65d11b' className='w-[800px] hidden md:flex'/>
        <img src='https://firebasestorage.googleapis.com/v0/b/blogsite-33dcd.appspot.com/o/myPhoto%2Fcontact(mobile).png?alt=media&token=9b21f084-179b-4f73-bdda-2be69beaad90' className='md:hidden w-[300px] self-end '/>
      </div>
    </div>
  )
}
