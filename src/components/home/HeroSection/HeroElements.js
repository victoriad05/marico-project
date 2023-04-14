import styled from "styled-components";
import { ReactComponent as dot } from '../../../images/dot.svg';

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;

    @media screen and (max-width: 768px) {
        margin-top: 0;
    }
    @media screen and (max-width: 480px) {
        margin-top: 0;
    }
`

export const HeroContent = styled.div`
    height: 640px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

`

export const HeroHeadings = styled.div`
    color: #fff;
    margin-bottom: 40px;
`

export const Heading1 = styled.h1`
    font-size: 64px;
    font-weight: 700;
    margin-bottom: -20px;

    @media screen and (max-width:768px) {
        font-size: 40px;
    }

    @media screen and (max-width:480px) {
        font-size: 32px;
    }
`

export const Heading2 = styled.h1`
    font-size: 64px;
    font-weight: 800;
    background-image: linear-gradient(90deg, #FE6783 1.9%, #FFBF84 97.1%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;

    @media screen and (max-width:768px) {
        font-size: 40px;
    }

    @media screen and (max-width:480px) {
        font-size: 32px;
    }
`

export const HeroText = styled.p`
    font-size: 24px;
    font-weight: 500;
    max-width: 450px;
    color: #fff;
    margin-bottom: 60px;
    text-align: center;

    @media screen and (max-width:480px) {
        font-size: 18px;
    }
`

export const HeroBtnsConrainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 35px;
    gap: 26px;

    @media screen and (max-width:480px) {
        gap: 10px;
    }
`

export const HeroSnap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 9px;
`

export const DotIcon = styled(dot)`
     height: 28px;
     width: auto;

     @media screen and (max-width:480px) {
        height: 20px;
    }
`

export const SnapText = styled.p`
    color: #707070;
    font-size: 18px;
    font-weight: 400;

    & strong {
        color: #fff;
    }

    @media screen and (max-width:480px) {
        font-size: 16px;
    }
`
