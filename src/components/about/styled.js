import styled, { css } from "styled-components";

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

export const Line = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

export const Texts = styled.div`
  @media (min-width: 800px) {
    padding: 100px 0px;  
    text-align: left;
    width: 55%;
  }
  width: 100%;
  text-align: center;
  padding: 50px 0px;
`;

export const Paragraph = styled.p`
  @media (min-width: 600px) {
   font-family: 'DM Sans', sans-serif;
   font-weight: 400;
   font-size: 20px;
   line-height: 24px;
   margin: 0;
  }
 
  @media (min-width: 1400px) {
    font-family: 'DM Sans', sans-serif;
   font-weight: 400;
   font-size: 22px;
   line-height: 26px;
  }
  max-width: 70%;
  color: ${(props) => props.color};
  position: relative;
  margin: auto;
  padding: 50px 0px;
`;

export const Paragraph2 = styled.span`
  @media (min-width: 600px) {
    font-family: 'DM Sans', sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  }
  
  @media (min-width: 1400px) {
   font-family: 'DM Sans', sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  }
  color: ${(props) => props.color};
  padding: 10px;
`

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-evenly;
  @media (min-width: 800px) {
    font-family: 'DM Sans', sans-serif;
   font-weight: 400;
   font-size: 22px;
   line-height: 26px;
   justify-content: start;
  }
`;

export const TestButton = styled.button`
  background-color: #E71561;
  color: #FFFFFF;
  padding: 12px 26px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-family: 'DM Sans';
  font-size: 18px;
`

export const Title = styled.span`
  font-weight: 300;
  font-size: 46px;
  line-height: 50px;
  @media (min-width: 600px) {
    font-weight: 500;
    font-size: 60px;
    line-height: 58px;
  }

  @media (min-width: 1400px) {
    font-weight: 600;
    font-size: 64x;
    line-height: 66px;
  }
 color: ${(props) => props.color};
`;

export const PlayButton = styled.img`
  width: 20px;
  height: auto;
`

export const RightColumn = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  width: 45%;
  @media (max-width: 800px){
    width: 100%;
  }
`;

export const Righttitle = styled.p`
@media (min-width: 600px) {
  font-weight: 400;
  font-size: 15.2px;
  line-height: 17.96px;
 }
 font-family: 'DM Sans';
 @media (min-width: 1400px) {
  font-weight: 400;
  font-size: 15.2px;
  line-height: 17.96px;
 }
 font-weight: 400;
  font-size: 15.2px;
  line-height: 17.96px;
 text-align: start;
 color: ${(props) => props.color};
`

export const Rightparagraph = styled.p`
 font-family: 'DM Sans', sans-serif;
 @media (min-width: 600px) {
  font-weight: 400;
  font-size: 12.44px;
  line-height: 15.2px;
 }

 @media (min-width: 1400px) {
  font-weight: 400;
  font-size: 12.44px;
  line-height: 15.2px;
 }
 color: ${(props) => props.color};
 position: relative;
`

export const Container2 = styled.div`
  text-align: center;
  width: 100%;
  a {
    display: inline-block;
    margin-top: 2rem;
  }
  @media (max-width: 800px) {
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
  font-weight: 500;
`;

export const Feature = styled.summary`
  font-family: 'DM Sans';
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
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
  line-height: 1.6;
  font-weight: 400;
  font-family: 'DM Sans';
`;

export const Featuredetail = styled.p`
  padding-top: 15px;
  line-height: 15.2px;
  font-size: 12.44px;
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
 background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 5%, rgba(255,255,255,0) 20%);
`

export const AudioBar = styled.img`
  @media (max-width: 800px) {
    width: 40%;
    text-align: center;
    padding: 0;
    bottom: -50%;
  }
  @media (min-width: 800px){
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
  @media (max-width: 800px) {
    width: 40%;
    text-align: center;
    padding: 0;
  }
  @media (min-width: 800px) {
    width: 20%;
    text-align: left;
    padding: 0;
  }
`

export const CardIcon = styled.img`
  @media (min-width: 400px){
    width: 26px;

  }
  @media (min-width: 800px){
    width: 30px;

  }
  @media (min-width: 1024px){
    width: 36px;

  }
  @media (min-width: 1400px){
    width: 40px;

  }
  width: 20px;
`

export const CardTitle = styled.p`
  font-size: 32px;
  line-height: 32px;
  font-weight: 600;
  color: ${(props) => props.color};
`
export const CardParagraph = styled.p`
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  color: ${(props) => props.color};
`

export const TrustedContainer = styled.div`
  padding: 0;
  max-height: 124px;
  width: 100%;
  background-color: ${(props) => props.bgcolor};
`

export const TrustedsubContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 800px) {
    margin: auto;
    padding-inline: 30px;
   }
   @media (min-width: 1400px) {
    max-width: 1204px;
    margin: auto;
    
    padding-inline: 30px;
   }
   padding: 30px 10px;
`

export const Trusted = styled.img`
  width: 30%;
  height: auto;
  @media (min-width: 400px){
    width: 20%;

  }
  @media (min-width: 800px){
    width: 80px;

  }
  @media (min-width: 1024px){
    width: 100px;

  }
  @media (min-width: 1400px){
    width: 139px;

  }
`
export const Gridbackground = styled.img`
  left: 0;
  top: 0;
  position: absolute;
  width: 80%;
  height: auto;
  z-index: -1;
`