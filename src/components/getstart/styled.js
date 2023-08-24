import styled from "styled-components";
import HeartIcon from '../../assets/images/heart.svg'
import ChatIcon from '../../assets/images/chat-bubble-oval-left.svg'
import BackgroundSVG from "../../assets/images/grid.svg"
import { breakpoint, typography } from "../../theme/theme";

export const ColorBgContainer = styled.div`
    background-color: ${(props) => props.bg};
    padding-inline: 10px;
    @media(min-width: ${breakpoint.sm}){
        padding-inline: 30px;
    }
`;

export const Section = styled.div`
    position: relative;
    width: 100%;
`;

export const TitleTag = styled.div`
    text-align: center;
    margin: auto;
    max-width: 1232px;
    padding: 50px 0px;
    
    @media (min-width: ${breakpoint.sm}) {
        padding: 70px 0px;
    }
    @media (min-width: ${breakpoint.md}) {
        padding: 100px 0px;
    };
    @media (min-width: ${breakpoint.lg}) {
        padding: 150px 0px;
       };
    position: relative;
`

export const Bgtitle =styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background:
        radial-gradient(ellipse at 50% -50%, rgba(231, 21, 97, 0.4), transparent 70%),
        radial-gradient(ellipse at 50% -50%, rgba(17, 24, 39, 0),  rgba(17, 24, 39, 1)80%),
        url(${BackgroundSVG}) 0% 20%/80% auto no-repeat,
        linear-gradient(0deg, rgba(17, 24, 39, 1) 0%, rgba(17, 24, 39, 1) 100%);
`

export const Features = styled.div`

    @media (min-width: ${breakpoint.md}) {
    margin: auto;
    padding: 0px 30px;
   }
   @media (min-width: ${breakpoint.lg}) {
    max-width: 1204px;
    margin: auto;
    padding: 0px 30px;
   }
`

export const F = styled.div`
    margin: 50px 0px;

    @media (min-width: ${breakpoint.lg}) {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10%;
        margin: 100px 0px;
       }
`
export const PitchForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    @media (max-width: 1024px){
        margin: 50px 0px;
    }
    position: relative;
    height: fit-content;
`

export const ShadowpitchForm = styled.div`
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${ (props) => `linear-gradient(0deg, rgba(17, 24, 39, 1), transparent ${props.height})`};
    z-index: 1;
`

export const Player = styled.div`
    color: ${(props) => props.color};
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    height: 48px;
    border-radius: 12px;
    border: 1px solid #405A94;
    background: #1E2A45;
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

export const FormText = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const TextBox = styled.div`
    width: ${props => props.width};
    max-width: 100%;
    height: ${props => props.height};
    border: 1px solid #405A94;
    background-color: #1E2A45;
    border-top: ${props => props.bordertop};
    border-left: ${props => props.borderleft};
    border-right: ${props => props.borderright};
    border-bottom: ${props => props.borderbottom};
    padding: 20px 30px 20px 30px;
    white-space: pre-line;
    word-wrap: break-word;
    border-radius: ${props => props.borderradius};
    overflow: scroll;
    color: ${(props) => props.color};
    font-size: ${typography.sm.size};
    font-weight: ${typography.sm.fontWeight};
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
export const PitchTextFormTopBar = styled.div`
    position: relative;
    border: 1px solid #405A94;
    border-bottom: none;
    border-radius: 15px 15px 0 0;
    height: 35px;
    background-color: #2A3754;
    padding: 5px 20px 5px 0px;
`
export const PitchTextFormBottomBar = styled.div`
    border-radius: 0 0 15px 15px ;
    height: 35px;
    background-color: #2A3754;
    backdrop-filter: blur(40px);
    gap: 10px;
    padding: 5px 20px 5px 0px;
    position: relative;
    top: ${props => props.top};    
    border: 1px solid #405A94;
    border-top: none;
`
export const Title = styled.span`
    font-weight: ${typography.h3.fontWeight};
    color: white;
    font-size: ${typography.h5.size};
    @media (min-width: ${breakpoint.md}) {
        font-size: ${typography.h4.size};
    };
    @media (min-width: ${breakpoint.lg}) {
        font-size: ${typography.h3.size};
    };
`
export const FormTitle = styled.div`
    color: ${props => props.color};
    font-size: ${(props) => props.fontsizes || '12px'};
`

