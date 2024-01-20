import styled, { css } from "styled-components";

import BackgroundSVG from "../../assets/images/grid.svg"
import PitchImage from '../../assets/images/email-img.webp'
import PitchImageMobile from '../../assets/images/email-img-mobile.webp'
import { breakpoint, typography } from "../../theme/theme"

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

export const F = styled.div`
 display: flex; 
    @media (max-width: ${breakpoint.md}) {
        flex-direction: column-reverse;
    }
       
    border: 1px solid #888888;
    border-radius: 24px;
    
`

export const Player = styled.div`
    color: ${(props) => props.color || 'white'};
    display: flex;
    padding: ${(props) => props.padding || '8px'};
    align-items: center;
    gap: 16px;
    align-self: stretch;
    height: 35px;
    border-radius: 32px;
    border: 1px solid ${(props) => props.bordercolor};
    audio::-webkit-media-controls-panel {
        background: ${(props) => props.bgcolor};
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
    background-color: ${(props) => props.bgcolor || '#1E2A45'};
    border-top: ${props => props.bordertop};
    border-left: ${props => props.borderleft};
    border-right: ${props => props.borderright};
    border-bottom: ${props => props.borderbottom};
    padding: 20px;
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

export const FormTitle = styled.div`
    content: attr(content);
    color: ${props => props.color};
    font-size: ${props => props.fontsizes};
    font-weight: ${props => props.fontweights};
    align-self: center;
    padding: ${props => props.padding || '0px'};
    font-family: ${props => props.font};
`

export const Grade = styled.div`
    position: ${props => props.position};
    top: 50%;
    transform: ${props => props.transform};
    left: ${props => props.left};
    width: 30px;
    height: 30px;
    border: 1px solid ${props => props.bordercolor || 'green'};
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

export const CustomSVG = styled.img`
    width: ${props => props.width - 20 || 16}px;
    height: ${props => props.height - 20 || 16}px;
    cursor: pointer;
    path {
        fill: ${props => props.fill || '#000'};
    }
    @media (min-width: ${breakpoint.sm}) {
        width: ${props => props.width - 10 || 16}px;
        height: ${props => props.height - 10 || 16}px;
    }
    @media (min-width: ${breakpoint.lg}) {
        width:${props => props.width || 16}px;
        height: ${props => props.height || 16}px;
    }
`

export const FeatureText = styled.div`
    display: flex;
    gap: 5px;
`

export const Tooltip = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    &::after {
    content: attr(tooltip);
    position: absolute;
    background-color: #111827;
    color: #fff;
    padding: 12px 12px 16px 12px;
    border-radius: 4px;
    font-size: 16px;
    top: -260%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
    z-index: 10;
    width: 80%;
    pointer-events: none;
  }

  &:hover::after {
    opacity: 1;
    visibility: visible;
  }
`

export const ButtonDiv = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 cursor: pointer;
padding: 4px;
border-radius: 4px;
 gap: ${(props) => props.gap || 0};
    @media(min-width: ${breakpoint.sm}){
     justify-content: flex-end;
    }

&:hover {
    background: ${(props) => props.bghover};
  }
`

export const Collapse = styled.ul`
    margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0;
  border: 1px solid ${(props) => props.bordercolor};
  border-radius: 20px;
  background: white;
`;

export const List = styled.li`
  width: calc(100% - 20px);
  padding: 10px;
  list-style: none;
  border-bottom: 1px solid ${(props) => props.bordercolor};
`;

export const Feature = styled.summary`
  text-align: left;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: ${typography.xs.size};
  font-family: ${typography.h5.font};
  font-weight: ${typography.h5.fontWeight};
  color: ${(props) => props.color};
  @media(min-width: ${breakpoint.md}){
    font-size: ${typography.sm.size};
  }
  @media(min-width: ${breakpoint.lg}){
    font-size: ${typography.h5.size};
  }
  &::-webkit-details-marker {
    display: none;
  }
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

export const Featuredetailtitle = styled.p`
  padding: 16px 0px 0px 0px;
  font-weight: ${typography.sm.fontWeight};
  font-size: ${typography.label.size};
  color: ${(props) => props.color};
  @media(min-width: ${breakpoint.md}){
    font-size: ${typography.xs.size};
  }
  @media(min-width: ${breakpoint.lg}){
    font-size: ${typography.sm.size};
  }
