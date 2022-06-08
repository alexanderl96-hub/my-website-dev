import React from 'react'
import video1 from '../../../Videos/TWin80Days1.gif'
import video2 from '../../../Videos/TWin80Days2.gif'
import { WellnessContainer, InfoContainer,VideoContainer,  WellDescription, Title2, InfoVideo, InfoVscode, Icon } from '../ProdutData/dataElement'

const Wellness = () => {
  return (
    <WellnessContainer > 
        <InfoContainer>
        <Icon to='/projectsmore' >Projects</Icon>
            <Title2> Wellness </Title2>
            <WellDescription>
              The purpose of this applicational website is to help reduce the stressors 
              of everyday work flow during remote work and to unblock the mind to prevent 
              or break mental blocks.
              The application is built using react and 3 part apis to create a chat bot 
              that is interactive with the user and can help the user navigate to a 
              desireable solution.
            </WellDescription>
        <VideoContainer>
          <InfoVideo src={video1} alt='vid' />
            <InfoVscode src={video2} alt='vid' />
          </VideoContainer>
        </InfoContainer>
    </WellnessContainer>
  )
}

export default Wellness