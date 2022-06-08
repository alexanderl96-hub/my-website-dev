import styled from "styled-components";
import { Link } from 'react-router-dom'
import myI from '../../../Images/aeropuerto.jpeg'
import myB from '../../../Images/snowman_play.webp'
import myC from '../../../Images/wellness.jpeg'
import myD from '../../../Images/Icon4.jpeg'
import myE from '../../../Images/Icon6.jpg'
import myF from '../../../Images/png-1.png'

export const TravelContainer = styled.div`
 background-image: url(${myI});
 @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`
export const Icon = styled(Link)`
     margin-left: 12.4%;
     margin-top: 1.9%;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 22px;

    @media screen and (max-width: 480px){
      margin-left: 5%;
      margin-top: -20%;
      transition:  all 0.8s;
  };
 `
export const InfoContainer = styled.div`
 margin: auto;
 display: flex;
 flex-direction: column;
 justify-content: center;
  @media screen and (max-width:480px){
          
  }
`
export const Title = styled.h1`
margin-top: 30px;
color: black;
display: flex;
justify-content: center;
    @media screen and (max-width:480px){
        font-size: 20px;      
    }
`
export const Title2 = styled.h1`
margin-top: 30px;
color: #fff;
display: flex;
justify-content: center;

`
export const Description = styled.p`
display: flex;
flex-direction: row;
flex-wrap: break;
color: black;
justify-content: center;
text-align: center;
margin-left: 20%;
margin-right: 20%;
padding: 10px;
font-size: 18px;
@media screen and (max-width:480px){
  font-size: 18px;   
  margin: 20px;
  text-align: justify;   
}

`
export const VideoContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
@media screen and (max-width:480px){
  flex-direction: column;
}
`
export const InfoVideo = styled.img`
width: 40%;
height: 470px;
padding: 10px;
border-radius: 20px;
margin-bottom: 31.3px;
@media screen and (max-width:480px){
  width: 100%;
  height: 270px;
  margin-bottom: 19px;
}

`
export const InfoVscode = styled.img`
width: 40%;
height: 470px;
padding: 10px;
border-radius: 20px;
margin-bottom:  31.3px;
@media screen and (max-width:480px){
  width: 100%;
  height: 270px;
  
}
`
export const SnowmanContainer = styled.div`
 background-image: url(${myB});
 @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`
export const SnowDescription = styled.p`
display: flex;
flex-direction: row;
flex-wrap: break;
color: black;
justify-content: center;
text-align: center;
margin-left: 20%;
margin-right: 20%;
padding: 10px;
font-size: 18px;
  @media screen and (max-width:480px){
    font-size: 18px;   
    margin: 20px;
    text-align: justify;   
  }

`
export const CalculatorContainer = styled.div`
 background-image: url(${myE});
 @media screen and (max-width: 768px) {
    padding: 100px 0;
    margin:  0px;
  }
`
export const CalDescription = styled.p`
display: flex;
flex-direction: row;
flex-wrap: break;
color: #fff;
justify-content: center;
text-align: center;
margin-left: 20%;
margin-right: 20%;
padding: 21px;
font-size: 18px;
@media screen and (max-width:480px){
  font-size: 18px;   
  margin: 20px;
  text-align: justify;   
}

`
export const WellnessContainer = styled.div`
 background-image: url(${myC});
 @media screen and (max-width: 768px) {
    padding: 100px 0;
    margin:  0px;
  }
`
export const WellDescription = styled.p`
display: flex;
flex-direction: row;
flex-wrap: break;
color: #fff;
justify-content: center;
text-align: center;
margin-left: 20%;
margin-right: 20%;
padding: 21px;
font-size: 18px;
@media screen and (max-width:480px){
  font-size: 18px;   
  margin: 20px;
  text-align: justify;   
}

`
export const ToyStoreContainer = styled.div`
 background-image: url(${myD});
 @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`
export const ToyDescription = styled.p`
display: flex;
flex-direction: row;
flex-wrap: break;
color: #fff;
justify-content: center;
text-align: center;
margin-left: 20%;
margin-right: 20%;
padding: 32.3px;
font-size: 18px;
@media screen and (max-width:480px){
  font-size: 18px;   
  margin: 20px;
  text-align: justify;   
}

`
export const CodeClearContainer = styled.div`
 background-image: url(${myF});
 @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`
export const CodeDescription = styled.p`
display: flex;
flex-direction: row;
flex-wrap: break;
color: black;
justify-content: center;
text-align: center;
margin-left: 20%;
margin-right: 20%;
padding: 10px;
font-size: 18px;
@media screen and (max-width:480px){
  font-size: 18px;   
  margin: 20px;
  text-align: justify;   
}

`
export const Icon2 = styled(Link)`
     margin-left: 12.4%;
     margin-top: 1.9%;
    text-decoration: none;
    color: black;
    font-weight: 700;
    font-size: 22px;

    @media screen and (max-width: 480px){
        margin-left: 5%;
        margin-top: -20%;
        transition:  all 0.8s;
    };
 `