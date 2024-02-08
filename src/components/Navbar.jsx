import React from 'react'
import logo from '../assets/logo.png'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <nav className={` py-4 px-8 lg:px-12 w-full  text-white flex justify-between bg-[#636c79]`}>
      <img src={logo} alt="" className='h-9'/>
      <div className='md:w-5/12 flex md:justify-between'>
        <ul className='md:w-4/6 hidden md:flex md:justify-between md:text-sm lg:text-base'>
          {navLinks.map((nav, index) => (
          <li key={nav.id} className=''>
              <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        </ul>
       <button className='border-2 py-1 px-4 rounded-md'>Let's Talk</button>
      </div>
    </nav>
    

  )
}

export default Navbar