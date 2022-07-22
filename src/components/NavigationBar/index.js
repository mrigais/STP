import React from 'react';
import {FaBars} from 'react-icons/fa'
// import {logo} from "./media_logo_main.png";
import LOGO from '../../images/media_logo_main.png'
import {Nav, 
    NavbarContainer, 
    NavLogo,
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavBtn, 
    NavBtnLink } from './navigationbar_elements';



const NavigationBar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo src={LOGO} to="/"></NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="home" onClick={toggle}>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="our-work" onClick={toggle}>Our Work</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/about" onClick={toggle}>About Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/contact_us" onClick={toggle}>Get In Touch</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin" onClick={toggle}>Sign In</NavBtnLink>
                    </NavBtn>
             </NavbarContainer>
        </Nav>
    </>
  );
};

export default NavigationBar
