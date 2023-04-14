import styled from "styled-components";
import { ReactComponent as logo } from '../../../images/logo.svg'
import { Link } from "react-router-dom";


export const GetStartedContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;

    @media screen and (max-width: 480px) {
        margin-top: 60px;
    }
`
export const GetStartedWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 140px 0;

    @media screen and (max-width:768px) {
       padding: 120px 0px;
    }
`
export const GetStartedLogo = styled(logo)`
    height: 50px;
    width: auto;
    margin-bottom: 20px;

    @media screen and (max-width: 480px) {
        height: 40px;
    }
`
export const GetStartedTitle = styled.h1`
   font-weight: 700;
   font-size: 35px;
   text-align: center;
   margin-bottom: 8px;

   @media screen and (max-width: 480px) {
       font-size: 25px;
    }
   @media screen and (max-width:768px) {
       font-size: 30px;
    }
`
export const GetStartedInfo = styled.p`
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;

    @media screen and (max-width:480px) {
       font-size: 16px;
    }
`
export const GetStartedBtn = styled(Link)`
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    padding: 15px 25px;
    background: #326cf9;
    color: #fff;
    border-radius: 10px;
    margin-bottom: 16px;

    &:hover {
        background: #fff;
        color: #326CF9;
        transition: all 0.5s ease-in-out;
    }

    @media screen and (max-width:480px) {
       font-size: 14px;
    }
`