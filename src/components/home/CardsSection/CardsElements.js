import styled from "styled-components";

export const SectionContainer = styled.div`
    /* margin-top: 20px; */
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1500px;
`;

export const CardsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    margin-bottom: 30px;

    @media screen and (max-width:480px) {
       flex-direction: column;
    }

    @media screen and (max-width: 768px){
        flex-direction: column;
        gap: 50px;
    }
`

export const CardItem1 = styled.div`
    height: 440px;
    width: 520px;
    padding-left: 45px;
    padding-top: 35px;
    background: #0D0D0D;
    position: relative;

    @media screen and (max-width:480px) {
       max-width: 380px;
       padding-left: 0;
    }

    @media screen and (max-width: 768px) {
       padding-left: 0;
    }
`;
 
export const CardHeading = styled.h2`
    font-size: 20px;
    color: #0FC65C;
    text-align: left;
    margin-bottom: 40px;

    @media screen and (max-width:480px) {
       text-align: center;
    }
    @media screen and (max-width: 768px) {
       text-align: center;
    }

`;

export const CardTitle = styled.h1`
    font-size: 35px;
    color: #919191;
    font-weight: 700;

    & span{
        color: #fff;
    }

    @media screen and (max-width:480px) {
       text-align: center;
    }

    @media screen and (max-width: 768px) {
       text-align: center;
    }
`;

export const CardImage = styled.img`
    padding-left: 25px;
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 500px;

    @media screen and (max-width:480px) {
        max-width: 370px;
    }
`;
