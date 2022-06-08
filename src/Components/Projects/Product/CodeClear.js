import React from 'react'
import video1 from '../../../Videos/TWin80Days1.gif'
import video2 from '../../../Videos/TWin80Days2.gif'
import { CodeClearContainer, InfoContainer,VideoContainer, CodeDescription, Title, InfoVideo, InfoVscode, Icon2 } from '../ProdutData/dataElement'

const CodeClear = () => {
  return (
    <CodeClearContainer > 
       
    <InfoContainer>
      <Icon2 to='/projectsmore' >Projects</Icon2>
        <Title> CodeClear </Title>
          <CodeDescription>
            A web application that allows the user to input their code into an online IDE, 
            and checks the quality of the code directly without requiring the user to install 
            extra software or steps to get the desired result. The app is essentially a code 
            quality analyzer. It will perform a qualitative analysis on the cognitive complexity 
            of the code, so that the user can write better quality code.
          </CodeDescription>
        <VideoContainer>
          <InfoVideo src={video1} alt='vid' />
            <InfoVscode src={video2} alt='vid' />
          </VideoContainer>
    </InfoContainer>
</CodeClearContainer>
  )
}

export default CodeClear