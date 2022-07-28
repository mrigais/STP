import React from 'react'
import { SidebarContainer, 
    Icon, 
    ClosedIcon, 
    SidebarWrapper, 
    SidebarMenu,
    SideBtnWrap, 
    SidebarLink, 
    SidebarRoute 
     } from './sidebar_elements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <ClosedIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="/home" onClick={toggle}>Home</SidebarLink>
                <SidebarLink to="/our-work" onClick={toggle}>Our Work</SidebarLink>
                <SidebarLink to="/about-us" onClick={toggle}>About Us</SidebarLink>
                <SidebarLink to="/get-in-touch" onClick={toggle}>Get In Touch</SidebarLink>
            </SidebarMenu>
            {/* <SideBtnWrap>
                <SidebarRoute to="/signin">Sign In</SidebarRoute>
            </SideBtnWrap> */}
        </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar
