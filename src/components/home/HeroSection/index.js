import React from 'react';
import { ActiveBtn } from '../../ActiveButtonElement';
import { InactiveBtn } from '../../InactiveButtonElement';
import { HeroContainer, HeroContent, HeroHeadings, Heading1, Heading2, HeroText, HeroBtnsConrainer, HeroSnap,DotIcon, SnapText } from './HeroElements';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
            <HeroHeadings>
                <Heading1>Own your audience.</Heading1>
                <Heading2>So you don't lose them.</Heading2>
            </HeroHeadings>
            <HeroText>Turn your audience into email and text message subscribers.</HeroText>
            <HeroBtnsConrainer>
                <ActiveBtn to='/signup'>Get Started Now</ActiveBtn>
                <InactiveBtn>View A Demo</InactiveBtn>
            </HeroBtnsConrainer>
            <HeroSnap>
                <DotIcon />
                <SnapText><strong>1000+</strong> creator have already started</SnapText>
            </HeroSnap>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
