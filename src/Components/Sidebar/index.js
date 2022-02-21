import React from 'react'
import { SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarLink, SideBtnWrap, SidebarRoute, SidebarMenu } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
          <CloseIcon />
      </Icon>
      <SidebarWrapper>
          <SidebarMenu>
             <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
             <SidebarLink to='skills' onClick={toggle}>Skills</SidebarLink>
             <SidebarLink to='projects' onClick={toggle}>Projects</SidebarLink>
             {/* <SidebarLink to='contact' onClick={toggle}>Sign Up</SidebarLink> */}
          </SidebarMenu>
          <SideBtnWrap>
              <SidebarRoute to='/contact'>Contact me</SidebarRoute>
          </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar