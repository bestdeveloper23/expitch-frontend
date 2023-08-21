import styled, {css} from "styled-components";

import BackgroundSVG from "../../assets/images/grid.svg"
import { breakpoint, typography } from "../../theme/theme";

export const ContainerEmail = styled.div`
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

export const ColorBgContainer = styled.div`
    background: ${props => props.backgroundcolor};
    border: 1px solid transparent;
    border-radius: 24px 0 0 24px;
    
    width: 50%;
    @media (max-width: ${breakpoint.md}){
        border-radius: 0 0 24px 24px;
        width: 100%
    }
`;
export const SvgBgContainer = styled.div`
    background-image: url(${BackgroundSVG});
    background-repeat: no-repeat;
    background-size: 100%;
    border: 1px solid transparent;
    border-radius: 24px 0 0 0;
    border-right: none;
    border-bottom: none;
`

export const F = styled.div`
 display: flex; 
    @media (max-width: ${breakpoint.md}) {
        flex-direction: column-reverse;
    }
       
    border: 1px solid #888888;
    border-radius: 24px;
    
`
export const PitchForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: ${props => props.padding};
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

export const Player = styled.div`
    color: white;
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    height: 25px;
    border-radius: 12px;
    border: 1px solid #405A9444;
    background: #1E2A4555;
    background-blend-mode: color-dodge;
`

export const PlayerProgress = styled.progress`
    width: 100%;
    height: 10px;
    appearance: none;
    border: none;
    background-color: #ddd;
    border-radius: 10px;
    overflow: hidden;

    &::-webkit-progress-bar {
    background-color: #ddd;
    border-radius: 10px;
    }

    &::-webkit-progress-value {
    background-color: ${(props) => props.color};
    border-radius: 10px;
    }

    &::-moz-progress-bar {
    background-color: ${(props) => props.color};
    border-radius: 10px;
    }
`
export const PlayerTime = styled.div`
    width: 200px;
`
export const TextBox = styled.div`
    width: ${props => props.width};
    max-width: 100%;
    height: ${props => props.height};
    border: 1px solid ${(props) => props.bordercolor || '#405A94'};
    background-color: ${(props) => props.bgcolor||'#1E2A45'};
    border-top: ${props => props.bordertop};
    border-left: ${props => props.borderleft};
    border-right: ${props => props.borderright};
    border-bottom: ${props => props.borderbottom};
    padding: 20px 30px 20px 30px;
    white-space: pre-line;
    word-wrap: break-word;
    border-radius: ${props => props.borderradius};
    overflow: scroll;
    color: white;
    font-size: 18px;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 20px;
        
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
    font-size: ${typography.h4.size};
    font-weight: ${typography.h3.fontWeight};
    @media (min-width: ${breakpoint.md}) {
        font-size: ${typography.h4.size};
    };
    @media (min-width: ${breakpoint.lg}) {
        font-size: ${typography.h3.size};
    };
`
export const SmallTitle = styled.span`
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
export const FormTitle = styled.span`
    color: ${props => props.color};
    font-size: ${props => props.fontsize};
`

export const FitMeNow = styled.span`
    color: ${props => props.color};
    font-size: ${typography.h5.size};
    font-weight: ${typography.h5.fontWeight};
    @media (min-width: ${breakpoint.md}) {
        font-size: ${typography.h4.size};
    };
    @media (min-width: ${breakpoint.lg}) {
        font-size: ${typography.h3.size};
       };
`

export const Grade = styled.div`
    position: ${props => props.position};
    top: 50%;
    transform: ${props => props.transform};
    left: ${props => props.left};
    width: 30px;
    height: 30px;
    border: 1px solid ${props => props.color || 'green'};
    background-color: ${props => props.backgroundcolor || 'rgba(0,255,0,0.1)'};
    color: ${props => props.color || 'green'};
    font-size: ${props => props.size / 2 || '18'}px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${props => props.size / 5 || '10'}px;
    @media(min-width: ${breakpoint.lg}){
     width: 50px;
     height: 50px
    }
`

