import styled from "styled-components";
import HeartIcon from '../../assets/images/heart.svg'
import ChatIcon from '../../assets/images/chat-bubble-oval-left.svg'

export const Container = styled.div`
    background: #111827;
    padding-bottom: 100px;
`;

export const Title = styled.div`
    padding-bottom: 100px;
    text-align: center;
`

export const Features = styled.div`
    margin-top: 50px;
`

export const F = styled.div`
    margin-top: 50px;
    padding-left: 10%;
    padding-right: 10%;

    @media (min-width: 1024px) {
        min-height: 80px;
        display: grid;
        grid-template-columns: 50% 50%;
        gap: 10%;
       }
`
export const PitchForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
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
    max-width: 100%;
    height: ${props => props.height};
    border: 1px solid #405A94;
    background-color: #1E2A45;
    border-top: ${props => props.borderTop};
    border-left: ${props => props.borderLeft};
    border-right: ${props => props.borderRight};
    border-bottom: ${props => props.borderBottom};
    padding: 20px 30px 20px 30px;
    white-space: pre-line;
    word-wrap: break-word;
    border-radius: ${props => props.borderRadius};
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
export const FormTitle = styled.span`
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
`
export const GridRows = styled.div`
    display: grid;
    grid-template-rows: repeat(${props => props.rows}, minmax(0, 1fr));
`
export const GridColumns = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.cols}, minmax(0, 1fr));
`
export const Rotate = styled.div`
    transform: rotate(${props => props.rotate}deg);
    // width: 0px;
    position: relative;
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
    width: ${props => props.size || '50'}px;
    height: ${props => props.size || '50'}px;
    border: 1px solid ${props => props.color || 'green'};
    background-color: ${props => props.backgroundColor || 'rgba(0,255,0,0.1)'};
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
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    flex-direction: ${props =>props.flexDirection};
    flex-wrap: ${props =>props.flexWrap};
    align-content: ${props =>props.alignContent};
    gap: ${props =>props.gap};
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
                            <FormTitle color='white' fontSize="18px">456</FormTitle>
                        </DContainer>
                        <DContainer
                            display="flex"
                        >
                            <CustomSVG src={ChatIcon} width="20px" height="20px"></CustomSVG>
                            <FormTitle color='white' fontSize="18px">1k</FormTitle>
                        </DContainer>
                    </>
                ):(<></>)}
            </DContainer>
            <DContainer
                margom="20px 0 0 0"
            >
                <FormTitle
                    fontSize="15px"
                    color={props.titleState ? "white" : "#3D568C"}
                >{props.avatarTitle}</FormTitle>
            </DContainer>
        </DContainer>
    );
}
