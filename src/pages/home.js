import React, {useState} from 'react'
import Navbar from '../components/home/Navbar';
import HeroSection from '../components/home/HeroSection';
import AdvantagesSection from '../components/home/AdvantagesSection';
import StepOneSection from '../components/home/StepsSection/step1';
import ExampleSectionOne from '../components/home/ExampleSection/example1';
import StepTwoSection from '../components/home/StepsSection/step2';
import StepThreeSection from '../components/home/StepsSection/step3';
import ExampleSectionTwo from '../components/home/ExampleSection/example2';
import Cards from '../components/home/CardsSection';
import ExpertsSection from '../components/home/ExpertsSection';
import UsersStatistics from '../components/home/UsersStatistic';
import GetStartedNow from '../components/home/GetStartedNow';
import Footer from '../components/home/Footer';
import Sidebar from '../components/home/SidebarMenu';


const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  function toggle(){
        setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <AdvantagesSection />
      <StepOneSection />
      <ExampleSectionOne />
      <StepTwoSection />
      <Cards />
      <StepThreeSection />
      <ExampleSectionTwo />
      <ExpertsSection />
      <UsersStatistics />
      <GetStartedNow />
      <Footer />
    </>
  )
}

export default Home
