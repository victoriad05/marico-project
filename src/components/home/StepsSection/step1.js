import React from 'react';
import { StepOneContainer, StepOneWrapper, StepOne, StepOneHeading, StepOneInfo, StepOneBtn } from './StepOneElements';

const StepOneSection = () => {
  return (
    <StepOneContainer>
      <StepOneWrapper>
        <StepOne>STEP 1</StepOne>
        <StepOneHeading>Connect Your Content</StepOneHeading>
        <StepOneInfo>Bring all of your content together and get a Homepage that automatically updates whenever you create anywhere online.</StepOneInfo>
        <StepOneBtn>View Avaliable Sources</StepOneBtn>
      </StepOneWrapper>
    </StepOneContainer>
  )
}

export default StepOneSection
