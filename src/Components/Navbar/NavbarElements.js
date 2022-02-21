import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => ( scrollNav ? '#000' : 'transparent' )};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (min-width: 960px) {
      transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1; 
    width: 100%;
    padding: 0 20px;
    max-width: 1100px; 
`
export const NavLogo = styled(LinkR)`
   color: #fff;
   justify-self: flex-start;
   cursor: pointer;
   font-size: 22px;
   display: flex;
   align-items: center;
   margin-left: 20px;
   font-weight: bold;
   text-decoration: none;
`

 export const MobileIcon = styled.div`
   display:none;

    @media screen and (max-width: 768px) {
        display: block;
        margin-top: 9px;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 23px;
        cursor: pointer;
        color: #fff;
    }
 `

 export const NavMenu = styled.ul`
   display: flex;
   align-items: center;
   list-style: none;
   text-align: center;
   margin-rigth: -20px;

   @media screen and (max-width: 768px) {
       display: none;
   }
 `

 export const NavItem = styled.li`
   height: 80px;
 `

 export const NavLinks = styled(LinkS)`
   color: #fff;
   display: flex;
   font-size: 16px;
   align-items: center;
   text-decoration: none;
   padding: 0 2.3rem;
   height: 100%;
   cursor: pointer;
   
   &.active {
       border-bottom: 3px solid #01bf71;
   }
 `

 export const NavBtn = styled.nav`
   display: flex;
   align-items: center;
    
   @media screen and (max-width: 768px) {
       display: none;
   }
 `
 export const NavBtnLink = styled(LinkR)`
     border-radius: 50px;
     background: ${({ scrollNavBt }) => ( scrollNavBt ? '#01bf71' : '#fff' )};
     white-space: nowrap;
     padding: 10px 22px;
     color: #010606;
     font-size: 15px;
     outline: none;
     border: none;
     cursor: pointer;
     transition:  all 0.2s ease-in-out;
     text-decoration: none;

     &:hover {
         transition:  all 0.2s ease-in-out;
         background: #01bf71;
         color: #010606;
     }
`