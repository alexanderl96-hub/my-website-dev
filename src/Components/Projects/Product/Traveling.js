import React from 'react'
import video1 from '../../../Videos/TWin80Days1.gif'
import video2 from '../../../Videos/TWin80Days2.gif'
import { TravelContainer, InfoContainer, VideoContainer, Description, Title, InfoVideo, InfoVscode, Icon } from '../ProdutData/dataElement'

const Traveling = () => {
  return (

    <TravelContainer > 
        <InfoContainer>
        <Icon to='/projectsmore' >Projects</Icon>
            <Title> Traveling the world in 80 Days </Title>
            <Description>In this game you will have the opportunity to travel and learn more about 
        the culture and traditions of different countries. To achieve this, you 
        will have to make decisions and choose what things you want to know and 
        from where. Regardless of how much you learn from these countries, you 
        will earn points that you can accumulate to obtain a discount on the 
        tickets you can buy for other trips.</Description>
          <VideoContainer>
          <InfoVideo src={video1} alt='vid' />
            <InfoVscode src={video2} alt='vid' />
          </VideoContainer>
           
        </InfoContainer>
    </TravelContainer>
// 
   

  )
}

export default Traveling