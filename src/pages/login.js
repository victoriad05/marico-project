import React, {useState} from 'react'
import Navbar from '../components/home/Navbar'
import Login from '../components/login'
import Sidebar from '../components/home/SidebarMenu';

const LoginPage = () => {

  const [isOpen, setIsOpen] = useState(false);

  function toggle(){
        setIsOpen(!isOpen)
  }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Login />
    </>
  )
}

export default LoginPage