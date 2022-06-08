import React from 'react'
import {Link} from 'react-router-dom'
// import { Icon } from '../InfoSection/InfoElements'
import  Icon1  from '../../Images/aeropuerto.jpeg'
import Icon2 from '../../Images/snowman_play.webp'
import Icon3 from '../../Images/wellness.jpeg'
import Icon4 from '../../Images/Icon4.jpeg'
import Icon5 from '../../Images/FinalLogo.png'
import Icon6 from '../../Images/Icon6.jpg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard,  ServicesIcon, ServicesH2, ServicesP, Icon} from './projectsElements'

const Projectmore = () => {
  return (
       <ServicesContainer id="service">
       <Icon to='/' >Alexander</Icon>
       <ServicesH1>My Projects</ServicesH1> 
       <ServicesWrapper>
           <ServicesCard>
               <ServicesIcon src={Icon1} />
               <Link to='/traveling' className='LinkT'>
               <ServicesH2 >Traveling the world in 80 Days</ServicesH2>
               </Link>
               <ServicesP> In this game you will have the opportunity to travel and learn more about 
        the culture and traditions ... </ServicesP>
           </ServicesCard>
           <ServicesCard>
               <ServicesIcon src={Icon2}/>
               <Link to='/snowman' className='LinkT' >
               <ServicesH2>Snowman</ServicesH2>
               </Link>
               <ServicesP>This is a word playing game where players challenge their 
            language and spelling development ...</ServicesP>
           </ServicesCard>
           <ServicesCard>
               <ServicesIcon src={Icon3} />
               <Link to='/wellness' className='LinkT'>
               <ServicesH2>Wellness</ServicesH2>
               </Link>
               <ServicesP> Application created to interact and release stress, when spending a lot of time at work ... </ServicesP>
           </ServicesCard>
           <ServicesCard>
               <ServicesIcon src={Icon4}/>
               <Link to='/toystore' className='LinkT'>
               <ServicesH2>Toy Store</ServicesH2>
               </Link>
               <ServicesP>Incredible online store that will offer you cards of your favorite heroes, and suggestions ...</ServicesP>
           </ServicesCard>
           <ServicesCard>
               <ServicesIcon src={Icon5} />
               <Link to='/codeclear' className='LinkT'>
               <ServicesH2>Code Clearly</ServicesH2>
               </Link>
               <ServicesP> A web application that allows the user to input their code into an online IDE, and checks the quality of the code directly ... </ServicesP>
           </ServicesCard>
           <ServicesCard>
               <ServicesIcon src={Icon6}/>
               <Link to='/calculator' className='LinkT'>
               <ServicesH2>Calculator</ServicesH2>
               </Link>
               <ServicesP>Simple calculator with some new technological advances, looking for a better performance for the user ...</ServicesP>
           </ServicesCard>   
       </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Projectmore