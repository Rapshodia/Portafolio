import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Python from '../assets/python.png';
import Flask from '../assets/flask.png';
import MySql from '../assets/MYSQL.png';

import { data } from '../imgData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Skills = () => {

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 800;
      };
    
      const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 800;
      };

  return (
    <div name='skills' className='w-full h-max bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="JAVASCRIPT icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="REACT icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="GITHUB icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="NODEJS icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="MONGODB icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={AWS} alt="AWS icon" />
                  <p className='my-4'>AWS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Python} alt="PYTHON icon" />
                  <p className='my-4'>PYTHON</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Flask} alt="FLASK icon" />
                  
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto my-6' src={MySql} alt="MYSQL icon" />
                  
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="TAILWIND icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
          </div>

        <div className='relative flex items-center '>
            <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
            <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {data.map((item) => (
                    <img className='w-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' src={item.img} alt='/'/>))}
            </div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
        </div>
    </div>
</div>
  );
};

export default Skills;