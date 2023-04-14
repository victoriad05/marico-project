import styled from "styled-components";
import { ReactComponent as logo } from '../../../images/logo.svg'

export const MissionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;

    @media screen and (max-width: 480px) {
        margin-top: 60px;
    }
`
export const MissionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const LogoSection = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    margin-bottom: 35px;

    @media screen and (max-width:768px) {
        margin-bottom: 15px;
    }
    @media screen and (max-width: 480px) {
        margin-bottom: 12px;
    }
`
export const LogoImg = styled(logo)`
    height: 38px;
    width: auto;

    @media screen and (max-width:768px) {
        height: 30px;
    }
    @media screen and (max-width: 480px) {
        height: 26px;
    }
`

export const LogoText = styled.h1`
   font-size: 32px;
   font-weight: 800;

   @media screen and (max-width:768px) {
        font-size: 28px;
    }
   @media screen and (max-width:480px) {
        font-size: 25px;
    }
`
export const MissionHeading = styled.h2`
    font-size: 18px;
    color: #306EF7;
    font-weight: 600;
    margin-bottom: 10px;

    @media screen and (max-width:768px) {
        font-size: 16px;
    }
    @media screen and (max-width:480px) {
        font-size: 16px;
    }

`
export const MissionTitle = styled.h1`
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    line-height: 50px;
    
    @media screen and (max-width:768px) {
        font-size: 30px;
        line-height: 40px;
        margin-bottom: 10px;
    }
    
    @media screen and (max-width: 480px) {
        font-size: 25px;
        line-height: 40px;
    }
`
export const MissionInfo = styled.p`
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    max-width: 625px;

    @media screen and (max-width:768px) {
        font-size: 16px;
        margin-top: 10px;
        max-width: 540px;
    }
`
