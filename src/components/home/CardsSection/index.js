import React from 'react';
import mobile from '../../../images/mobile.svg'
import { ActiveBtn } from '../../ActiveButtonElement';
import { SectionContainer, CardsContainer, CardsWrapper, CardItem1, CardHeading, CardTitle, CardImage} from './CardsElements';

const Cards = () => {
  return (
    <SectionContainer>
        <CardsContainer>
            <CardsWrapper>
                <CardItem1>
                    <CardHeading>One Link</CardHeading>
                    <CardTitle>All You Create.<br/><span>One Link</span></CardTitle>
                    <CardImage src={mobile} />
                </CardItem1>
                <CardItem1>
                    <CardHeading>Collect Subscribers</CardHeading>
                    <CardTitle>Emails.<br/>Phone #s.<br/><span>All Yours.</span></CardTitle>
                </CardItem1>
            </CardsWrapper>
            <ActiveBtn to='/signup'>Get Started</ActiveBtn>
        </CardsContainer>
    </SectionContainer>
  )
}

export default Cards
