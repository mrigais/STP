import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {MdKeyboardArrowRight} from 'react-icons/md'

export const Container = styled.div`
min-height: 692px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;

@keyframes color {
    // 0%   { background: #fff000; }
    // // 20%  { background: #ff0042; }
    // 40%  { background: #00aeff; }
    // 60%  { background: #000000; }
    // // 80%  { background: #747272; }
    // 100% { background: #8b63b0; }
};

background: black; /* Fallback */
// animation: color 3s infinite linear;
text-align: center;
padding: 2em;
`

export const FormWrap = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 400px) {
    height: 80%;
}
`

export const Logo = styled.img`
 color: #000;
width: 10%;
justify-content: center;

 justify-self: flex-start;
 cursor: pointer;
 font-size: 1.5rem;
 `;

export const Icon = styled(Link)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color: black;
font-weight: 600;
font-size: 32px;
margin-bottom: 20px;
// animation-name: spin;
// animation-duration: 5000ms;
// animation-iteration-count: infinite;
// animation-timing-function: linear; 
animation: rotation 3s infinite linear;

// @keyframes spin {
//     from {
//         transform:rotate(0deg);
//     }
//     to {
//         transform:rotate(360deg);
//     }
// }
@keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

@media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
}
`

export const FormContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 480px) {
    padding: 10px;
}
`
export const Form = styled.form`
background: #010101;
max-width: 600px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 80px 32px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0,0,0,0.9)

@media screen and (max-width: 400px) {
    padding: 32px 32px;
}
`

export const FormH1 = styled.h1`
margin-bottom: 40px;
color: #fff;
font-size: 20px;
font-weight: 400;
text-align: center;
`

export const FormLabel = styled.label`
margin-bottom: 8px;
font-size: 14px;
color: #fff;
`

export const FormInput = styled.input`
padding: 16px 16px;
margin-bottom: 32px;
border-radius: 5px
// border:2px solid #CC6666;
`

export const FormButton = styled.button`

width: 100%;
background: #0100;
padding: 16px 0;
border: none;
border-radius: 4px;
color: #fff;
font-size: 20px;
cursor: pointer;
justify-content: center;
`

export const Text =  styled.span`
text-align: center;
margin-top: 24px;
border-radius: 5px
border:2px solid #CC6666;
color: #fff;
font-size: 14px;
`

export const TextArea = styled.textarea `
height: 150px;
line-height: 150%;
resize:vertical;
font-weight:500;
font-size: 18px;
border-radius: 5px;
line-height: 22px;
// background-color: transparent;
// border:2px solid np;
transition: all 0.3s;
padding: 13px;
margin-bottom: 15px;
width:100%;
box-sizing: border-box;
`

