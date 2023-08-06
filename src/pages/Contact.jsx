import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from "react-hot-toast";


export const Contact = () => {

  //user data
  const [userData, setUserData] =  useState({
    from_name: '',
    user_email: '',
    message: ''
  })

  const [btntext,setBtnText] = useState("Send")

  //store input data
  const handleChnge = (e) => {
    e.preventDefault()

    setUserData((prev) => ({...prev , [e.target.name]: e.target.value}))

  } 

  //send button click function
  const handleClick = (e) => {
    e.preventDefault()
    setBtnText("Sending...")
    
  //email send
  emailjs.send(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID, userData, process.env.REACT_APP_PUBLIC_KEY)
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
       setUserData({
        from_name: '',
        user_email: '',
        message: ''
      });
       toast.success("Email send Successfully");
       setBtnText("Send")
    }, (err) => {
       console.log('FAILED...', err);
       toast.error(err.text);
    });

  }

  return (
    <div id='contact' className='bg-bgBlack flex lg:pl-40 md:justify-between md:pl-20 md:flex-row sm:flex-col-reverse sm:pb-10 md:pb-0 pt-10 md:pt-16 lg:pt-0'>
      <Toaster />
      <form className='flex flex-col space-y-3 md:space-y-5 sm:px-8 md:px-0 sm:-mt-20 md:mt-0 z-[500]'
      onSubmit={handleClick}
      >
          <h1 className=' md:flex text-white md:my-10 text-3xl md:text-5xl font-kanit font-bold md:ml-0'>Contact me</h1>
          <input onChange={handleChnge} value={useState.from_name} name="from_name" type='text' required className='w-full md:w-96 bg-transparent border border-gray-200 py-2 px-2 text-sm md:text-lg text-white font-sans focus:outline-none' placeholder='Name'/>
          <input onChange={handleChnge} value={useState.user_email} name="user_email" type='text' required className='w-full md:w-96 bg-transparent border border-gray-200 py-2 px-2 text-sm md:text-lg text-white font-sans focus:outline-none' placeholder='Email'/>
          <textarea onChange={handleChnge} value={useState.message} name="message" required className='w-full md:w-96 bg-transparent border border-gray-200 py-2 h-52 px-2 text-sm md:text-lg text-white font-sans focus:outline-none' placeholder='Message'/>
          <button className='text-white duration-300 bg-logoBlue px-10 py-1 w-max font-oswald text-2xl hover:scale-105 '>{btntext}
          
          </button>
      </form>
       <div>
        {/* web screen */}
        <div 
        data-aos="slide-left"
          data-aos-delay="200"
        >
          <img src='https://firebasestorage.googleapis.com/v0/b/blogsite-33dcd.appspot.com/o/myPhoto%2Fcontact(web).png?alt=media&token=ec6dcda3-1c73-4ad6-9517-990b9a65d11b' className='w-[800px] hidden md:flex'/>  
        </div>
      
        {/* mobile screen */}
        <div className='flex justify-end'>  
          <img src='https://firebasestorage.googleapis.com/v0/b/blogsite-33dcd.appspot.com/o/myPhoto%2Fcontact(mobile).png?alt=media&token=9b21f084-179b-4f73-bdda-2be69beaad90' className='md:hidden w-[300px] self-end '/>
        </div>
      </div>
    </div>
  )
}
