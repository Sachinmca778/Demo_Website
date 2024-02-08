import React from 'react'
import { ourAchivements } from '../constants'
import two from '../assets/two.jpg'

const Achivements = () => {
  return (
    <div className='w-full text-center p-6'>
      <h1 className='mt-4 text-4xl font-bold'>We Connect your business with your target</h1>
      <div className='w-8/12 mx-auto my-6 font-semibold flex justify-between gap-4 md:gap-8 flex-wrap'>{ourAchivements.map((achivement, index) => (
        <div key={achivement.id} className='mx-auto'>
          <h3 className='text-xl sm:text-2xl md:text-3xl font-bold '>{achivement.metric}</h3>
          <h3>{achivement.title}</h3>
        </div>
      ))}</div>
      <img src={two} className='hidden sm:block w-full lg:w-10/12 py-4 mx-auto h-[85vh]' />
    </div>
  )
}

export default Achivements