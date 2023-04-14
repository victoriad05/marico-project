import React from 'react'
import smileEmoji from '../../../images/Advantages/Smile_emoji.svg'
import happyEmoji from '../../../images/Advantages/Happy_emoji.svg'
import partyEmoji from '../../../images/Advantages/Party_emoji.svg'
import {AvantagesContainer, AdvantagesWrapper, AndantagesTitle, Advantages, AdvantagesItem, Title, TitleIcon, TitleText, AdvantagesInfo} from './AdvantagesElements'

const AdvantagesSection = () => {
  return (
    <AvantagesContainer>
      <AdvantagesWrapper>
        <AndantagesTitle>Why Creators Love Marico</AndantagesTitle>
        <Advantages>
            <AdvantagesItem>
                <Title>
                    <TitleIcon src={smileEmoji} />
                    <TitleText>Reduced Anxiety</TitleText>
                </Title>
                <AdvantagesInfo>Never worry about losing your audience.</AdvantagesInfo>
            </AdvantagesItem>
            <AdvantagesItem>
                <Title>
                    <TitleIcon src={happyEmoji} />
                    <TitleText>Lower Workload</TitleText>
                </Title>
                <AdvantagesInfo>Just share one link. We'll handle the rest.</AdvantagesInfo>
            </AdvantagesItem>
            <AdvantagesItem>
                <Title>
                    <TitleIcon src={partyEmoji} />
                    <TitleText>More Time</TitleText>
                </Title>
                <AdvantagesInfo>Spend less time on marketing tools.</AdvantagesInfo>
            </AdvantagesItem>
        </Advantages>
      </AdvantagesWrapper>
    </AvantagesContainer>
  )
}

export default AdvantagesSection;
