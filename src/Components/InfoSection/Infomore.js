import React from 'react';
 import Resumen from '../PDF/Alexander(MyResume).pdf'
import { InfoMoreContainer, Icon, InfoMoreWrap, InfoMoreH1, InfoMoreText, InfoMoreP, InfoMoreH2 } from './InfoElements';

const InfoMore = () => {
  return (
    <InfoMoreContainer>
        <Icon to='/' >Alexander</Icon>
        <InfoMoreWrap>
           <InfoMoreH1><a id="info" href={Resumen}>Resume</a></InfoMoreH1>
                <InfoMoreText>   
                    <InfoMoreP> From dancing and creating art, to building applications and choreographing code; 
            I am a dancer turned software developer aspiring to have a positive impact on the world using 
            technology.</InfoMoreP>
                    <InfoMoreP>I recently joined the <a href="http://www.pursuit.org/">Pursuit</a> core program, which is an intensive <em>12 - month software engineering 
                fellowship</em>, with a 9 percent acceptance rate. As a creative and 
                diligent tech nerd I am a firm believer in the positive power of technology. My goal is 
                to build and create programs that bring people closer together.  As a former performing 
                artist, I am passionate about the <a href="http://www.pursuit.org/">arts</a>, music and <a href="https://youtu.be/rY_fkUZL2qI">dance</a>. The 
                Pursuit program has given me the chance to develop another creative outlet, and even 
                though I spend most of my time in front of the computer these days I still perform, play 
                drums and sing in my spare time.</InfoMoreP>
                    <InfoMoreP>My journey with Pursuit will end in a year from now, after which I hope to achieve 
                my goals and to be able to give more to my community – not just as a person but also as a
                 professional.</InfoMoreP>
                    <InfoMoreH2> Software Development skills:  • JavaScript  • Node.js • React  • Express  • Git/GitHub  • PostgreSQL •   </InfoMoreH2>
                </InfoMoreText>
        </InfoMoreWrap>
    </InfoMoreContainer>
  )
}

export default InfoMore