export const EmailInputContainer = styled.div`

 display: flex;
  padding: 10px;
 justify-content: center;
 @media(min-width: ${breakpoint.lg}){
  width: 50%;
  
  justify-content: flex-end;
 }
`

export const EmailLeftContainer = styled.div`
     display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 10px;
    @media(min-width: ${breakpoint.md}){
     padding: 20px;
    }
    @media(min-width: ${breakpoint.lg}){
     padding: 10%;
    }
`

export const DContainer = styled.div`
    width: ${props => props.width};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    display: ${props => props.display || "block"};
    justify-content: ${props => props.justifycontent};
    align-items: ${props => props.alignitems};
    flex-direction: ${props =>props.flexdirection};
    flex-wrap: ${props =>props.flexWrap};
    align-content: ${props =>props.aligncontent};
    gap: ${props =>props.gap};
    position: ${props =>props.position};
`

export const Label = styled.span`
    font-size: ${typography.label.size};
    font-weight: ${typography.label.fontWeight};
    color: ${(props) => props.color || 'black'};
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

export const ContainerUploading =  styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 32px;
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
export const UploadingBox = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 32px;
    border-radius: 24px;
    border: 2px dashed ${(props) => props.bordercolor};
    background: ${(props) => props.bgcolor};
    @media (min-width: ${breakpoint.sm}){
        width:400px;
        padding: 20px;
    }
    @media (min-width: ${breakpoint.md}){
        width:600px;
        padding: 30px;
    }
    @media (min-width: ${breakpoint.lg}){
        width:792px;
        padding: 40px;
    }
`
export const CustomSVG = styled.img`
    width: ${props => props.width-20 || 24}px;
    height: ${props => props.height-20 || 24}px;
    path {
        fill: ${props => props.fill || '#000'};
    }
    @media (min-width: ${breakpoint.sm}) {
        width: ${props => props.width - 10 || 24}px;
        height: ${props => props.height-10 || 24}px;
    }
    @media (min-width: ${breakpoint.lg}) {
        width:${props => props.width || 24}px;
        height: ${props => props.height|| 24}px;
    }
`

export const UploadText = styled.div`
    color: ${props => props.color};
    font-size: ${props => props.fontsize || 18}px;
    font-style: normal;
    font-weight: ${typography.sm.fontWeight};
    text-align: center;
    @media (max-width: ${breakpoint.sm}) {
        font-size: ${props => props.fontsize - 4 || 14}px;
    }
`
export const Button1 = styled.button`
    display: flex;
    padding: 4px 14px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 1px solid ${(props) => props.bordercolor};
    background: ${(props) => props.bgcolor};
    color: ${(props) => props.color};
    font-size: ${typography.label.size};
    font-style: normal;
    font-weight: ${typography.label_bold.fontWeight};
    cursor: pointer;
    @media (min-width: ${breakpoint.sm}) {
        font-size: ${typography.xs_bold.size};
        padding: 8px 20px;
    }
    @media (min-width: ${breakpoint.lg}) {
        font-size: ${typography.sm_bold.size};
        padding: 12px 26px;
        border-radius: 12px;
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
    opacity: ${(props) => props.isenable === true ? '1' : '0.5'};
    background: ${(props) => props.bgcolor};
    color: ${(props) => props.color};
    cursor: pointer;
`

export const ButtonDiv = styled.div`
 display: flex;
 justify-content: center;
    @media(min-width: ${breakpoint.sm}){
     justify-content: flex-end;
    }
`

