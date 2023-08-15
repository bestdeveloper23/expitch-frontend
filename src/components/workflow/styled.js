import styled, {css } from "styled-components";

export const Container = styled.div`

  @media (min-width: 800px) {
    margin: auto;
    padding: 50px 30px;
   }
   @media (min-width: 1400px) {
    max-width: 1204px;
    margin: auto;
    
    padding: 100px 30px;
   }
   padding: 30px 10px;
   position: relative;
`;

export const Title = styled.h1`
 font-size: 56px;
 font-weight: 600;
 color: ${(props)=> props.color};
`

export const Container2 = styled.div`
 display: flex;
 align-items: start;
 justify-content: space-between;
 @media (max-width: 800px) {
  flex-direction: column;
 }
`
export const VideoDiv = styled.div`
 width: 50%;
 position: relative;
 @media (max-width: 800px) {
  width: 100%;
 }
`

export const Video = styled.video`
 width: 90%;
 height: auto;
 @media (max-width: 800px){
  width: 100%;
 }
 padding-bottom: 50px;
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
 display: none;
`

export const PlayButton = styled.button`
 background: transparent;
 width: 50px;
 height: 50px;
 img{
  width: 100%;
  height: 100%;
 }
`
export const Playtag = styled.p`
 font-family: "DM Sans";
 border: none;
 font-size: 18px;
 font-weight: 400;
 line-height: 22px;
 color: ${(props)=> props.color};
`
export const Container3 = styled.div`
 display: flex;
 flex-direction: column;
 gap: 10px;
 width: 50%;
 @media (max-width: 800px) {
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
 font-size: 32px;
 font-weight: 600;
 color: ${(props)=> props.color};
`
export const CardText = styled.span`
 font-size: 26px;
 font-weight: 400;
 color: ${(props)=> props.color};
`
export const CardIcon = styled.p`
 width: 10%;
 font-size: 32px;
 height: auto;
`