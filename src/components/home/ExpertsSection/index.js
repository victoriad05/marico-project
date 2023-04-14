import React from 'react';
import experts from '../../../images/experts.svg'
import { ExpertsContainer, ExpertsWrapper, ExpertsTitle, ExpertsImg } from './ExpertsElements';

const ExpertsSection = () => {
  return (
    <ExpertsContainer>
      <ExpertsWrapper>
        <ExpertsTitle>Experts Agree</ExpertsTitle>
        <ExpertsImg src={experts}/>
      </ExpertsWrapper>
    </ExpertsContainer>
  )
}

export default ExpertsSection
