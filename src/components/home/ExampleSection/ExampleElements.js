import styled from "styled-components";

export const ExampleContainer = styled.div`
    margin-top: 65px;
    padding-left: 90px;

    @media screen and (max-width: 480px) {
       padding-left: 0px;
    }
    @media screen and (max-width: 768px) {
       padding-left: 0px;
    }
`
export const ExampleContainer2 = styled.div`
    margin-top: 50px;
    padding-left: 90px;

    @media screen and (max-width:480px) {
       padding-left: 0px;
    }
    @media screen and (max-width: 768px) {
       padding-left: 0px;
    }
`
export const ContainerRight = styled.div`
    padding-left: calc( (100% - 1500px)/2 + 90px);

    @media screen and (max-width: 480px) {
       padding-left: 0px;
    }
    @media screen and (max-width: 768px) {
       padding-left: 0px;
    }
`
export const ExampleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 160px;

    @media screen and (max-width: 480px) {
        flex-direction: column;
        gap: 0;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0;
    }
`
export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    text-align: left;
    padding-top: 25px;
    width: 100%;
    max-width: 540px;

    @media screen and (max-width:480px) {
        max-width: 480px;
        width: 100%;
        text-align: center;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        text-align: center;
    }
`
export const InfoHeading = styled.h2`
    color: #fff;
    font-size: 25px;
    font-weight: 500;
    text-align: left;
    margin-bottom: 65px;

    @media screen and (max-width: 480px) {
        font-size: 20px;
        text-align: center;
        margin-bottom: 20px;
    }
    @media screen and (max-width: 768px) {
        text-align: center;
        margin-bottom: 20px;
    }
`
export const InfoTitle = styled.h1`
   color: #fff;
   font-size: 40px;
   font-weight: 600;
   margin-bottom: 27px;
   line-height: 50px;

   & span{
    color: #3C82F4;
   }

   @media screen and (max-width:480px) {
        font-size: 32px;
   }
`
export const InfoSteps = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 40px;

    @media screen and (max-width:480px) {
       justify-content: center;
       align-items: center;
       text-align: center;
    }
    @media screen and (max-width:768px) {
       justify-content: center;
       align-items: center;
       text-align: center;
    }
`
export const StepsItem = styled.p`
    font-size: 16px;
    color: #fff;
    font-weight: 400;
    margin-bottom: 16px;

    & span {
        display: inline-block;
        background-color: #707070;
        color: #fff;
        text-align: center;
        line-height: 20px; 
        width: 20px; 
        border-radius: 50%;
        margin-right: 8px;
    }

    @media screen and (max-width:480px) {
        max-width: 340px;
        font-size: 14px;
    }
`
export const InfoBtnContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 14px;

    @media screen and (max-width: 480px) {
       justify-content: center;
       align-items: center;
    }
    @media screen and (max-width: 768px) {
       justify-content: center;
       align-items: center;
    }
`
export const ImageWrapper = styled.div`
    position: relative;

    @media screen and (max-width: 480px) {
        display: none;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const ExampleImg = styled.img`
    max-height: 590px;
    width: auto;
`