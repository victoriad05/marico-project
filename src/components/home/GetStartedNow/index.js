import React from 'react'
import { HeroSnap, DotIcon, SnapText } from '../HeroSection/HeroElements'
import { GetStartedContainer, GetStartedWrapper, GetStartedLogo, GetStartedTitle, GetStartedInfo, GetStartedBtn } from './GetStartedElements'

const GetStartedNow = () => {
  return (
    <GetStartedContainer>
      <GetStartedWrapper>
        <GetStartedLogo />
        <GetStartedTitle>Get Started Now</GetStartedTitle>
        <GetStartedInfo>Setup is easy and takes under 5 minutes.</GetStartedInfo>
        <GetStartedBtn to='/signup'>Get Started Now</GetStartedBtn>
        <HeroSnap>
            <DotIcon />
             <SnapText><strong>1000+</strong> creator have already started</SnapText>
        </HeroSnap>
      </GetStartedWrapper>
    </GetStartedContainer>
  )
}

export default GetStartedNow