`;

export const Featuredetail = styled.p`
  padding: 0px;
  font-weight: ${typography.sm.fontWeight};
  font-size: ${typography.label.size};
  color: ${(props) => props.color};
  @media(min-width: ${breakpoint.md}){
    font-size: ${typography.xs.size};
  }
  @media(min-width: ${breakpoint.lg}){
    font-size: ${typography.sm.size};
  }
`;

export const GradeContainer = styled.div`
 display: flex;
 width: 100%;
 justify-content: space-between;
 align-items: center;
 background: ${(props) => props.bgcolor};
`

export const SectionContainer = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: right;
 gap: 8px;
 width: 100%;
`

export const GradeTitle = styled.div`
 color: ${(props) => props.color};
 display: flex;
 align-items: center;
 gap: 20px;
 font-size: ${typography.label.size};
 font-weight: ${typography.sm.fontWeight};
 @media(min-width: ${breakpoint.md}){
  font-size: ${typography.xs.size};
 }
 @media(min-width: ${breakpoint.lg}){
  font-size: ${typography.sm.size};
 }
`

export const GradeResult = styled.div`
position: absolute;
  right: 5%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 35px;
  height: 35px;
   border: 1px solid ${props => props.bordercolor || 'green'};
   background-color: ${props => props.bgcolor || 'rgba(0,255,0,0.1)'};
   color: ${props => props.color || 'green'};
   border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${typography.xs.size};
  @media(min-width: ${breakpoint.md}){
     width: 35px;
     height: 35px;
     font-size: ${typography.sm.size};
     left: 40%;
     transform: translateY(-50%);
   }
  @media(min-width: ${breakpoint.lg}){
     width: 40px;
     height: 40px;
     font-size: ${typography.sm.size};
   }
`

export const GradeName = styled.div`
 color: ${(props) => props.color};
`

export const ScoreContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: right;
 gap: ${(props) => props.gap || 0};
`

export const Score = styled.span`
 color: ${(props) => props.color};
 font-family: ${typography.h3.font};
 font-size: ${typography.h4.size};
 font-weight: ${typography.h3.fontWeight};
 @media(min-width: ${breakpoint.lg}){
  font-size: ${typography.h3.size};
 }
`

export const PitchTextFormBottomBar = styled.div`
    border-radius: 0 0 15px 15px ;
    height: 35px;
    background-color: ${(props) => props.bgcolor};
    backdrop-filter: blur(40px);
    gap: 10px;
    padding: 5px 20px 5px 0px;
    position: relative;
    top: ${props => props.top};    
    border: 1px solid ${(props) => props.bordercolor};
    border-top: none;
    display: flex;
    justify-content: flex-end;
`
export const FormText = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Audio = styled.audio`
 width: 100%;
 border-radius: 5px;
 height: 35px;
 #myAudio {
  background-color: white;
 }

 #myAudio::-webkit-media-controls-panel {
  /* Add styles for the media controls panel */
 }

 #myAudio::-webkit-media-controls-play-button {
  /* Add styles for the play button */
 }

 #myAudio::-webkit-media-controls-volume-slider {
  /* Add styles for the volume slider */
 }
`

export const Container3 = styled.div`
 display: flex;
 flex-direction: column;
 gap: 30px;
 padding: 30px;
 background-color: ${(props) => props.bgcolor};
 border: solid 1px ${(props) => props.bordercolor};
 border-radius: 15px;
 @media (min-width: ${breakpoint.sm}){
    width: ${props => props.smwidth};
 }
 @media (min-width: ${breakpoint.md}){
    width:${props => props.mdwidth};
    font-size: ${typography.xs.size};
 }
 @media (min-width: ${breakpoint.lg}){
    width:${props => props.lgwidth};
 }
