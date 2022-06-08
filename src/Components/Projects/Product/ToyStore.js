import React from 'react'
import video1 from '../../../Videos/TWin80Days1.gif'
import video2 from '../../../Videos/TWin80Days2.gif'
import { ToyStoreContainer, InfoContainer,VideoContainer, ToyDescription, Title2, InfoVideo, InfoVscode, Icon } from '../ProdutData/dataElement'

const ToyStore = () => {
  return (
    <ToyStoreContainer > 
        <InfoContainer>
        <Icon to='/projectsmore' >Projects</Icon>
            <Title2> Toy Store </Title2>
            <ToyDescription>
              Small online store with the purpose of offering cartoons that 
              represent your favorite cartoons, heroes and actors.
            </ToyDescription>
        <VideoContainer>
          <InfoVideo src={video1} alt='vid' />
            <InfoVscode src={video2} alt='vid' />
          </VideoContainer>
        </InfoContainer>
    </ToyStoreContainer>
  )
}

export default ToyStore