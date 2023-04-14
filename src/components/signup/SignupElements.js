import styled from "styled-components";
import {MdAlternateEmail} from 'react-icons/md'
import {IoEyeOutline} from 'react-icons/io5'
import {IoPersonOutline} from 'react-icons/io5'

export const SignupForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
    gap: 50px;

    @media screen and (max-width: 768px) {
        margin-top: -20px;
    }
`

export const FormItem = styled.div`
    display: flex;
    flex-direction: row;
    gap: 100px;
    position: relative;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 50px;
    }
`

export const FormBtnSignup = styled.button`
    background: #326CF9;
    padding: 14px 25px;
    font-size: 16px;
    border-radius: 15px;
    width: 300px;
    margin-bottom: -14px;

    &:hover {
        background: #fff;
        color: #326CF9;
        transition: all 0.5s ease-in-out;
    }
`

 export const Email = styled(MdAlternateEmail).attrs({ displayName: 'MdAlternateEmail' })`
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

export const Person = styled(IoPersonOutline).attrs({ displayName: 'IoPersonOutline' })`
    height: 15px;
    width: 15px;
    color: #707070;
    position: absolute;
    left: 270px;
    top: 5px;
`
export const Eye = styled(IoEyeOutline).attrs({ displayName: 'IoEyeOutline' })`
    height: 16px;
    width: 16px;
    color: #707070;
    position: absolute;
    bottom: 15px;
    left: 270px;

    @media screen and (max-width: 768px) {
       bottom: 101px;
       height: 16px;
       width: 16px;
    }
`