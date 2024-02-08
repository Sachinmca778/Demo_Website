import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Achivements from './components/Achivements'
import Offers from './components/Offers'
import Teams from './components/Teams'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Achivements/>
      <Offers/>
      <Teams/>
      <Footer/>
    </>
  )
}

export default App
