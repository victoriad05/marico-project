import React from 'react'
import { Nav, NavbarContainer, NavLogo, Logo, Arrow, LogoName, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, MobileIcon } from './NavbarElements';
import {FaBars} from 'react-icons/fa';



const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <Logo />
                    <LogoName>Marico</LogoName>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks>Use Cases <Arrow /></NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/about'>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/pricing'>Pricing</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/blog'>Blog</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavLinks to='/login'>Login</NavLinks>
                    <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar
