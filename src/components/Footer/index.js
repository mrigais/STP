import React from 'react'
import {FaFaceboo, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
import LOGO from '../../images/media_logo_main.png'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink,
         SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, CompanyLogo} from './footer_elements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Spinning Top Media</FooterLinkTitle>
                            <FooterLink to = "/contact_us">Get In Touch</FooterLink>
                            <FooterLink to = "/contact_us">Get In Touch</FooterLink>
                            <FooterLink to = "/contact_us">Get In Touch</FooterLink>
                            <FooterLink to = "/contact_us">Get In Touch</FooterLink>
                            <FooterLink to = "/contact_us">Get In Touch</FooterLink>
                        
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to = "/contact_us">Get In Touch</FooterLink>
                            <FooterLink to = "/contact_us">Get In Touch</FooterLink>
                            <FooterLink to = "/contact_us">Get In Touch</FooterLink>
                            <FooterLink to = "/contact_us">Get In Touch</FooterLink>
                            <FooterLink to = "/contact_us">Get In Touch</FooterLink>
                        
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    {/* <CompanyLogo src={LOGO}></CompanyLogo> */}
                    <SocialLogo to="/">STP</SocialLogo>
                    <WebsiteRights>stp ® {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="https://www.instagram.com" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                        <SocialIconLink href="https://www.twitter.com" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                        <SocialIconLink href="https://www.linkedin.com" target="_blank" aria-label="Linkedin"><FaLinkedin/></SocialIconLink>

                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
