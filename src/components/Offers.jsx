import React from 'react'
import { ourOffers } from '../constants'
import TalkBtn from './TalkBtn'
import './Offers.css'

const Offers = () => {
  return (
    <div>
        <h2 className='text-3xl mt-6 text-center font-bold py-6'>
            We have made your care easy for you
        </h2>
        <div className='w-full md:w-11/12 mx-auto py-4'>
            {ourOffers.map((offer, index)=>(
                <div key={offer.id} className='flex flex-col md:flex-row justify-center items-center offerContainer md:py-10 p-6'>
                    <div className='px-6 text-justify md:text-left'>
                        <h3 className='lg:text-3xl text-2xl py-4 font-bold max-w-md'>{offer.heading}</h3>
                        <p className='max-w-md mb-4 py-4'>{offer.paragraph}</p>
                        <TalkBtn/>
                    </div>
                    <div className='hidden md:block md:w-1/2 sm:w-8/12 max-h-[800px] overflow-clip shadow'>
                        <img src={offer.image} className='p-5' />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Offers