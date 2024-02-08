import React from 'react'
import { ourTeams } from '../constants'

const Teams = () => {
  return (
    <div className='w-full'>
        <div className='text-center flex'>
            <h3 className='text-3xl mx-auto font-bold p-4'>Meet our great<br />Creative Teams</h3>
            <p className='max-w-[500px] mx-auto text-lg text-left'>Our journey began with a simple idea towards making this World more functionable. We collaborate with organizations that are keen to transform.</p>
        </div>
        <div className='lg:w-10/12 md:w-11/12 mx-auto w-full mt-6 flex  md:justify-between flex-wrap gap-4 px-4 lg:gap-8'>
            {ourTeams.map((team, index)=>(
                <div key={team.id} className='max-w-72 mx-auto'>
                    <img src={team.photo} className='py-4 max-w-72 mx-auto shadow' />
                    <h2 className='text-xl font-bold pb-2 '>{team.name}</h2>
                    <p className='text-slate-600 text-sm'>{team.disc}</p>
                </div>
            ))}
        </div>
       <div className='w-full flex justify-center my-12'>
       <button className='bg-[#5b977a] text-white px-5 py-2.5 my-4 rounded-sm self-center text-xl'>See more</button>
       </div>
    </div>
  )
}

export default Teams