import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ServicesContainer = styled.div`
   height: 1100px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background: #101522;

    @media screen and (max-width: 768px){
         height: 1100px;
   }
    @media screen and (max-width: 480px){
    height: 2300px;
}
`
export const Icon = styled(Link)`
    margin-left: -65%;
    margin-top: -15%;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 22px;


    @media screen and (max-width: 480px){
        margin-left:-50%;
        margin-top: 2%;
    };
 `
export const ServicesH1 = styled.h1`
   font-size: 2.5rem;
   color: #fff;
   margin-top: 15px;
   margin-bottom: 64px;

   @media screen and (max-width: 480px){
       font-size: 2rem;
   }
`
export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1100px){
      grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`
export const ServicesCard = styled.div`
   background: #fff;
   display: flex;
   flex-direction: column;
   justify-content: flex-start
   align-items: center;
   border-radius: 10px;
   max-height: 340px;
   padding: 30px;
   box-shadow: 0 1px 3px rgba(0,0,0,0.2);
   transition:  all 0.3s ease-in-out;
//    margin-bottom: 10px;

   &:hover {
       transform: scale(1.03);
       transition:  all 0.3s ease-in-out;
       cursor: pointer;
   }
   @media screen and (max-width:480px){
      
    }
`
export const ServicesIcon = styled.img`
  height: 160px;
  width: 230px;
  margin-bottom: 10px;
  border-radius: 5px;
  @media screen and (max-width:480px){
    margin-left: 17px;
  }
`
export const ServicesH2 = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 10px;

   &:hover{
      color: red;
   }
`
export const ServicesP = styled.p`
   font-size: 1rem;
   text-align: center;
`
