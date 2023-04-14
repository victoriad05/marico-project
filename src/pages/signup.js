import React, {useState} from 'react'
import Navbar from '../components/home/Navbar'
import Sidebar from '../components/home/SidebarMenu'
import Signup from '../components/signup'

const SignUpPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle(){
        setIsOpen(!isOpen)
  }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Signup />
    </>
  )
}

export default SignUpPage
