import styled from "styled-components";
import {AiOutlineCheck} from 'react-icons/ai';

export const PricingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;

    @media screen and (max-width:768px) {
       margin-bottom: -40px;
       margin-top: 80px;
    }
`

export const PricingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const PricingTitle = styled.h1`
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 80px;

    @media screen and (max-width:768px) {
       font-size: 35px;
       margin-bottom: 50px;
    }

    @media screen and (max-width: 480px) {
       text-align: center;
       font-size: 30px;
    }
`
export const PricingCards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 40px;

    @media screen and (max-width:768px) {
       flex-direction: column;
       gap: 40px;
    }
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #707070;
    padding: 16px 16px;
    background: #131313;
    max-width: 330px;
    height: 510px;
    border-radius: 15px;

    &.blue{
       border: none;
       background: #3C82F4;
    }
`
export const CardInfo = styled.div`
    margin-bottom: 40px;
    padding: 0;
`
export const CardTitle = styled.h1`
    font-size: 25px;
    font-weight: 600;
    text-align: left;
`
export const CardP = styled.p`
    color: #B4B1B1;
    font-size: 16px;
    text-align: left;
    margin-bottom: 15px;

    &.blue{
        color: #fff;
    }
`
export const CardPrice1 = styled.h2`
   font-size: 30px;
   font-weight: 700;
   text-align: left;
   
   & span {
    margin-left: 4px;
    color: #B4B1B1;
    font-size: 15px;
   }

   & span.blue {
    color: #fff;
   }

   &.first_card{
    margin-bottom: 50px;
   }
`
export const CardPrice2 = styled.p`
    color: #B4B1B1;
    font-size: 15px;
    text-align: left;
    margin-bottom: 24px;

    &.blue{
        color: #fff;
    }
`
export const CardDesc = styled.p`
    font-size: 14px;
    font-weight: 700;
    text-align: left;
    margin-bottom: 20px;

    & span {
      font-size: 16px;
      font-weight: 400;
      text-align: left;
    }
`
export const CardAdditional = styled.p`
    margin-bottom: 25px;
    font-weight: 400;
    font-size: 14px;
    text-align: left;
    color: #B4B1B1;

    &.blue{
        color: #fff;
    }
`
export const FeaturesTitle = styled.p`
    text-align: left;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 15px;
`
export const FeaturesInfo = styled.p`
    margin-left: 1px;
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    margin-bottom: 8px;
`

export const CardBtn = styled.button`
    padding: 15px;
    border: 1px solid #4681E7;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    border-radius: 10px;

    &.blue {
        border: none;
        background: #fff;
        color: #3C82F4;
    }
`

export const Check = styled(AiOutlineCheck).attrs({ displayName: 'AiOutlineCheck' })`
    height: 14px;
    width: 14px;
`