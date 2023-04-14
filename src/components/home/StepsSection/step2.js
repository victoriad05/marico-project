import React from 'react';
import { StepOneContainer, StepOneWrapper, StepOne, StepOneHeading, StepOneInfo} from './StepOneElements';

const StepTwoSection = () => {
  return (
    <StepOneContainer>
      <StepOneWrapper className='step2'>
        <StepOne>STEP 2</StepOne>
        <StepOneHeading>Share Your Homepage</StepOneHeading>
        <StepOneInfo className='step2'>Share your Mariko homepage link with your followers, and we'll handle the rest.</StepOneInfo>
      </StepOneWrapper>
    </StepOneContainer>
  )
}

export default StepTwoSection