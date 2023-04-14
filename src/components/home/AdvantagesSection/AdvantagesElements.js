import styled from "styled-components";

export const AvantagesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`
export const AdvantagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-items: center;
    height: 271px;

    @media screen and (max-width: 768px) {
       max-width: 700px;
    }
`
export const AndantagesTitle = styled.h1`
    font-size: 45px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 36px;

    @media screen and (max-width:480px) {
       font-size: 32px;
       text-align: center;
    }
    @media screen and (max-width:768px) {
       font-size: 35px;
       text-align: center;
    }
`
export const Advantages = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 80px;

    @media screen and (max-width:480px) {
       flex-direction: column;
       gap: 30px;
    }

    @media screen and (max-width: 768px) {
       gap: 30px;
    }
`
export const AdvantagesItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
`
export const TitleIcon = styled.img`
    height: 26px;
    width: auto;
`
export const TitleText = styled.h2`
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    text-align: center;

    @media screen and (max-width:480px) {
        font-size: 18px;
    }
    @media screen and (max-width:768px) {
        font-size: 18px;
    }
`
export const AdvantagesInfo = styled.p`
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    color: #707070;

    @media screen and (max-width:480px) {
        font-size: 14px;
    }
`
