import styled, { css } from "styled-components";
import { breakpoint, typography } from "../../theme/theme"

export const Wrapper = styled.div`
 width: 100%;
 height: 100%;
 background-color: ${(props) => props.bgcolor};
`

export const Loading = styled.div`
  width: 40px;
  height: 40px;
  border: 8px solid ${props => props.bordercolor || "#f3f3f3"}33;
  border-top: 8px solid ${props => props.bordercolor || "#3498db"};
  border-radius: 50%;
  animation: spin 1s linear infinite;

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
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

export const ContainerProcessing = styled.div`
    padding: 30px 10px;
    position: relative;
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
    width: ${props => props.width - 20 || 24}px;
    height: ${props => props.height - 20 || 24}px;
    cursor: pointer;
    path {
        fill: ${props => props.fill || '#000'};
    }
    @media (min-width: ${breakpoint.sm}) {
        width: ${props => props.width - 10 || 24}px;
        height: ${props => props.height - 10 || 24}px;
    }
    @media (min-width: ${breakpoint.lg}) {
        width:${props => props.width || 24}px;
        height: ${props => props.height || 24}px;
    }
`

export const ProcessingProgress = styled.div`
 width: 100%;
 height: 100%;
 position: relative;
 display: flex;
 justify-content: center;
`

export const Button = styled.button`
    cursor: pointer;
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


export const Container3 = styled.div`
 display: flex;
 flex-direction: column;
 gap: 30px;
 padding: 30px;
 background-color: ${(props) => props.bgcolor};
 border: solid 2px ${(props) => props.bordercolor};
 border-radius: 20px;
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