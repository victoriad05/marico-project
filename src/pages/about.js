import React, {useState} from 'react'
import Footer from '../components/home/Footer'
import GetStartedNow from '../components/home/GetStartedNow'
import Navbar from '../components/home/Navbar'
import InfoAbout from '../components/about/InfoAbout'
import OurMission from '../components/about/OurMission'
import OurTeam from '../components/about/Team'
import Sidebar from '../components/home/SidebarMenu'

const AboutUsPage = () => {

  const [isOpen, setIsOpen] = useState(false);

  function toggle(){
        setIsOpen(!isOpen)
  }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <OurMission />
        <InfoAbout />
        <OurTeam />
        <GetStartedNow />
        <Footer />
    </>
  )
}

export default AboutUsPage
