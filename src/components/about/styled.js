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
`;

export const Line = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  @media (max-width: ${breakpoint.lg}) {
    flex-direction: column;
  }
`;

export const Texts = styled.div`
  @media (min-width: ${breakpoint.lg}) {
    padding: 100px 0px; 
    width: 55%;
  }
  width: 100%;
  text-align: left;
  padding: 50px 0px;
`;

export const Paragraph = styled.p`
  @media (min-width: ${breakpoint.sm}) {
   font-weight: ${typography.md.fontWeight};
   font-size: ${typography.md.size};
   margin: 0;
  }
 
  @media (min-width: ${breakpoint.lg}) {
   font-weight: 400;
   font-size: 22px;
  }
  max-width: 70%;
  color: ${(props) => props.color};
  position: relative;
  margin: auto;
  padding: 50px 0px;
  font-family: ${typography.md.font};
`;

export const Paragraph2 = styled.span`
  font-family: ${typography.sm_bold.font};
  font-weight: ${typography.sm_bold.fontWeight};
  font-size: ${typography.sm_bold.size};
  color: ${(props) => props.color};
  padding: 10px;
`

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  justify-content: start;
  @media (min-width: ${breakpoint.md}) {
   justify-content: start;
   gap: 10px;
  }
`;

export const TestButton = styled.a`
  text-decoration: none;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  padding: 12px 26px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-family: ${typography.sm_bold.font};
  font-size: ${typography.sm_bold.size};
  font-weight: ${typography.sm_bold.fontWeight};
  @media (max-width: ${breakpoint.lg}){
    padding: 10px 20px;
    border-radius: 12px;
    font-size: ${typography.sm_bold.size};
  }
`

export const Title = styled.span`
  font-weight: ${typography.h3.fontWeight};
  font-size: ${typography.h3.size};
  @media (min-width: ${breakpoint.md}) {
    font-weight: ${typography.h2.fontWeight};
    font-size: ${typography.h2.size};
  }

  @media (min-width: ${breakpoint.lg}) {
    font-weight: ${typography.h1.fontWeight};
    font-size: ${typography.h1.size};
  }
 color: ${(props) => props.color};
`;

export const PlayButton = styled.img`
  width: 20px;
  height: auto;
  cursor: pointer;
`

export const RightColumn = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  width: 45%;
  @media (max-width: ${breakpoint.lg}){
    width: 100%;
  }
`;

export const Righttitle = styled.p`
  font-weight: ${typography.xs.fontWeight};
  font-size: ${typography.xs.size};
 font-family: ${typography.xs.font};
 text-align: start;
 color: ${(props) => props.color};
`

export const Rightparagraph = styled.p`
 @media (min-width: ${breakpoint.md}) {
  font-weight: ${typography.text.fontWeight};
  font-size: ${typography.text.size};
 }

 @media (min-width: ${breakpoint.lg}) {
  font-weight: ${typography.text.fontWeight};
  font-size: ${typography.text.size};
 }
 background-color: ${(props) => props.bgcolor};
 border-radius: 17px;
 border: solid 1px ${(props) => props.bordercolor};
 color: ${(props) => props.color};
 position: relative;
 padding: 11px;
`

export const Container2 = styled.div`
  text-align: center;
  width: 100%;
  a {
    display: inline-block;
    margin-top: 2rem;
  }
  @media (max-width: ${breakpoint.lg}) {
    text-align: center;
    padding: 0;
    padding: 50px 0px;
  }
  padding: 100px 0px;
`;

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

export const Featuredetail = styled.p`
  padding-top: 15px;
  font-weight: ${typography.text.fontWeight};
  font-size: ${typography.text.size};
  color: ${(props) => props.color};
`;

export const Grade = styled.div`
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

export const Shadow1 = styled.span`
 position: absolute;
 pointer-events: none;
 top: 0;
 left: 0;
 z-index: 1;
 width: 100%;
 height: 100%;
 background: rgb(255,255,255);
 background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,0) 100%);
`

export const Shadow2 = styled.span`
 position: absolute;
 pointer-events: none;
 top: 0;
 left: 0;
 z-index: 1;
 width: 100%;
 height: 100%;
 background: rgb(255,255,255);
 background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 30%);
`

export const AudioBar = styled.img`
  @media (max-width: ${breakpoint.lg}) {
    width: 40%;
    text-align: center;
    padding: 0;
    bottom: -50%;
  }
  @media (min-width: ${breakpoint.md}){
      bottom: -100%;
  }
  z-index: 2;
  width: 60%;
  height: auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

export const LoadingBar = styled.div`
  position: relative;
  width: 100%;
`

export const SoundImage = styled.img`
  width: 100%;
`

export const Soundborder = styled.img`

`

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`

export const Card = styled.div`
    width: 90%;
    text-align: center;
  @media (min-width: ${breakpoint.md}) {
    width: 40%;
    text-align: center;
    padding: 0;
  }
  @media (min-width: ${breakpoint.lg}) {
    width: 20%;
    text-align: left;
    padding: 0;
  }
`

export const CardIcon = styled.img`
  @media (min-width: ${breakpoint.lg}){
    width: 40px;

  }
  width: 50px;
`

export const CardTitle = styled.p`
  font-size: ${typography.h4.size};
  font-weight: ${typography.h4.fontWeight};
  color: ${(props) => props.color};
`
export const CardParagraph = styled.p`
  font-size: ${typography.sm.size};
  font-weight: ${typography.sm.fontWeight};
  color: ${(props) => props.color};
`

export const TrustedContainer = styled.div`
  padding: 0;
  width: 100%;
  background-color: ${(props) => props.bgcolor};
`

export const TrustedsubContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (min-width: ${breakpoint.md}) {
    margin: auto;
    padding-inline: 30px;
   }
   @media (min-width: ${breakpoint.lg}) {
    max-width: 1204px;
    margin: auto;
    justify-content: space-between;
    padding-inline: 30px;
   }
   padding: 30px 10px;
`

export const Trusted = styled.img`
  width: 30%;
  height: auto;
  @media (min-width: ${breakpoint.sm}){
    width: 20%;

  }
  @media (min-width: ${breakpoint.md}){
    width: 80px;

  }
  @media (min-width: 1024px){
    width: 100px;

  }
  @media (min-width: ${breakpoint.lg}){
    width: 139px;

  }
`
export const Gridbackground = styled.img`
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  height: auto;
  z-index: -1;
`