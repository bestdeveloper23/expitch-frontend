import { Container, PitchForm,Title, TextBox, DContainer, FormTitle, FitMeNow, CustomSVG, Grade, Player, PlayerProgress, PlayerTime } from './styled'

import SpeakerWaveIcon from "../../assets/images/speaker-wave.svg"
import PlayIcon from "../../assets/images/play-circle.svg"
import MoreIcon from "../../assets/images/ellipsis-horizontal.svg"
import HeartIcon from "../../assets/images/heart.svg"
import ChatIcon from "../../assets/images/chat-bubble-oval-left.svg"

export default function Results(){
    return (
        <Container>
            <PitchForm>
            <Title>
                Pitch
            </Title>
            <TextBox
                borderradius="15px"
                width="calc(100% - 60px)"
            >
                <DContainer
                    display="flex"
                    justifycontent="space-between"
                    width="100%"
                >
                    <PitchForm>
                        <FormTitle
                        color="#E71561"
                        fontsize="15px"
                        >Oliva Martinez</FormTitle>
                        <FitMeNow
                        color="White"
                        >
                        FitMeNow
                        </FitMeNow>
                        <DContainer
                            display="flex"
                            gap="20px"
                        >
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
                        </DContainer>
                    </PitchForm>
                    <DContainer>
                        <DContainer
                        display="flex"
                        justifycontent="flex-end"
                        >
                        <FitMeNow
                            color="green"
                        >
                            89<FitMeNow color="#415C96">/100</FitMeNow>
                        </FitMeNow></DContainer>
                        <DContainer
                        display="flex"
                        justifycontent="flex-end"
                        >
                        <Grade
                            color="#13B718"
                            backgroundcolor="#1F6E52"
                        >A</Grade>
                        </DContainer>
                    </DContainer>
                </DContainer>
            </TextBox>
            <Player>
                <img src={PlayIcon} alt={PlayIcon}/>
                <PlayerTime>
                0:05 / 0:56
                </PlayerTime>
                <PlayerProgress
                id="playerprogress"
                value='30'
                max='100'
                />
                <img src={SpeakerWaveIcon} alt={SpeakerWaveIcon}/>
                <img src={MoreIcon} alt={MoreIcon}/>
            </Player>
            <TextBox
                height="200px"
                borderradius="15px"
            >
                Hi everyone! My name is Olivia, and I'm here to introduce you to FitMeNow, the revolutionary fitness app designed to transform your workout routine. Are you tired of feeling unmotivated and struggling to reach your fitness goals? FitMeNow is here to change that!<br/><br/>
                We've identified a common problem among individuals who want to lead a healthier lifestyle: lack of personalized guidance and motivation. Many people find it challenging to stay consistent with their exercise routines or don't know where to begin. FitMeNow is the solution to these obstacles.
            </TextBox>
            </PitchForm>
        </Container>
    );
}