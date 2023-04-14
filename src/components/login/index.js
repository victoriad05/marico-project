import React from 'react'
import { LoginContainer, LoginWrapper, LoginTitle, LoginDesc, LoginForm, FormInputs, FormInput, FormBtn, LoginAlternative, BtnWrapper, Btn, BtnImg, CreateAcc, LinkTo, Person, Eye} from './LoginElements'
import apple from '../../images/Btn logos/Apple.svg'
import facebook from '../../images/Btn logos/Facebook.svg'
import google from '../../images/Btn logos/G_logo.svg'

const Login = () => {
  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginTitle>Log in</LoginTitle>
        <LoginDesc>Login into existing account.</LoginDesc>
        <LoginForm>
            <FormInputs>
                <FormInput type='email' placeholder='Username' required/>
                <Person />
                <FormInput type='password' placeholder='Password' required/>
                <Eye />
            </FormInputs>
            <FormBtn type='submit'>Log in</FormBtn>
        </LoginForm>
        <LoginAlternative>Or<br/><span>log in with...</span></LoginAlternative>
        <BtnWrapper>
            <Btn><BtnImg src={apple} className='apple'/> Log in with Apple</Btn>
            <Btn><BtnImg src={facebook}/> Log in with Facebook</Btn>
            <Btn><BtnImg src={google}/> Log in with Google</Btn>
        </BtnWrapper>
        <CreateAcc>Don't have an account?<LinkTo to='/signup'>Create one</LinkTo></CreateAcc>
      </LoginWrapper>
    </LoginContainer>
  )
}

export default Login
