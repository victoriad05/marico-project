import React from 'react'
import { LoginContainer,LoginWrapper,LoginTitle, LoginDesc,LoginAlternative, BtnWrapper, Btn, BtnImg,CreateAcc, LinkTo,FormInput} from '../login/LoginElements'
import apple from '../../images/Btn logos/Apple.svg'
import facebook from '../../images/Btn logos/Facebook.svg'
import google from '../../images/Btn logos/G_logo.svg'
import { SignupForm, Email, FormBtnSignup, Person, Eye, FormItem } from './SignupElements'

const Signup = () => {
  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginTitle>Sign up</LoginTitle>
        <LoginDesc>Fill all field for create an account.</LoginDesc>
        <SignupForm>
                <FormItem>
                    <FormInput type='text' placeholder='Username' required/>
                    <Person />
                    <FormInput type='email' placeholder='Email' required/>
                    <Email />
                </FormItem>
                <FormItem>
                    <FormInput className='signup' type='password' placeholder='Password' required/>
                    <Eye />
                    <FormBtnSignup type='submit'>Sign up</FormBtnSignup>
                </FormItem>
        </SignupForm>
        <LoginAlternative>Or<br/><span>Sign up with...</span></LoginAlternative>
        <BtnWrapper>
            <Btn><BtnImg src={apple} className='apple'/> Sign up with Apple</Btn>
            <Btn><BtnImg src={facebook}/> Sign up with Facebook</Btn>
            <Btn><BtnImg src={google}/> Sign up with Google</Btn>
        </BtnWrapper>
        <CreateAcc>Already have an account?<LinkTo to='/login'>Log in</LinkTo></CreateAcc>
      </LoginWrapper>
    </LoginContainer>
  )
}

export default Signup
