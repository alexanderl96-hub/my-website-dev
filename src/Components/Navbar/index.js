import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll} from 'react-scroll'
import {  Nav, NavbarContainer, NavLogo , MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = ({ toggle }) => {
    const [ scrollNav, setScrollNav] = useState(false)
    const [ scrollNavBt, setScrollNavBt] = useState(false)
  const changeNave = () => {
    if(window.scrollY >= 80){
      setScrollNav(true);
      setScrollNavBt(true);
    } else {
      setScrollNav(false);
      setScrollNavBt(false);
    } 
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNave);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  }
  return (
    <>
     <IconContext.Provider value={{color: 'white'}}>
      <Nav scrollNav={scrollNav}>
          <NavbarContainer>
              <NavLogo to='/' onClick={toggleHome}>Alexander</NavLogo> 
              <MobileIcon onClick={toggle}>
                  <FaBars />
              </MobileIcon>
              <NavMenu>
                  <NavItem>
                    <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-60}  >About</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="skills" smooth={true} duration={500} spy={true} exact='true' offset={-60} >Skills</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-60} >Projects</NavLinks>
                  </NavItem>
              </NavMenu>
              <NavBtn>
                  <NavBtnLink to="/contact" scrollNavBt={scrollNavBt}>Contact me</NavBtnLink>
              </NavBtn>
          </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar