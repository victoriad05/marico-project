import styled from "styled-components";

export const ExpertsContainer = styled.div`
    margin-top: 60px;
    padding: 0 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width:480px) {
        display: none;
    }
    @media screen and (max-width:768px) {
        display: none;
    }
`
export const ExpertsWrapper = styled.div`
    height: 560px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ExpertsTitle = styled.h1`
    text-align: center;
    font-weight: 600;
    font-size: 35px;
    margin-bottom: 30px;
`
export const ExpertsImg = styled.img`
    height: 100%;
    max-height: 380px;
    width: auto;
`
