
import { Container, Title, Container2, VideoDiv, Video, Play, PlayButton, Playtag, 
 Container3, Card, CardTextDiv, CardNumber, CardText, CardIcon } from "./styled";
import { i18n } from "./../../translate/i18n";
import { useTheme } from "styled-components";
import { useState, useEffect } from "react";
import Videolink from "../../assets/video/Render.mp4";
import Emoji_mike from "../../assets/images/emoji-mike.svg";
import Emoji_document from "../../assets/images/emoji-document.svg";
import Emoji_robot from "../../assets/images/emoji-robot.svg";
import Emoji_score from "../../assets/images/emoji-score.svg";
import PlayButtonIcon from "../../assets/images/play.svg";
import PauseButtonIcon from "../../assets/images/pause.svg"

export default function Workflow() {
 const theme = useTheme();
 const [iconVisible, setIconVisible] = useState(true);
 const [buttonVisible, setButtonVisible] = useState(true);
 const handleClick = () => {
  setButtonVisible(!buttonVisible);   
  // Perform any desired logic or state updates here
 };
 const MouseEnter = () => {
  setIconVisible(true);
 };
 const MouseLeave = () => {
    setIconVisible(false);
 };

 useEffect(() => {
  if(!buttonVisible)document.getElementById("video").play();
  else document.getElementById("video").pause();
}, [buttonVisible]);

 return (
  <Container>
   <Title>{i18n.t("workflow.title")}</Title>
   <Container2>
    <VideoDiv>
     {/* <Video muted autoPlay loop controls> */}
     <Video src={Videolink} muted alt="test" id="video"></Video>

     <Play>
      <PlayButton isvisible={buttonVisible} iconvisible={iconVisible} onClick={handleClick} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}><img src={PlayButtonIcon} alt="play"></img></PlayButton>
      <PlayButton isvisible={!buttonVisible} iconvisible={iconVisible} onClick={handleClick} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}><img src={PauseButtonIcon} alt="how it works"></img></PlayButton>
      <Playtag color={theme.colors.white}>{i18n.t("workflow.button.title")}</Playtag>
     </Play>
    </VideoDiv>
    <Container3>
     <Card color={theme.colors.gray0}>
      <CardNumber color={theme.colors.primary}>1</CardNumber>
      <CardTextDiv>
       <CardText color={theme.colors.primary} >{i18n.t("workflow.card1.highlight")}</CardText>
       <CardText color={theme.colors.gray900}>{i18n.t("workflow.card1.paragraph")}</CardText>
      </CardTextDiv>
      <CardIcon src={Emoji_mike} />
     </Card>
     <Card color={theme.colors.gray0}>
      <CardNumber color={theme.colors.primary}>2</CardNumber>
      <CardTextDiv>
       <CardText color={theme.colors.primary}>{i18n.t("workflow.card2.highlight")}</CardText>
       <CardText color={theme.colors.gray900}>{i18n.t("workflow.card2.paragraph")}</CardText>
      </CardTextDiv>
      <CardIcon src={Emoji_document} />
     </Card>
     <Card color={theme.colors.gray0}>
      <CardNumber color={theme.colors.primary}>3</CardNumber>
      <CardTextDiv>
       <CardText color={theme.colors.primary}>{i18n.t("workflow.card3.highlight")}</CardText>
       <CardText color={theme.colors.gray900}>{i18n.t("workflow.card3.paragraph")}</CardText>
      </CardTextDiv>
      <CardIcon src={Emoji_robot} />
     </Card>
     <Card color={theme.colors.gray0}>
      <CardNumber color={theme.colors.primary}>4</CardNumber>
      <CardTextDiv>
       <CardText color={theme.colors.gray900}>{i18n.t("workflow.card4.paragraph1")}</CardText>
       <CardText color={theme.colors.primary}>{i18n.t("workflow.card4.highlight")}</CardText>
       <CardText color={theme.colors.gray900}>{i18n.t("workflow.card4.paragraph2")}</CardText>
      </CardTextDiv>
      <CardIcon src={Emoji_score} />
     </Card>
    </Container3>
   </Container2>
  </Container>
 )
}
