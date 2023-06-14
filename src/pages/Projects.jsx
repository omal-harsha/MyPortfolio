import React from 'react'
import {ProjectData} from '../components/ProjectsData.js'
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination"
import 'swiper/css/navigation';
import { Pagination,Navigation } from 'swiper';


export const Projects = () => {
  return (
    <div className='bg-bgBlack  md:py-20 '>
      <div className='lg:px-40 md:px-20 sm:px-10'>
      <h1 className=' md:flex text-logoBlue text-4xl md:text-5xl font-kanit font-bold  md:ml-0'>My Projects</h1>
      <p className='font-openSans text-gray-400 text-xs pt-5 md:text-sm md:pt-20'>Here, you'll find a collection of my diverse and innovative projects. Each project showcases my skills and expertise in web development. 
You can explore the live demo of each project to experience its functionalities firsthand. Additionally, you'll have access to the source code on GitHub, 
allowing you to delve deeper into the project's implementation details.</p>
      </div>

    <div className='text-center  mt-20 flex justify-center items-center md:mx-10 lg:mx-20'>
    <Swiper
       //spaceBetween={}
      //slidesPerView={1}
      breakpoints={{
        // Set breakpoints for mobile and adjust slidesPerView accordingly
        0:{slidesPerView:1},
        800: { slidesPerView: 2 },
        1020:{slidesPerView: 3}
      }}
      pagination={{
        clickable: true,
      }}
      navigation
      modules={[Pagination,Navigation]}
    >
      {ProjectData.map((project,i) => (
        
        <SwiperSlide key={i} className='md:px-5  lg:ml-0 '>
          <div className='bg-gray-600 w-max  sm:px-6 md:px-0 lg:w-96  py-5 rounded-3xl mb-12 mx-auto  cursor-grab '>
            <h1 className='text-white -mt-3 py-1 font-kanit text-xl'>{project.title}</h1>
            <img src={project.cover} className='w-60 md:w-72 md:mx-5 lg:mx-auto lg:w-80 rounded-t-3xl '/>
            <div className='flex md:w-72 lg:w-80 mx-auto'>
              <a href={project.liveDemo} target='_blank' className='w-1/2 bg-logoBlue py-2 rounded-bl-3xl text-white flex  justify-center hover:scale-105 shadow-xl duration-300 font-kanit text-base md:text-xl'><button >Live Demo</button></a>
              <a href={project.sourceCode} target='_blank' className='w-1/2 bg-black rounded-br-3xl text-white  flex  justify-center hover:scale-105 shadow-xl duration-300 font-kanit text-base md:text-xl'><button>Source code</button></a>
            </div>
          </div>
        </SwiperSlide>
  
      ))}

    </Swiper>
    </div>

    </div>
  )
}
