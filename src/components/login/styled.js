import styled, { css } from "styled-components";
import { breakpoint, typography } from "../../theme/theme";

export const Container = styled.div`

  @media (min-width: ${breakpoint.md}) {
    margin: auto;
    padding: 50px 30px;
   }
   @media (min-width: ${breakpoint.lg}) {
    max-width: 1204px;
    margin: auto;
    
    padding: 100px 30px;
   }
   padding: 30px 10px;
   position: relative;
`

export const LoginContainer = styled.div`

display: flex;
justify-content: center;
align-items: flex-start;
gap: 32px;
align-self: stretch;
`

export const LoginForm = styled.div`

display: flex;
justify-content: center;
align-items: flex-start;
gap: 32px;
align-self: stretch;
`

export const LoginTitleDiv = styled.div`

display: flex;
justify-content: space-between;


color: #18191B;
`


export const RegisterLabel = styled.span`
color: var(--primary, #E71561);
font-family: DM Sans;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 22px; /* 122.222% */
`

export const FormContainer = styled.span`
display: flex;
width: 586px;
flex-direction: column;
align-items: center;
gap: 32px;
@media (max-width: ${breakpoint.sm}) {
    width: 350px;
   }
`
export const GrayArea = styled.span`
display: flex;
padding: 32px 0px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 32px;
align-self: stretch;
border-radius: 24px;
background: var(--gray-100, #F3F4F6);
`
export const Form378 = styled.span`
display: flex;
width: 378px;
flex-direction: column;

gap: 32px;
@media (max-width: ${breakpoint.sm}) {
    width: 320px;
   }

`

export const Form = styled.span`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px;
align-self: stretch;
`

export const InputDiv = styled.span`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 12px;
align-self: stretch;
`
export const InputWithLabel = styled.span`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 4px;
align-self: stretch;

`
export const PasswordDiv = styled.div`
display: flex;
height: 42px;
padding: 9px 13px;
align-items: center;
align-self: stretch;
border-radius: 6px;
border: 1px solid var(--gray-300, #D1D5DB);
background: var(--white, #FFF);

/* shadow/sm */
box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
`

export const InputLabel = styled.span`
color: var(--gray-700, #374151);

/* desktop/label */
font-family: ${typography.label.font};
  font-weight: ${typography.label.fontWeight};
  font-size: ${typography.label.size};
line-height: 14px; /* 114.286% */
padding:5px
`
export const InputField = styled.input`
display: flex;
height: 2em;
padding: 9px 13px;
font-family: ${typography.xs.font};
font-weight: ${typography.xs.fontWeight};
font-size: ${typography.xs.size};
justify-content: flex-end;
align-items: center;
align-self: stretch;
border-radius: 6px;
border: 1px solid var(--gray-300, #D1D5DB);
background: var(--white, #FFF);

/* shadow/sm */
box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
&:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
`
export const EmailField = styled.input`
display: flex;
height: 2em;
padding: 9px 13px;
justify-content: flex-end;
align-items: center;
align-self: stretch;
border-radius: 6px;
border: 1px solid var(--gray-300, #D1D5DB);
background: var(--white, #FFF);

/* shadow/sm */
box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);

`
export const CustomSVG = styled.img`
width: 20px;
height: 20px;
`


export const Wrapper = styled.div`
 width: 100%;
 height: 100%;
 background-color: ${(props) => props.bgcolor};
`

export const MainContainer = styled.div`
  @media (min-width: ${breakpoint.md}) {
    margin: auto;
    padding: 30px 30px;
   }
   @media (min-width: ${breakpoint.lg}) {
    max-width: 1204px;
    margin: auto;
    
    padding: 100px 30px;
   }
   padding: 30px 10px;
   position: relative;
`




export const SubForm = styled.div`
 display: flex;
 flex-direction: column;
 gap: 15px;
 justify-content: center;
 padding: 10px;
 @media(min-width: ${breakpoint.md}){
  padding: 20px;
 }
 @media(min-width: ${breakpoint.lg}){
  padding: 30px;
 }

`

export const TextBox = styled.div`
    width: ${props => props.width};
    max-width: 100%;
    height: ${props => props.height};
    border: 1px solid ${(props) => props.bordercolor || '#405A94'};
    background-color: ${(props) => props.bgcolor || '#1E2A45'};
    border-top: ${props => props.bordertop};
    border-left: ${props => props.borderleft};
    border-right: ${props => props.borderright};
    border-bottom: ${props => props.borderbottom};
    padding: 20px 30px 20px 30px;
    white-space: pre-line;
    word-wrap: break-word;
    border-radius: ${props => props.borderradius};
    overflow: scroll;
    color: ${(props) => props.color || 'white'};
    font-size: 18px;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
    &::-webkit-scrollbar {
        width: 10px;
        
    }
    &::-webkit-scrollbar-track {
    background: transparent;
    margin-top: 10px;
    margin-bottom: 30px;
    }
    &::-webkit-scrollbar-button {
        display: none;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #9CA3AF;
        border-radius: 10px;
        border: 8px solid #1E2A45;
    }
    
`

