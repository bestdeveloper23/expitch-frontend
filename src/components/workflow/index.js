
import { Container, Title, Container2, VideoDiv, Video, Play, PlayButton, Playtag, 
 Container3, Card, CardTextDiv, CardNumber, CardText, CardIcon } from "./styled";
import { i18n } from "./../../translate/i18n";
import { useTheme } from "styled-components";

export default function Workflow() {
 const theme = useTheme();
 return (
  <Container>
   <Title>{i18n.t("workflow.title")}</Title>
   <Container2>
    <VideoDiv>
     {/* <Video muted autoPlay loop controls> */}
     <Video src="./video/Render.mp4" muted controls alt="test" ></Video>

     <Play>
      <PlayButton>Play</PlayButton>
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
      <CardIcon>{i18n.t("workflow.card1.icon")}</CardIcon>
     </Card>
     <Card color={theme.colors.gray0}>
      <CardNumber color={theme.colors.primary}>2</CardNumber>
      <CardTextDiv>
       <CardText color={theme.colors.primary}>{i18n.t("workflow.card2.highlight")}</CardText>
       <CardText color={theme.colors.gray900}>{i18n.t("workflow.card2.paragraph")}</CardText>
      </CardTextDiv>
      <CardIcon>{i18n.t("workflow.card2.icon")}</CardIcon>
     </Card>
     <Card color={theme.colors.gray0}>
      <CardNumber color={theme.colors.primary}>3</CardNumber>
      <CardTextDiv>
       <CardText color={theme.colors.primary}>{i18n.t("workflow.card3.highlight")}</CardText>
       <CardText color={theme.colors.gray900}>{i18n.t("workflow.card3.paragraph")}</CardText>
      </CardTextDiv>
      <CardIcon>{i18n.t("workflow.card3.icon")}</CardIcon>
     </Card>
     <Card color={theme.colors.gray0}>
      <CardNumber color={theme.colors.primary}>4</CardNumber>
      <CardTextDiv>
       <CardText color={theme.colors.gray900}>{i18n.t("workflow.card4.paragraph1")}</CardText>
       <CardText color={theme.colors.primary}>{i18n.t("workflow.card4.highlight")}</CardText>
       <CardText color={theme.colors.gray900}>{i18n.t("workflow.card4.paragraph2")}</CardText>
      </CardTextDiv>
      <CardIcon>{i18n.t("workflow.card4.icon")}</CardIcon>
     </Card>
    </Container3>
   </Container2>
  </Container>
 )
}
