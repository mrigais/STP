import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
// import {logo} from "./media_logo_main.png";
import LOGO from '../../images/media_logo_main.png'
import {animateScroll as scroll } from 'react-scroll'
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

    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = ()=>{
        if(window.scrollY >= 80) {
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', changeNav);
    }, [])

    const toggleTop = ()=>{
        scroll.scrollToTop()
    }
  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo src={LOGO} onClick={toggleTop} to="/"></NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="home" onClick={toggle} smooth={true} duration={500} spy={true} exact={true} offset={-80}>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="our-work" onClick={toggle} smooth={true} duration={500} spy={true} exact={true} offset={-80}>Our Work</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about-us" onClick={toggle} smooth={true} duration={500} spy={true} exact={true} offset={-80}>About Us</NavLinks>
                        </NavItem>
                        {/* <NavItem>
                            <NavLinks to= "/contact_us">Get In Touch</NavLinks>
                        </NavItem> */}
                    </NavMenu>
                    {/* <NavBtn>
                        <NavBtnLink to="/signin" onClick={toggle}>Sign In</NavBtnLink>
                    </NavBtn> */}
             </NavbarContainer>
        </Nav>
    </>
  );
};

export default NavigationBar