export const Title = styled.span`
    color: ${props => props.color || "white"};
    font-family: ${typography.h4.font};
    font-size: ${typography.h4.size};
    font-weight: ${typography.h4.fontWeight};
    @media (min-width: ${breakpoint.md}) {
        font-size: ${typography.h4.size};
    };
    @media (min-width: ${breakpoint.lg}) {
        font-size: ${typography.h4.size};
    };
`
export const SmallTitle = styled.span`
    display: flex;
    align-items: center;
    color: ${props => props.color || "white"};
    font-size: ${typography.h5.size};
    font-family: ${typography.h3.font};
    font-weight: ${typography.h3.fontWeight};
    @media (min-width: ${breakpoint.md}) {
        font-size: ${typography.h4.size};
    };
    @media (min-width: ${breakpoint.lg}) {
     font-size: ${typography.h3.size};
    };
`
export const FormTitle = styled.div`
    content: attr(content);
    color: ${props => props.color};
    font-size: ${props => props.fontsizes};
    font-weight: ${props => props.fontweights};
    align-self: center;
    padding: ${props => props.padding || '0px'};
    font-family: ${props => props.font};
`


export const EmailInputContainer = styled.div`

 display: flex;
 margin: 10px;
 justify-content: center;
 background: ${props => props.bgcolor};
 @media(min-width: ${breakpoint.lg}){
  width: 50%;
  
  justify-content: flex-end;
 }
`

export const EmailLeftContainer = styled.div`
     display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${(props) => props.gap || '10px'};
    padding: 10px;
    @media(min-width: ${breakpoint.md}){
     padding: 20px;
    }
    @media(min-width: ${breakpoint.lg}){
     padding-inline: 10%;
    }
`

export const DContainer = styled.div`
    width: ${props => props.width};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    display: ${props => props.display || "block"};
    justify-content: ${props => props.justifycontent};
    align-items: ${props => props.alignitems};
    flex-direction: ${props => props.flexdirection};
    flex-wrap: ${props => props.flexWrap};
    align-content: ${props => props.aligncontent};
    gap: ${props => props.gap};
    position: ${props => props.position};
`

export const Label = styled.span`
    font-size: ${typography.label.size};
    font-weight: ${typography.label.fontWeight};
    color: ${(props) => props.color || 'black'};
`
export const Text = styled.span`
    font-size: ${typography.xs.size};
    font-weight: ${typography.xs.fontWeight};
    color: ${(props) => props.color || 'gray'};
`

export const Terms = styled.span`
    font-size: ${typography.label.size};
    font-weight: ${typography.label.fontWeight};
    color: ${(props) => props.color || 'black'};
    text-decoration: underline;
`
export const TermsLink = styled.span`
    font-size: ${typography.label.size};
    font-weight: ${typography.label.fontWeight};
    color: ${(props) => props.color || 'black'};
    text-decoration: underline;
`
export const Required = styled.span`
    font-size: ${typography.label.size};
    font-weight: ${typography.label.fontWeight};
    color: #FF0000;
`
export const EmailInput = styled.input`
    height: 42px;
    padding: 9px 13px;
    align-items: center;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 6px;
    border: 1px solid ${(props) => props.bordercolor};
    background: ${(props) => props.bgcolor};
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
    font-size: ${typography.sm.size};
    font-weight: ${typography.sm.fontWeight};
    &:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
    }
`


export const Button = styled.button`
    display: flex;
    font-size: ${typography.sm_bold.size};
    font-weight: ${typography.sm_bold.fontWeight};
    padding: 12px 26px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 12px;
    border: 1px solid  ${(props) => props.bordercolor};
    opacity: ${(props) => props.isenable === 'valid' ? '1' : '0.5'};
    background: ${(props) => props.bgcolor};
    color: ${(props) => props.color};
    cursor: pointer;
`

export const ButtonDiv = styled.div`
 display: flex;
 justify-content: center;
 cursor: pointer;
 gap: ${(props) => props.gap || 0};
    @media(min-width: ${breakpoint.sm}){
     justify-content: flex-end;
    }
`

