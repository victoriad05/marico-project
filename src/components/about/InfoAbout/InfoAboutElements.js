import styled from "styled-components";

export const InfoAboutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;

    @media screen and (max-width: 768px) {
        margin-top: 40px;
    }
    @media screen and (max-width: 480px) {
        margin-top: 30px;
    }
`

export const InfoAboutWrapper = styled.div`
    max-width: 700px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #707070;
    padding-bottom: 35px;

    @media screen and (max-width:768px) {
        max-width: 640px;
    }
    @media screen and (max-width: 480px) {
        max-width: 350px;
    }
`
export const Text = styled.p`
    max-width: 620px;
    font-size: 16px;
    font-weight: 400;
    text-align: left;

    @media screen and (max-width:768px) {
        font-size: 14px;
        max-width: 580px;
    }

    @media screen and (max-width: 480px) {
        font-size: 14px;
        max-width: 320px;
    }
`