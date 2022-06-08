import React from 'react'
import video1 from '../../../Videos/TWin80Days1.gif'
import video2 from '../../../Videos/TWin80Days2.gif'
import { CalculatorContainer, CalDescription, InfoContainer,VideoContainer, Title2, InfoVideo, InfoVscode, Icon } from '../ProdutData/dataElement'

const Calculator = () => {
  return (
    <CalculatorContainer > 
     <InfoContainer>
       <Icon to='/projectsmore' >Projects</Icon>
          <Title2> Calculator </Title2>
            <CalDescription>
                A web application that is used to perform arithmetic calculations. Although modern 
                calculators are often built into a general-purpose computer, they are designed to 
                perform certain operations so that they are more flexible on both phone and tablet 
                computers.
            </CalDescription>
        <VideoContainer>
          <InfoVideo src={video1} alt='vid' />
            <InfoVscode src={video2} alt='vid' />
          </VideoContainer>
    </InfoContainer>
</CalculatorContainer>
  )
}

export default Calculator