import React from 'react'
import one from '../assets/one.jpg'
import Email from './Email'

const Hero = () => {
  return (
    <div className='w-full pt-6 pb-16 px-8 bg-[#636c79] text-white md:flex md:justify-around'>
        <img src={one} alt="" className='md:w-5/12 md:h-96'/>
        <div className='md:7/12 text-center'>
          <div className='max-w-[525px] mx-auto'>
            <h1 className='px-4 text-left text-4xl md:text-5xl py-6 font-bold md:max-w-lg'>
                Empowering your business with the best solution
             </h1>
            <p className='px-4 text-left sm:max-w-lg'>
                We connect your brand & businesses with your target market in the most desirable, refined, and elevated way possible through the digital medium
            </p>
            <Email/>
          </div>
        </div>
    </div>
  )
}

export default Hero