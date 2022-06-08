import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { animateScroll as scroll} from 'react-scroll'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLink, SocialMedia, SocialMediaWrap, SocialMediaLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
      }
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLink to='about' smooth={true} duration={500} spy={true} exact='true' offset={-60} >About</FooterLink>
                        <FooterLink to='skills' smooth={true} duration={500} spy={true} exact='true' offset={-60} >Skills</FooterLink>
                        <FooterLink to='projects' smooth={true} duration={500} spy={true} exact='true' offset={-60} >Projects</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialMediaLogo to='/' onClick={toggleHome}>Alexander</SocialMediaLogo>
                    <WebsiteRights> Alex/Developer {new Date().getFullYear()}</WebsiteRights>
                    <SocialIcons>
                       <SocialIconLink href='//www.github.com/alexanderl96-hub' target='_blank' arial-label='Github'><FaGithub /></SocialIconLink>
                       <SocialIconLink href='//www.linkedin.com/in/alexander-la-rosa-p%C3%A9rez-2b36a085/' target='_blank' arial-label='Linkedin'><FaLinkedin /></SocialIconLink>
                       <SocialIconLink href='//www.twitter.com/LperezAlexander' target='_blank' arial-label='Twitter'><FaTwitter /></SocialIconLink>
                       <SocialIconLink href='/' target='_blank' arial-label='Instagram'><FaInstagram /></SocialIconLink>
                    </SocialIcons>    
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer