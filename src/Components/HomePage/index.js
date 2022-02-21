import React from 'react'
import Gif from '../../Images/gif-1.gif'
import Alex from '../../Images/Alex.jpg'
import {  MainContainer, MainBg, MainContent, MainH1, MainP, MainBtnWrapper} from './HomeElements'

const Main = ({ id }) => {
   
  return (
    <MainContainer id='home'>
      <MainBg>
          <img src={Gif} alt='me' className='Imd'style={{width: '100%'}}/>
      </MainBg>
      <MainContent>
          <img src={Alex} alt='me'  className='miImagen' />
          <MainBtnWrapper>
              <MainH1>Full Stack Web Developer</MainH1>
          <MainP> A professional dancer and choreographer turned software engineer based in New York - specializing in building exceptional websites and applications to have a positive impact on the world using technology.</MainP>
          </MainBtnWrapper>
      </MainContent>
    </MainContainer>
  )
}

export default Main