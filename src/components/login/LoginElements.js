import styled from "styled-components";
import { Link } from "react-router-dom";
import {IoEyeOutline} from 'react-icons/io5'
import {IoPersonOutline} from 'react-icons/io5'

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 60px;

    @media screen and (max-width: 768px) {
        margin-top: 40px;
        margin-bottom: 20px;
    }
`
export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const LoginTitle = styled.h1`
    font-size: 35px;
    font-weight: 600;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 28px;
    }
`
export const LoginDesc = styled.p`
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 80px;

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`
export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
`
export const FormInputs = styled.div`
    display: flex;
    flex-direction: row;
    gap: 120px;
    position: relative;
    margin-bottom: 60px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 50px;
    }
`
export const FormInput = styled.input`
    border-bottom: 1px solid #707070;
    padding-bottom: 10px;
    width: 300px;
    position: relative;
    display: flex;
    justify-content: center;
    
    
    &::placeholder {
        color:#fff;
        font-size: 16px;
        font-weight: 300;
        padding-left: 3px;
    }
`
export const FormBtn = styled.button`
    background: #326CF9;
    padding: 15px 25px;
    font-size: 16px;
    border-radius: 15px;
    max-width: 260px;
    width: 100%;

    &:hover {
        background: #fff;
        color: #326CF9;
        transition: all 0.5s ease-in-out;
    }
`
export const LoginAlternative = styled.p`
    font-size: 25px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 40px;

    & span {
        font-size: 14px;
        font-weight: 400;
        text-align: center;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 20px;
    }
`
export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    margin-bottom: 40px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
        margin-bottom: 20px;
    }
`
export const Btn = styled.button`
   text-align: center;
   font-size: 14px;
   font-weight: 400;
   padding: 14px 18px;
   border: 1px solid #fff;
   width: 280px;
   border-radius: 10px;
   display: flex;
   justify-content: center;
   align-items: center;

`
export const BtnImg = styled.img`
    height: 18px;
    width: 18px;
    margin-right: 10px;

    &.apple{
        margin-top: -2px;
    }
`
export const CreateAcc = styled.p`
    font-weight: 400;
    font-size: 14px;
    text-align: center;
`
export const LinkTo = styled(Link)`
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: #fff;
    margin-left: 5px;

    &:hover {
       color: #326CF9;
       transition: 0.2s ease-in-out;
    }
`

export const Person = styled(IoPersonOutline).attrs({ displayName: 'IoPersonOutline' })`
    height: 15px;
    width: 15px;
    color: #707070;
    position: absolute;
    left: 270px;
    top: 5px;
`
export const Eye = styled(IoEyeOutline).attrs({ displayName: 'IoEyeOutline' })`
    height: 15px;
    width: 15px;
    color: #707070;
    position: absolute;
    top: 5px;
    right: 15px;

    @media screen and (max-width: 768px) {
       top: 92px;
       height: 16px;
       width: 16px;
    }
`