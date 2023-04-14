import styled from "styled-components";
import {HiOutlineArrowUpRight} from 'react-icons/hi2'

export const TeamContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;

    @media screen and (max-width: 480px) {
       margin-bottom: 100px;
    }
`
export const TeamWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-height: 400px;
    width: auto;

    @media screen and (max-width: 480px) {
        margin-top: 60px;
    }
`
export const TeamHeading = styled.h2`
    color: #326CF9;
    font-size: 18px;

    @media screen and (max-width:768px) {
        font-size: 16px;
    }
    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`
export const TeamTitle = styled.h1`
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 36px;

    @media screen and (max-width:768px) {
        font-size: 30px
    }    
    @media screen and (max-width: 480px) {
        font-size: 25px;
    }
`
export const MembersContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 80px;
    justify-content: center;
    align-items: center;
    margin-bottom: -10px;

    @media screen and (max-width:768px) {
        gap: 50px;
    }
    @media screen and (max-width: 480px) {
        flex-direction: column;
        gap: 30px;
    }
`
export const MembersItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 200;
    height: auto;
`
export const Image = styled.img`
    height: 75px;
    width: 75px;
    margin-bottom: 15px;

    @media screen and (max-width: 480px) {
        height: 60px;
    }
`
export const Name = styled.div`
    font-size: 18px;
    font-weight: 700;
    text-align: center;
`
export const Role = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: #707070;
    margin-bottom: 10px;
`
export const Link = styled.p`
   font-size: 16px;
   font-weight: 500;
   text-align: center;
   cursor: pointer;

   &:hover {
    color: #326CF9;
    transition: all 0.5s ease-in-out;
   }
`

export const Arrow = styled(HiOutlineArrowUpRight).attrs({ displayName: 'HiOutlineArrowUpRight' })`
    height: 16px;
    color: #326CF9;
    position: relative;
    bottom: -2.5px;

    
`