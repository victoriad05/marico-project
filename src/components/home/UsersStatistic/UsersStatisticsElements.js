import styled from "styled-components";
import background from '../../../images/background.svg'


export const StatisticsContainer = styled.div`
    margin-top: 100px;
    height: 540px;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width:480px) {
      height: 460px;
      width: auto;
    }
    @media screen and (max-width:768px) {
      height: 460px;
      width: auto;
    }
`

export const StaticticsTitle = styled.h1`
    font-weight: 600;
    font-size: 35px;
    text-align: center;

    @media screen and (max-width:768px) {
       font-size: 30px;
    }
    @media screen and (max-width:480px) {
       font-size: 25px;
    }
`