export const BigTitle = styled.span`
    color: ${props => props.color};
    font-size: 50px;
    font-weight: 600;
    @media (min-width: ${breakpoint.sm}) {
        font-size: 100px;
    }
    @media (min-width: ${breakpoint.md}) {
        font-size: 150px;
    };
    @media (min-width: ${breakpoint.lg}) {
        font-size: 200px;
       };
`
export const MidTitle = styled.span`
    font-weight: ${typography.h2.fontWeight};
    color: ${props => props.color};
    font-size: ${typography.h4.size};
    @media (min-width: ${breakpoint.sm}) {
        font-size: ${typography.h3.size};
    }
    @media (min-width: ${breakpoint.md}) {
        font-size: ${typography.h2.size};
    };
    @media (min-width: ${breakpoint.lg}) {
        font-size: ${typography.h2.size};
       };
`
export const FitMeNow = styled.span`
    color: ${props => props.color};
    font-size: ${typography.h4.size};
    @media (min-width: ${breakpoint.md}) {
        font-size: ${typography.h3.size};
    };
    @media (min-width: ${breakpoint.lg}) {
        font-size: ${typography.h3.size};
       };
    font-weight: ${typography.h3.fontWeight};
`

export const GridRows = styled.div`
    display: grid;
    grid-template-rows: repeat(${props => props.rows}, minmax(0, 1fr));
    @media (max-width: 1024px){
        margin-top: 100px
    }
`
export const GridColumns = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.cols}, minmax(0, 1fr));
`
export const Rotate = styled.div`
    transform: rotate(${props => props.rotate}deg);
    position: absolute;
    left: ${props => props.left};
    top: ${props => props.top};
    right: ${props => props.right};
`
export const CustomSVG = styled.img`
    width: ${props => props.width || '24px'};
    height: ${props => props.height || '24px'};
    path {
        fill: ${props => props.fill || '#000'};
    }
`
export const Grade = styled.div`
    position: ${props => props.position};
    top: 50%;
    transform: ${props => props.transform};
    left: ${props => props.left};
    width: ${props => props.size || '50'}px;
    height: ${props => props.size || '50'}px;
    border: 1px solid ${props => props.color || 'green'};
    background-color: ${props => props.backgroundcolor || 'rgba(0,255,0,0.1)'};
    color: ${props => props.color || 'green'};
    font-size: ${props => props.size / 2 || '25'}px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${props => props.size / 5 || '10'}px;
`

export const DContainer = styled.div`
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
    @media (min-width: ${breakpoint.lg}){
        transform: ${(props) => `translateY(${props.top})`};
    }
`
export const Box = styled.div`
    background-color: rgba(255, 255, 255, 0.05); /* Adjust the alpha value to control the transparency */
  backdrop-filter: blur(10px); /* Adjust the blur value to control the intensity of the effect */
  border-radius: 8px;
  padding: 16px;
  z-index: 9;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
export const ProfileImage = styled.img`
    border-radius: 50%;
    @media(min-width: ${breakpoint.lg}) {
        width: 70px;
    }
    @media(min-width: ${breakpoint.md}) {
        width: 50px;
    }
    width: 40px;
    height: auto;
`
export const Avatarbadge = styled.img`
    @media(min-width: ${breakpoint.lg}) {
        width: 20px;
    }
    @media(min-width: ${breakpoint.md}) {
        width: 18px;
    }
    width: 12px;
    height: auto;
`

export const Avatar = (props) => {
    return (
        <DContainer
        >
            <DContainer
                display="flex"
                alignitems="center"
                gap="15px"
                margin="0 0 10px 0"
            >
                <ProfileImage src={props.imageSrc}></ProfileImage>
                {props.comment ? (
                    <>
                        <DContainer
                            display="flex"
                        >
                            <Avatarbadge src={HeartIcon}></Avatarbadge>
                            <FormTitle color='white'>456</FormTitle>
                        </DContainer>
                        <DContainer
                            display="flex"
                        >
                            <Avatarbadge src={ChatIcon}></Avatarbadge>
                            <FormTitle color='white'>1k</FormTitle>
                        </DContainer>
                    </>
                ):(<></>)}
            </DContainer>
            <DContainer
                // margom="20px 0 0 0"
            >
                <FormTitle
                    // fontsizes="12px"
                    color={props.titleState ? "white" : "#3D568C"}
                >{props.avatarTitle}</FormTitle>
            </DContainer>
        </DContainer>
    );
}
