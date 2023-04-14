import styled from "styled-components";

export const StepOneContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:480px) {
        margin-top: 20px;
        margin-bottom: 40px;
    }
`

export const StepOneWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 342px;
    text-align: center;
    margin-top: 70px; 

    @media screen and (max-width:480px) {
        &.step2 {
            margin-top: 20px;
        }
    }
`
export const StepOne = styled.h2`
    color: #3D82F2; 
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px;

    @media screen and (max-width:480px) {
        font-size: 16px;
        margin-bottom: 10px;
    }
    @media screen and (max-width:768px) {
        font-size: 16px;
        margin-bottom: 10px;
    }
`
export const StepOneHeading = styled.h1`
    color: #fff;
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 15px;

    @media screen and (max-width:480px) {
        font-size: 30px;
    }
    @media screen and (max-width:768px) {
        font-size: 35px;
    }
`
export const StepOneInfo = styled.p`
    color: #707070;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 30px;
    max-width: 650px;

    &.step2 {
        max-width: 610px;
    }

    @media screen and (max-width:480px) {
        font-size: 14px;
        margin-bottom: 20px;
        text-align: center;
        max-width: 350px;
        
        &.step2 {
            max-width: 350px;
        }
    }

    @media screen and (max-width:768px) {
        font-size: 16px;
    }
`
export const StepOneBtn = styled.button`
    color: #707070;
    border: 1px solid #707070;
    white-space: nowrap;
    padding: 15px 25px;
    border-radius: 10px;

    &:hover {
        color: #fff;
        border-color: #fff;
        transition: all 0.5s ease-in-out;
    }

    @media screen and (max-width:480px) {
        font-size: 14px;
    }
`