import React, {useState} from 'react'
import Footer from '../components/home/Footer'
import GetStartedNow from '../components/home/GetStartedNow'
import Navbar from '../components/home/Navbar'
import Sidebar from '../components/home/SidebarMenu'
import Pricing from '../components/pricing'

const PricingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle(){
        setIsOpen(!isOpen)
  }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Pricing />
        <GetStartedNow />
        <Footer />
    </>
  )
}

export default PricingPage