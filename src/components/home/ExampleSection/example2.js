import React from 'react'
import screen2 from '../../../images/Examples/screen_2.svg';
import { ActiveBtn } from '../../ActiveButtonElement';
import { InactiveBtn } from '../../InactiveButtonElement';
import { ExampleContainer2, ContainerRight, ExampleWrapper, InfoWrapper, InfoHeading, InfoTitle, InfoSteps, StepsItem, InfoBtnContainer, ImageWrapper, ExampleImg } from './ExampleElements';
const ExampleSectionTwo = () => {
  return (
    <ExampleContainer2>
      <ContainerRight>
            <ExampleWrapper>
                <InfoWrapper>
                    <InfoHeading>Create & Share</InfoHeading>
                    <InfoTitle>Reach Your<br/>Audience <span>Directly.</span></InfoTitle>
                    <InfoSteps>
                        <StepsItem><span>1</span>Embed content or create something new to share.</StepsItem>
                        <StepsItem><span>2</span>Share content over email, text message or your homepage.</StepsItem>
                    </InfoSteps>
                    <InfoBtnContainer>
                        <ActiveBtn to='/signup'>Get Started Now</ActiveBtn>
                        <InactiveBtn>View A Demo</InactiveBtn>
                    </InfoBtnContainer>
                </InfoWrapper>
                <ImageWrapper>
                <ExampleImg src={screen2}/>
                </ImageWrapper>
            </ExampleWrapper>
      </ContainerRight>
    </ExampleContainer2>
  )
}

export default ExampleSectionTwo