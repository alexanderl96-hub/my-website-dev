import React, { useState } from 'react'

import Gif from '../../Images/gif-1.gif'
import Alex from '../../Images/Alex.jpg'
// import Final from'../../Images/FinalLogo.png'

import {  MainContainer, MainBg, MainContent, MainH1, MainP, MainBtnWrapper} from './HomeElements'

const Main = ({ id }) => {
  const [first, setFirst] = useState(<img src={Alex} alt='me'  className='miImagen' />);
  // const [second, setSecond] = useState(<img src={Final} alt='me'  className='miImagen' />);

  //  useEffect(() => {
  //   setTimeout(() => {
  //     setSecond(first);
  //   }, 10000);
  //     setFirst(second)
   
  //  },[first, second])

  return (
    <MainContainer id='home'>
      <MainBg>
          <img src={Gif} alt='me' className='Imd'style={{width: '100%'}}/>
      </MainBg>
      <MainContent>
          {/* <img src={Alex} alt='me'  className='miImagen' /> */}
          {/* {first ? first: second} */}
          {first}
          <MainBtnWrapper>
              <MainH1>Full Stack Web Developer</MainH1>
              <MainP> A professional dancer and choreographer turned software engineer based in New York - specializing in building exceptional websites and applications to have a positive impact on the world using technology.</MainP>
          </MainBtnWrapper>
      </MainContent>
    </MainContainer>
  )
}

export default Main