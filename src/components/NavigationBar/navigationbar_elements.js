import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll'
export const Nav = styled.nav`
    // background: #000;
    // background-image: url("../images/media_logo_main.png");
    background: ${({scrollNav}) => (scrollNav ? 'red' : 'transparent')}
    // background: linear-gradient(to right, #000000 50%, #ff0042 50%);
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
    `;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
// max-width:  1100px;
`;

export const NavLogo = styled.img`
 color: #000;
 width: 120px;
 height: 80px;
 justify-self: flex-start;
 cursor: pointer;
 font-size: 1.5rem;
 display: flex;
 align-items: left;
 margin-left: 24px;
 margin-top: 5px;
 margin-right: 50px;
 `;


 export const MobileIcon = styled.div`
 display:none;
 
 @media screen and (max-width: 768px) {
     display: block;
     position: absolute;
     top: 0;
     right: 0;
     transform: translate(-100%, 60%);
     font-size: 1.8rem;
     cursor: pointer;
     color: #fff000;
 }
 `;

 export const NavMenu = styled.ul`
 display: flex;
 align-items: center;
 list-style: none;
 text-align: center;
 margin-right: 20px;
 
 @media screen and (max-width: 768px) {
     display: none;
 }`;

 export const NavItem = styled.li`
 height: 80px;
 `;

 //react scroll link
 export const NavLinks = styled(LinkS)`
 color: #fff;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding: 0 1rem;
 height: 100%;
 cursor: pointer;
 
  &.active {
      border-bottom: 3px solid #fff000;
  }
  `;

  export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 768px) {
      display: none;
  }`

  export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #fff000;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }`

