import styled from "styled-components";
import HeartIcon from '../../assets/images/heart.svg'
import ChatIcon from '../../assets/images/chat-bubble-oval-left.svg'

import BackgroundSVG from "../../assets/images/Group5.png"

export const ColorBgContainer = styled.div`
    background: 
            radial-gradient(ellipse at 50% -30%, rgba(17, 24, 39, 0),  rgba(17, 24, 39, 1)90%),
            radial-gradient(ellipse at 50% 20%, rgba(231, 21, 97, 0.3), transparent 120%),
            url("../../images/grid.svg") 0% -20%/80% auto no-repeat,
            linear-gradient(0deg, rgba(17, 24, 39, 1) 0%, rgba(17, 24, 39, 1) 100%);
    padding-bottom: 100px;
`;

export const TitleTag = styled.div`
    text-align: center;
    margin: auto;
    max-width: 1232px;
    padding: 50px 0px;
    
    @media (min-width: 600px) {
        padding: 70px 0px;
    }
    @media (min-width: 800px) {
        padding: 100px 0px;
    };
    @media (min-width: 1400px) {
        padding: 150px 0px;
       };
`

export const Features = styled.div`

    @media (min-width: 800px) {
    margin: auto;
    padding: 0px 30px;
   }
   @media (min-width: 1400px) {
    max-width: 1204px;
    margin: auto;
    
    padding: 0px 30px;
   }
`

export const F = styled.div`
    margin: 50px 0px;

    @media (min-width: 1024px) {
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
    background-color: #E71561;
    border-radius: 10px;
    }

    &::-moz-progress-bar {
    background-color: #E71561;
    border-radius: 10px;
    }
`
export const PlayerTime = styled.div`
    width: 200px;
`
export const TextBox = styled.div`
    font-family: 'DM Sans', sans-serif;
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
export const PitchTextFormTopBar = styled.div`
    position: relative;
    top: 8px;
    border: 1px solid #405A94;
    border-bottom: none;
    border-radius: 15px 15px 0 0;
    height: 35px;
    width: calc(100% - 22px);
    background-color: #2A3754;
    padding: 5px 20px 5px 0px;
`
export const PitchTextFormBottomBar = styled.div`
    border: 1px solid #405A94;
    border-top: none;
    width: calc(100% - 22px);
    border-radius: 0 0 15px 15px ;
    height: 35px;
    background-color: #2A3754;
    backdrop-filter: blur(40px);
    gap: 10px;
    padding: 5px 20px 5px 0px;
    position: relative;
    top: ${props => props.top};
`
export const Title = styled.span`
    font-weight: 600;
    color: white;
    font-size: 25px;
    @media (min-width: 800px) {
        font-size: 37px;
    };
    @media (min-width: 1400px) {
        font-size: 42px;
    };
`
export const FormTitle = styled.span`
    color: ${props => props.color};
    font-size: ${props => props.fontsize};
`

export const BigTitle = styled.span`
    color: ${props => props.color};
    font-size: 50px;
    font-weight: 600;
    @media (min-width: 600px) {
        font-size: 100px;
    }
    @media (min-width: 800px) {
        font-size: 150px;
    };
    @media (min-width: 1400px) {
        font-size: 200px;
       };
`
export const MidTitle = styled.span`
    font-weight: 600;
    color: ${props => props.color};
    font-size: 26px;
    @media (min-width: 600px) {
        font-size: 36px;
    }
    @media (min-width: 800px) {
        font-size: 46px;
    };
    @media (min-width: 1400px) {
        font-size: 56px;
       };
`
export const FitMeNow = styled.span`
    color: ${props => props.color};
    font-size: 25px;
    @media (min-width: 800px) {
        font-size: 37px;
    };
    @media (min-width: 1400px) {
        font-size: 42px;
       };
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
`
export const Box = styled.div`

`
export const ProfileImage = styled.img`
    width: ${props => props.width || '50px'};
    height: ${props => props.height || '50px'};
    border-radius: 50%;
`

export const Avatar = (props) => {
    return (
        <DContainer
        >
            <DContainer
                display="flex"
                alignItems="center"
                gap="20px"
                margin="0 0 10px 0"
            >
                <ProfileImage src={props.imageSrc} width="70px" height="70px"></ProfileImage>
                {props.comment ? (
                    <>
                        <DContainer
                            display="flex"
                        >
                            <CustomSVG src={HeartIcon} width="20px" height="20px"></CustomSVG>
                            <FormTitle color='white' fontsize="18px">456</FormTitle>
                        </DContainer>
                        <DContainer
                            display="flex"
                        >
                            <CustomSVG src={ChatIcon} width="20px" height="20px"></CustomSVG>
                            <FormTitle color='white' fontsize="18px">1k</FormTitle>
                        </DContainer>
                    </>
                ):(<></>)}
            </DContainer>
            <DContainer
                margom="20px 0 0 0"
            >
                <FormTitle
                    fontsize="15px"
                    color={props.titleState ? "white" : "#3D568C"}
                >{props.avatarTitle}</FormTitle>
            </DContainer>
        </DContainer>
    );
}