export const RecordingBox = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 16px;
    background: var(--white, #FFF);
    @media (min-width: ${breakpoint.sm}){
        width:300px;
        padding: 20px;
    }
    @media (min-width: ${breakpoint.md}){
        width:500px;
        padding: 30px;
    }
    @media (min-width: ${breakpoint.lg}){
        width:586px;
        padding: 40px;
    }
`
export const RoundButton = styled.a`
    display: flex;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    padding: 9px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid ${(props) => props.bordercolor};
    background: ${(props) => props.bgcolor};
    @media (min-width: ${breakpoint.sm}) {
        padding: 12px
    }
    @media (min-width: ${breakpoint.lg}) {
        padding: 16px;
    }
`

export const ContainerProcessing =  styled.div`
    @media (min-width: ${breakpoint.md}) {
     padding: 50px 30px;
    }
    @media (min-width: ${breakpoint.lg}) {
     max-width: 1204px;     
     padding: 100px 30px;
    }
    padding: 30px 10px;
    position: relative;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`

export const ProcessingBox = styled.div`
    display: flex;
    height: 200px;
    justify-content: center;
    align-items: center;
    gap: 32px;
    border-radius: 24px;
    border: 2px solid ${(props) => props.bordercolor};
    background: ${(props) => props.bgcolor};
    width: 90%;
    @media (min-width: ${breakpoint.sm}){
        width:400px;
        padding: 20px;
    }
    @media (min-width: ${breakpoint.md}){
        width:500px;
        padding: 30px;
    }
    @media (min-width: ${breakpoint.lg}){
        width:586px;
        padding: 40px;
    }
`

export const ProcessingProgress = styled.div`
 width: 100%;
 position: relative;
 display: flex;
 /* clip-path: inset(0 0 0 0); */
`

export const ProcessImage = styled.img`
 clip-path: ${(props) => `inset(0% ${props.percent ? props.percent : 0}% 0% 0%)`};
`

export const DscrText = styled.div`
    width:100%;
    color: ${props => props.color};
    font-size: ${typography.label.size};
    font-weight: ${typography.sm.fontWeight};
    text-align: center;
    @media (min-width: ${breakpoint.sm}){
        width:400px;
    }
    @media (min-width: ${breakpoint.md}){
        width:500px;
        font-size: ${typography.xs.size};
    }
    @media (min-width: ${breakpoint.lg}){
        width:586px;
    }
    background: transparent;
`

export const TextBoxProcessing = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media (min-width: ${breakpoint.sm}){
        width:400px;
    }
    @media (min-width: ${breakpoint.md}){
        width:500px;
    }
    @media (min-width: ${breakpoint.lg}){
        width:586px;
    }
`
export const ProcessError = styled.div`
 position: fixed;
 display: ${(props) => props.message !== '' ? 'flex' : 'none'};
 justify-content: center;
 align-items: center;
 background-color: rgba(5,5,5,0.8);
 color: red;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 z-index: 100;
 @media (max-width: ${breakpoint.md}){
  width: 60vw;
  height: 60vh;
  font-size: ${typography.h4.size};
  font-weight: ${typography.h4.fontWeight};
 }
 @media (min-width: ${breakpoint.md}){
  width: 60vw;
  height: 60vh;
  font-size: ${typography.h3.size};
  font-weight: ${typography.h3.fontWeight};
 }
`


export const Collapse = styled.ul`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0;
  border: 1px solid ${(props) => props.bordercolor};
  border-radius: 20px;
`;

export const List = styled.li`
  width: calc(100% - 20px);
  padding: 10px;
  list-style: none;
  border-bottom: 1px solid ${(props) => props.bordercolor};
`;

export const Feature = styled.summary`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: ${typography.label_bold.size};
  font-weight: ${typography.label_bold.fontWeight};
  color: ${(props) => props.color};
`;

export const ResponseIcon = styled.img`
  pointer-events: none;
  width: 12px;
  height: auto;
`

export const Response = styled.details`
  padding: 10px;
  text-align: left;
`;

export const Featuredetail = styled.p`
  padding-top: 15px;
  font-weight: ${typography.text.fontWeight};
  font-size: ${typography.text.size};
  color: ${(props) => props.color};
`;

export const Grade2 = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 36px;
  height: 34px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ color, bgcolor }) => css`
    background-color: ${bgcolor};
    color: ${color};
  `}
  pointer-events: none;
`
