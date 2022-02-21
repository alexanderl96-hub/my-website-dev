import React, { useState } from 'react'
import SideBar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Main from '../Components/HomePage'
import InfoSection from '../Components/InfoSection'
import Footer from '../Components/Footer'
import { homeObjOne, homeObjTwo, homeObjThree } from '../Components/InfoSection/Data'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
    <SideBar  isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle} />
    <Main />
    <InfoSection  {...homeObjOne}/>
    <InfoSection  {...homeObjTwo}/>
    <InfoSection  {...homeObjThree}/>
    <Footer />  
    </>
  )
}

export default Home