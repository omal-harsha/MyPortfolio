import React, { useState } from 'react'
import { motion } from 'framer-motion';
import {PopUp} from '../components/PopUp'


export const About = () => {

  const [openPop, setOpenPop] = useState(false);

  const handleDownload = () => {
    
  const fileUrl = process.env.REACT_APP_PREVIEW_CV;
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = 'omalharsha.pdf';
  link.click();
  };

  return (
    <div id='about' className='md:h-screen sm:pt-8 md:pt-0 flex lg:px-20 bg-bgBlack'>
      {openPop && <PopUp setOpenPop={setOpenPop} handleDownload={handleDownload}/>}
        <div className='md:mt-32 lg:mt-40 sm:px-8 md:pl-20 flex-1 md:flex-col md:space-y-8 text-left sm:text-xs md:text-sm'>
          <h1 className='hidden md:flex text-logoBlue text-5xl font-kanit font-bold '>About me</h1>

          {/* ------mobile view title ane photo----- */}
          <div className='flex md:hidden '>
              <h1 className=" text-end mt-16 rotate-180 text-6xl font-bold text-logoBlue font-kanit ont-bold"
              style={{ writingMode: 'vertical-rl' }}>

                    About me
              </h1>
              <img className='-ml-8' src='https://firebasestorage.googleapis.com/v0/b/blogsite-33dcd.appspot.com/o/myPhoto%2Fabout(mobile).png?alt=media&token=1e9fa9d5-7e26-42c7-bcf3-0725edf8c4d0'/>
          </div>

              {/* -------paragrph section---- */}
              <div className='sm:space-y-5 sm:-mt-20 '>
                    <p className='font-openSans text-gray-400 '>Hi there! I'm Omal Harsha Nuwan, a skilled full-stack developer from Dubai, UAE. 
          With a passion for technology and a hunger for learning, I thrive on challenges and adapt quickly to new technologies. 
          I bring over 3 years of quality assurance experience from a UK company.</p>
                    <p className='font-openSans text-gray-400 '>Education has been pivotal in my journey. I hold a Higher National Diploma in Information Technology from 
          Sri Lanka Institute of Advanced Technological Education, and a BEng (Hons) in Software Engineering from London Metropolitan University. 
          These qualifications provide a strong foundation for my work.</p>
                    <p className='font-openSans text-gray-400 '>Beyond coding, I find joy in travel, photo and video editing, and photography. 
          Exploring new destinations sparks my curiosity, while editing and photography unleash my creativity. 
          Through my portfolio website, I aim to showcase my technical expertise alongside my creative pursuits.</p>
              </div>
        
        {/* -------two buttons----- */}
        <div className='space-x-10 flex sm:justify-center md:justify-start sm:my-10'>
            <a href='#contact' className='bg-logoBlue px-5 md:px-10 py-2 font-oswald text-lg md:text-2xl text-white hover:scale-105 duration-300'>Hire me</a>
            <button onClick={()=> setOpenPop(!openPop)} className='bg-white px-5 md:px-10 py-2 font-oswald text-lg md:text-2xl text-logoBlue hover:scale-105 duration-300'>Resume</button>
          </div>
        
        </div>

        {/* --------desktop view photo------ */}
        <motion.div
        data-aos="slide-left"
        data-aos-delay="200"
  //       initial={{opacity:0}}
  // animate={{opacity:1}}
  // exit={{opacity:0}}
        >
          <img className='h-screen hidden md:flex' src='https://firebasestorage.googleapis.com/v0/b/blogsite-33dcd.appspot.com/o/myPhoto%2Fabout(web).png?alt=media&token=589a10c6-b806-4a54-a612-7e2f7da54fe1'/>
        </motion.div>
    </div>
  )
}
