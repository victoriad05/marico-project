import React from 'react'
import { MissionContainer, MissionWrapper, LogoSection, LogoImg, LogoText, MissionHeading, MissionTitle, MissionInfo } from './OurMissionElements'

const OurMission = () => {
  return (
    <MissionContainer>
      <MissionWrapper>
            <LogoSection>
                <LogoImg />
                <LogoText>Marico</LogoText>
            </LogoSection>
            <MissionHeading>OUR MISSION</MissionHeading>
            <MissionTitle>We exist to help creators<br/> own their audience.</MissionTitle>
            <MissionInfo>We believe that social platforms are taking advantage of creators. We want to change that and help creators fight back.</MissionInfo>
      </MissionWrapper>
    </MissionContainer>
  )
}

export default OurMission
