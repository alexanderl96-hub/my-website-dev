import React from 'react'
import video1 from '../../../Videos/Snowman.gif'
import video2 from '../../../Videos/Snowman2.gif'
import { SnowmanContainer, InfoContainer,VideoContainer, SnowDescription, Title, InfoVideo, InfoVscode, Icon2 } from '../ProdutData/dataElement'

const Snowman = () => {
  return (
    <SnowmanContainer > 
     <InfoContainer>
      <Icon2 to='/projectsmore' >Projects</Icon2>
        <Title> Snowman </Title>
        <SnowDescription>This is a word playing game where players challenge their 
            language and spelling development. The aim is to complete different 
            words. Players have to choose one letter at a time to form the word. 
            The player will have a limited number of attempts to discover the word. 
            You will not be able to repeat words, whether they are correct or 
            incorrect.</SnowDescription>
            <VideoContainer>
          <InfoVideo src={video1} alt='vid' />
            <InfoVscode src={video2} alt='vid' />
          </VideoContainer>
    </InfoContainer>
</SnowmanContainer>
  )
}

export default Snowman