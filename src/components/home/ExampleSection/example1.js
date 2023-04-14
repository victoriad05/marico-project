import React from 'react'
import screen1 from '../../../images/Examples/screen_1.svg';
import { ActiveBtn } from '../../ActiveButtonElement';
import { InactiveBtn } from '../../InactiveButtonElement';
import { ExampleContainer, ContainerRight, ExampleWrapper, InfoWrapper, InfoHeading, InfoTitle, InfoSteps, StepsItem, InfoBtnContainer, ImageWrapper, ExampleImg } from './ExampleElements';

const ExampleSectionOne = () => {
  return (
    <ExampleContainer>
      <ContainerRight>
        <ExampleWrapper>
          <InfoWrapper>
            <InfoHeading>Your Homepage</InfoHeading>
            <InfoTitle>Your Content.<br/>All in <span>One Spot</span></InfoTitle>
            <InfoSteps>
              <StepsItem><span>1</span>Bring all of your content together into one homepage.</StepsItem>
              <StepsItem><span>2</span>Your page automatically updates whenever you create.</StepsItem>
            </InfoSteps>
            <InfoBtnContainer>
              <ActiveBtn to='/signup'>Get Started Now</ActiveBtn>
              <InactiveBtn>View A Demo</InactiveBtn>
            </InfoBtnContainer>
          </InfoWrapper>
          <ImageWrapper>
            <ExampleImg src={screen1}/>
          </ImageWrapper>
        </ExampleWrapper>
      </ContainerRight>
    </ExampleContainer>
  )
}

export default ExampleSectionOne