`

export const SectionTitle = styled.div`
 display: flex;
 flex-direction: row;
 gap: 8px;
`

export const ProcessingTitle = styled.div`
 color: ${(props) => props.color || "black"};
 font-size: ${typography.sm_bold.size};
 font-weight: ${typography.sm_bold.fontWeight};
`

export const Card = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 border-radius: 24px;
 gap: 15px;
`

export const CardTextDiv = styled.div`
 text-align: start;
 /* width: 85%; */
`

export const CardText = styled.span`
 font-size: ${typography.xs.size};
 font-weight: ${typography.xs.fontWeight};
 color: ${(props) => props.color || 'black'};
`

export const CardIcon = styled.img`
  width: 32px;
  height: auto;
`

export const ResultContainer = styled.div`
    max-width: 1204px;
    margin: auto;
    flex-direction: row;
    padding: 0px 30px 100px 30px;
    display: flex;
    position: relative;
    gap: 20px;
    @media (max-width: ${breakpoint.sm}) {
        padding: 0px 10px 30px 10px;
   }
   @media (max-width: ${breakpoint.md}) {
    margin: auto;
    padding: 0px 30px 30px 30px;
    flex-direction: column;
   }

`

export const ResultMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${(props) => props.gap || '10px'};
    width: 60%;
    @media(max-width: ${breakpoint.md}){
     width: 100%;
    }
`

export const ResultSubContainer = styled.div`
    width: 40%;
    @media(max-width: ${breakpoint.md}){
     width: 100%;
    }
`

export const ResultTitleContainer = styled.div`
  @media (min-width: ${breakpoint.md}) {
    margin: auto;
    padding: 30px 30px 8px 30px;
   }
   @media (min-width: ${breakpoint.lg}) {
    max-width: 1204px;
    margin: auto;
    
    padding: 30px 30px 8px 30px;
   }
   padding: 30px 10px 20px 10px;
   position: relative;
`

export const ModalOverlay = styled.div`
   position: fixed;
   z-index: 1;
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0,0,0,0.5);
   display: ${(props) => props.isOpen ? 'flex' : 'none'};
   justify-content: center;
   align-items: center;
`

export const ModalBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 0.3rem;
  outline: 0;
  width: 80%;
  max-width: 370px;
`

export const FileNameInput = styled.input`
  width: 100%;
  border: 1px solid #888;
  border-radius: 5px;
`

export const ModalHeader = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
`

export const ModalTitle = styled.div`
   color: black;
   font-size: 20px;
   font-weight: 600;
`

export const ModalBody = styled.div`
  display: block;
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
`

export const ModalForm = styled.form`

`

export const ModalElement = styled.div`
  margin-bottom: 1rem!important;
  display: flex;
  flex-direction: column;
`

export const ModalBodyLabel = styled.label`
  padding-top: calc(0.375rem + 1px);
  padding-bottom: calc(0.375rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
`

export const ModalBodyInput = styled.input`
  display: block;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`

export const ModalFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-end;
  padding: 0.75rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: calc(0.3rem - 1px);
  border-bottom-left-radius: calc(0.3rem - 1px);
`

export const ModalFooterCloseButton = styled.button`
  color: #fff;
  background-color: #374151;
  border-color: #374151;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  margin: 0.25rem;

  &:hover {
    background-color: #111827;
    border-color: #111827;
  }

  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`

export const ModalFooterSubmitButton = styled.button`
  color: #fff;
  background-color: #E71561;
  border-color: #E71561;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  margin: 0.25rem;
  font-size: 1rem;
  
  &:hover {
    background-color: #CA054C;
    border-color: #CA054C;
  }

  border-radius: 0.25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`

export const CloseModalButton = styled.button`
  background: none;
  border: none;
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  padding: 0;
  cursor: pointer;

  &:hover, &:focus {
    color: black;
    text-decoration: none;
    outline: none; // removes the default focus outline
  }
`

export const EditButton = styled.img`
  cursor: pointer;
`