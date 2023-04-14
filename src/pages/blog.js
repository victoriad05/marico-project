import React, {useState} from 'react'
import Blog from '../components/blog'
import Footer from '../components/home/Footer'
import GetStartedNow from '../components/home/GetStartedNow'
import Navbar from '../components/home/Navbar'
import Sidebar from '../components/home/SidebarMenu'
import UsersStatistics from '../components/home/UsersStatistic'

const BlogPage = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  function toggle(){
        setIsOpen(!isOpen)
  }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Blog />
        <UsersStatistics />
        <GetStartedNow />
        <Footer />
    </>
  )
}

export default BlogPage
