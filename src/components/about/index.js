import {
  Links, Container, TestButton, RightColumn, Paragraph, Paragraph2, Title, Line, Texts,
  PlayButton, Formimage, CardContainer, Card, CardIcon, CardTitle, CardParagraph, TrustedContainer, TrustedsubContainer,
   Trusted, Gridbackground
} from "./styled";
import { useTheme } from "styled-components";
import { i18n } from "./../../translate/i18n";
import arrow from "../../assets/images/arrow.svg";
import React from "react";
import Grid from "../../assets/images/grid.svg";
import Play_circle from "../../assets/images/play-circle.svg";
import Audio from "../../assets/images/loading.svg";
import Emoji_Speech from "../../assets/images/emoji-speech.svg";
import Emoji_muscle from "../../assets/images/emoji-muscle.svg";
import Emoji_okay from "../../assets/images/emoji-okay.svg";
import Emoji_hundred from "../../assets/images/emoji-hundred.svg";
import About1 from "../../assets/images/about/1.svg";
import About2 from "../../assets/images/about/2.svg";
import About3 from "../../assets/images/about/3.svg";
import About4 from "../../assets/images/about/4.svg";
import About5 from "../../assets/images/about/5.svg";
import About6 from "../../assets/images/about/6.svg";
import About7 from "../../assets/images/about/7.svg";
import HeroImage from "../../assets/images/hero-img.webp";

export default function About() {
  const theme = useTheme();
  const handleClick = (e) => {
    if (e.target.children[1]) {
      if (e.target.children[1].style.transform === "rotateX(180deg)") {
        e.target.children[1].style.transform = "rotateX(0deg)"
      } else {
        e.target.children[1].style.transform = "rotateX(180deg)"
      }

    }
  }
  return (
    <>
      <Gridbackground src={Grid} alt="grid"></Gridbackground>
      <Container>
        <Line>
          <Texts>
            <Title color={theme.colors.gray900} >{i18n.t("about.title1")}</Title>
            <Title color={theme.colors.primary} >{i18n.t("about.title2")}</Title>
            <Paragraph color={theme.colors.gray900} >{i18n.t("about.paragraph")}</Paragraph>
            <Links >
              <TestButton href={"/test"} color={theme.colors.white} bgcolor={theme.colors.primary}>{i18n.t("routes.test")}</TestButton>
              <Paragraph2>{i18n.t("about.paragraph2")}</Paragraph2>
              <PlayButton src={Play_circle} alt="play"></PlayButton>
            </Links>
          </Texts>
          <RightColumn>
            <Formimage src={HeroImage}></Formimage>
          </RightColumn>
        </Line>
        <CardContainer>
          <Card>
            <CardIcon src={Emoji_Speech} />
            <CardTitle color={theme.colors.gray900} >{i18n.t("about.card1.title")}</CardTitle>
            <CardParagraph color={theme.colors.gray500} >{i18n.t("about.card1.paragraph")}</CardParagraph>
          </Card>
          <Card>
            <CardIcon src={Emoji_muscle} />
            <CardTitle color={theme.colors.gray900} >{i18n.t("about.card2.title")}</CardTitle>
            <CardParagraph color={theme.colors.gray500} >{i18n.t("about.card2.paragraph")}</CardParagraph>
          </Card>
          <Card>
            <CardIcon src={Emoji_okay} />
            <CardTitle color={theme.colors.gray900} >{i18n.t("about.card3.title")}</CardTitle>
            <CardParagraph color={theme.colors.gray500} >{i18n.t("about.card3.paragraph")}</CardParagraph>
          </Card>
          <Card>
            <CardIcon src={Emoji_hundred} />
            <CardTitle color={theme.colors.gray900} >{i18n.t("about.card4.title")}</CardTitle>
            <CardParagraph color={theme.colors.gray500} >{i18n.t("about.card4.paragraph")}</CardParagraph>
          </Card>
        </CardContainer>
      </Container>
      <TrustedContainer bgcolor={theme.colors.gray900}>
        <TrustedsubContainer>
          <Trusted src={About1} alt="icon"></Trusted>
          <Trusted src={About2} alt="icon"></Trusted>
          <Trusted src={About3} alt="icon"></Trusted>
          <Trusted src={About4} alt="icon"></Trusted>
          <Trusted src={About5} alt="icon"></Trusted>
          <Trusted src={About6} alt="icon"></Trusted>
          <Trusted src={About7} alt="icon"></Trusted>
        </TrustedsubContainer>
      </TrustedContainer>
    </>
  );
}
