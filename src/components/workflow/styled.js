import styled, {css } from "styled-components";
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
`;

export const Title = styled.h2`
 font-size: ${typography.h2.size};
 font-weight: ${typography.h2.fontWeight};
 color: ${(props)=> props.color};
`

export const Container2 = styled.div`
 display: flex;
 align-items: start;
 justify-content: space-between;
 @media (max-width: ${breakpoint.md}) {
  flex-direction: column;
 }
`
export const VideoDiv = styled.div`
 width: 50%;
 margin-right: 50px;
 position: relative;
 @media (max-width: ${breakpoint.md}) {
  width: 100%;
  margin: 0;
 }
`

export const Video = styled.video`
 width: 100%;
 height: auto;
 @media (max-width: ${breakpoint.md}){
  width: 100%;
  padding-bottom: 50px;
 }
`
export const Play = styled.div`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`

export const PlayButton = styled.button`
  display: ${(props) => props.isvisible === true ? "block" : "none"};
  opacity: ${(props) => props.iconvisible === true ? 1: 0};
 background: transparent;
 width: 100px;
 height: 100px;
 img{
  width: 100%;
  height: 100%;
 }
 border: none;
 cursor: pointer;
`
export const Playtag = styled.p`
  display: ${(props) => props.isvisible == true ? "block" : "none"};
 border: none;
 font-size: ${typography.md.size};
 font-weight: ${typography.md.fontWeight};
 color: ${(props)=> props.color};
`
export const Container3 = styled.div`
 display: flex;
 flex-direction: column;
 gap: 10px;
 width: 50%;
 @media (max-width: ${breakpoint.md}) {
  width: 100%;
 }
`
export const Card = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 32px;
 border-radius: 24px;
 gap: 24px;
 background-color: ${(props)=>props.color};
`
export const CardTextDiv = styled.p`
 text-align: start;
 width: 85%;
`
export const CardNumber = styled.h4`
 width: 5%;
 font-size: ${typography.h4.size};
 font-weight: ${typography.h4.fontWeight};
 color: ${(props)=> props.color};
`
export const CardText = styled.span`
 font-size: ${typography.lg.size};
 font-weight: ${typography.lg.fontWeight};
 color: ${(props)=> props.color};
`
export const CardIcon = styled.img`
  width: 32px;
  height: auto;
`