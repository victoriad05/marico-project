import styled from "styled-components";
import {RiArrowDropDownLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';
import { ReactComponent as logo } from '../../../images/logo.svg'

    export const Nav = styled.nav`
        display: flex;
        justify-content: center;
        /* position: sticky;
        top: 0;
        z-index: 10; */
    ` 

    export const NavbarContainer = styled.div`
        max-width: 1360px;
        width: 100%;
        padding: 0 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-top: 30px;
        height: 56px;
        position: relative;
    `

    export const NavLogo = styled(Link)`
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 12px;
        cursor: pointer;
    `

    export const Logo = styled(logo)`
       height: 30px;
       width: auto;
    `

    export const LogoName = styled.h1`
        font-size: 25px;
        font-weight: 800;
        color: #fff;
    `

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0px;
        right: 20px;
        transform: translate(-100%, 50%);
        font-size: 20px;
        cursor: pointer;
        color: #fff; 
    }

    @media screen and (max-width:480px) {
        transform: translate(-100%, 50%);
        top: 0px;
        right: 20px;
    }
`;

    export const NavMenu = styled.ul`
        display: flex;
        align-items: center;
        text-align: center;

        @media screen and (max-width: 768px) {
        display: none;
    }
    `

    export const NavItem = styled.li`
        height: 32px;
        color: #707070;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding-right: 38px;

        &:first-child {
        padding-right: 19px;
        }
    `
    export const NavItems = styled.li`
        height: 32px;
        color: #707070;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding-right: 38px;
    `

    export const NavLinks = styled(Link)`
       font-weight: 400;
       color: #707070;
       display: flex;
       align-items: center;
       justify-content: center;
       gap: 1px;

       &:hover{
        color: #3C82F4;
        transition: all 0.2s ease-in-out;
       }
    `

    export const NavBtn = styled.div`
        display: flex;
        flex-direction: row;
        gap: 24px;
        align-items: center;  
        
        @media screen and (max-width: 768px) {
            display: none;
        }
    `
    
    export const NavBtnLink = styled(Link)`
        background: #306EF7;
        color: #fff;
        padding: 12px 24px;
        border-radius: 10px;

        &:hover {
        background: #fff;
        color: #326CF9;
        transition: all 0.5s ease-in-out;
        }
    `

    export const Arrow = styled(RiArrowDropDownLine).attrs({ displayName: 'RiArrowDropDownLine' })`
       height: 2.2rem;
       width: 2.2rem;
       margin: 0;
    `;