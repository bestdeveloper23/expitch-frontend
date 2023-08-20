import {
  Links, Container, TestButton, RightColumn, Paragraph, Paragraph2, Title, Line, Texts,
  PlayButton, Righttitle, Rightparagraph, Container2, Collapse, List, Feature, Response, Featuredetail,
  Grade, Shadow1, Shadow2, AudioBar, CardContainer, Card, CardIcon, CardTitle, CardParagraph, TrustedContainer, TrustedsubContainer,
   Trusted, Gridbackground, ResponseIcon
} from "./styled";
import { ThemeContext, styled, useTheme } from "styled-components";
import { i18n } from "./../../translate/i18n";
import arrow from "../../assets/images/arrow.svg";
import React, { useState, useEffect } from "react";
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
            <Shadow2 />
            <Righttitle color={theme.colors.gray900} >{i18n.t("about.pitch.title")}</Righttitle>
            <Rightparagraph color={theme.colors.gray900} bordercolor={theme.colors.gray200} bgcolor={theme.colors.gray50}>{i18n.t("about.pitch.paragraph")}
              <Shadow1 />
              <AudioBar src={Audio} alt="audio"></AudioBar>
            </Rightparagraph>

            <Container2>
              <Righttitle color={theme.colors.gray900} >{i18n.t("about.analysis.title")}</Righttitle>
              <Collapse bordercolor={theme.colors.gray200}>
                <List bordercolor={theme.colors.gray200}>
                  <Response>
                    <Feature color={theme.colors.gray800} onClick={handleClick}>
                      {i18n.t("about.analysis.features.title")}
                      <Grade color={theme.colors.green600} bgcolor={theme.colors.green50} className="grade">A+</Grade>
                      <ResponseIcon src={arrow} alt="arrow" />
                    </Feature>
                    <Featuredetail color={theme.colors.primary}>{i18n.t("about.analysis.features.evaluation.title")}</Featuredetail>
                  </Response>
                </List>
                <List bordercolor={theme.colors.gray200}>
                  <Response>
                    <Feature color={theme.colors.gray800} onClick={handleClick}>
                      {i18n.t("about.analysis.barrier.title")}
                      <Grade color={theme.colors.green600} bgcolor={theme.colors.green50} className="grade">A+</Grade>
                      <ResponseIcon src={arrow} alt="arrow" />
                    </Feature>
                    <Featuredetail color={theme.colors.gray700}>{i18n.t("about.analysis.barrier.evaluation.paragraph")}</Featuredetail>
                  </Response>
                </List>
                <List bordercolor={theme.colors.transparent}>
                  <Response>
                    <Feature color={theme.colors.gray800} onClick={handleClick}>
                      {i18n.t("about.analysis.readiness.title")}
                      <Grade color={theme.colors.yellow600} bgcolor={theme.colors.yellow50} className="grade">B+</Grade>
                      <ResponseIcon src={arrow} alt="arrow" />
                    </Feature>
                    <Featuredetail color={theme.colors.primary}>{i18n.t("about.analysis.readiness.evaluation.title")}</Featuredetail>
                    <Featuredetail color={theme.colors.gray700}>{i18n.t("about.analysis.readiness.evaluation.paragraph")}</Featuredetail>
                    <Featuredetail color={theme.colors.primary}>{i18n.t("about.analysis.readiness.recommendation.title")}</Featuredetail>
                    <Featuredetail color={theme.colors.gray700}>{i18n.t("about.analysis.readiness.recommendation.paragraph")}</Featuredetail>
                  </Response>
                </List>
              </Collapse>
            </Container2>
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
