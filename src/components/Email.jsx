import React from 'react'
import { useState } from 'react';
import TalkBtn from './TalkBtn';


const Email = () => {
        const [email, setEmail] = useState('');
      
        const handleEmailChange = (e) => {
          setEmail(e.target.value);
        };
  return (
    <div className='text-sm sm:text-base text-black my-6 mx-auto p-2 w-11/12 flex justify-between gap-1 bg-white rounded-md'>
        <input type="email" value={email} onChange={handleEmailChange} id="emailInput" placeholder='Enter your email address' className='w-4/6 focus:outline-none rounded-md px-3'/>
        <TalkBtn/>
    </div>
  )
}
export default Email