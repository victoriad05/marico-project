import styled from "styled-components";

export const InactiveBtn = styled.button`
    width: 180px;
    padding: 15px 25px;
    font-size: 15px;
    font-weight: 500;
    border-radius: 10px;
    color: #707070;
    border: 1px solid #707070 ;
    text-align: center;

    &:hover {
        color: #fff;
        border-color: #fff;
        transition: all 0.5s ease-in-out;
    }

    @media screen and (max-width:480px) {
        width: 170px;
        font-size: 14px;
    }
`