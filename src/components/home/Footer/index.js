import React from 'react'
import { NavLogo,Logo, LogoName, NavMenu, NavItems, NavLinks } from '../Navbar/NavbarElements'
import { FooterContainer, FooterNavbar, FooterLogo, NavEmail} from './FooterElements'
import { animateScroll as scroll} from 'react-scroll';

const Footer = () => {
    function toggleHome() {
        scroll.scrollToTop();
    }
  return (
    <FooterContainer>
      <FooterNavbar>
            <FooterLogo>
                <NavLogo to='/' onClick={toggleHome}>
                    <Logo />
                    <LogoName>Marico</LogoName>
                </NavLogo>
                <NavEmail>info@marico.co</NavEmail>
            </FooterLogo>
            <NavMenu>
                <NavItems>
                    <NavLinks to='/about'>About</NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks to='/pricing'>Pricing</NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks to='/blog'>Blog</NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks to='/signin'>Sign in</NavLinks>
                </NavItems>
            </NavMenu>
      </FooterNavbar>
    </FooterContainer>
  )
}

export default Footer
