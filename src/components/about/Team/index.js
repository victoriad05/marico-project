import React from 'react'
import avatar1 from '../../../images/Avatars/avatar-1.svg'
import avatar2 from '../../../images/Avatars/avatar-2.svg'
import avatar3 from '../../../images/Avatars/avatar-3.svg'
import { TeamContainer,TeamTitle,TeamWrapper, TeamHeading, MembersContainer, MembersItem,Image, Name,Role, Link, Arrow} from './TeamElements'

const OurTeam = () => {
  return (
    <TeamContainer>
      <TeamWrapper>
         <TeamHeading>OUR TEAM</TeamHeading>
         <TeamTitle>We love creators</TeamTitle>
         <MembersContainer>
            <MembersItem>
                <Image src={avatar1}/>
                <Name>Jacob Mark</Name>
                <Role>CEO & Design</Role>
                <Link>Twitter <Arrow /></Link>
            </MembersItem>
            <MembersItem>
                <Image src={avatar2}/>
                <Name>Daniel</Name>
                <Role>CTO & Development</Role>
                <Link>Twitter <Arrow /></Link>
            </MembersItem>
            <MembersItem>
                <Image src={avatar3}/>
                <Name>Ryan Trump</Name>
                <Role>COO & Sales</Role>
                <Link>Twitter <Arrow className='arrow'/></Link>
            </MembersItem>
         </MembersContainer>
      </TeamWrapper>
    </TeamContainer>
  )
}

export default OurTeam
