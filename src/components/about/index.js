import { Links, Container, TestButton, RightColumn, Paragraph, Paragraph2, Title, Line, Texts,
  PlayButton, Righttitle, Rightparagraph, Container2, Collapse, List, Feature, Response, Featuredetail, 
  Grade, Shadow1, Shadow2, LoadingBar, CardContainer, Card, CardIcon, CardTitle, CardParagraph, Trusted, Gridbackground } from "./styled";
import { ThemeContext, styled, useTheme } from "styled-components";
import { i18n } from "./../../translate/i18n";
import arrow from "../../assets/images/arrow.svg";
import React, {useState, useEffect} from "react";

export default function About() {
  const theme = useTheme();
  const handleClick = (e) => {
    if(e.target.children[1]){
      if(e.target.children[1].style.transform === "rotateX(180deg)"){
        e.target.children[1].style.transform = "rotateX(0deg)"
      } else {
        e.target.children[1].style.transform = "rotateX(180deg)"
      }
        
    } else {
      
      const grades = document.getElementsByClassName("grade")
        console.log(grades);
        const array = Array.from(grades)
        array.forEach(element => {
          if(element === e.target)
          {
            if(element.parentElement.children[1].style.transform === "rotateX(180deg)")
              element.parentElement.children[1].style.transform = "rotateX(0deg)"
            else element.parentElement.children[1].style.transform = "rotateX(180deg)"
          } else {
            element.parentElement.children[1].style.transform = "rotateX(0deg)"
          }
        });

    }
  }
  return (
    <>
      <Container>
        <Gridbackground src="../../images/grid.svg"></Gridbackground>
        <Line>
          <Texts>
            <Title color={theme.colors.gray900}>{i18n.t("about.title1")}</Title><Title color={theme.colors.primary}>{i18n.t("about.title2")}</Title>
            <Paragraph color={theme.colors.gray900}>{i18n.t("about.paragraph")}</Paragraph>
            <Links>
              <TestButton>{i18n.t("routes.test")}</TestButton><Paragraph2>{i18n.t("about.paragraph2")}</Paragraph2><PlayButton src="../images/play-circle.svg" alt="play"></PlayButton> 
            </Links>
          </Texts>
          <RightColumn>
            <Shadow2/>
            <Righttitle color={theme.colors.gray900}>{i18n.t("about.pitch.title")}</Righttitle>
            <Rightparagraph color={theme.colors.gray900}>{i18n.t("about.pitch.paragraph")}
              <Shadow1/>          
            <LoadingBar src="../../images/loading.svg"></LoadingBar>
            </Rightparagraph>

            <Container2>
              <Righttitle color={theme.colors.gray900}>{i18n.t("about.analysis.title")}</Righttitle>
              <Collapse bordercolor={theme.colors.gray200}>
                <List bordercolor={theme.colors.gray200}>
                  <Response>
                    <Feature color={theme.colors.gray800} onClick={handleClick}>
                      {i18n.t("about.analysis.features.title")}
                      <Grade color={theme.colors.green600} bgcolor={theme.colors.green50} className="grade">A+</Grade>
                      <img src={arrow} alt="arrow" />
                    </Feature>
                    <Featuredetail color={theme.colors.gray700}>{i18n.t("questions.pergunta1.Response")}</Featuredetail>
                  </Response>
                </List>
                <List bordercolor={theme.colors.gray200}>
                  <Response>
                    <Feature color={theme.colors.gray800} onClick={handleClick}>
                      {i18n.t("about.analysis.barrier.title")}
                      <Grade color={theme.colors.green600} bgcolor={theme.colors.green50} className="grade">A+</Grade>
                      <img src={arrow} alt="arrow" />
                    </Feature>
                    <Featuredetail color={theme.colors.gray700}>{i18n.t("questions.pergunta1.Response")}</Featuredetail>
                  </Response>
                </List>
                <List bordercolor={theme.colors.transparent}>
                  <Response>
                    <Feature color={theme.colors.gray800} onClick={handleClick}>
                      {i18n.t("about.analysis.readiness.title")}
                      <Grade color={theme.colors.yellow600} bgcolor={theme.colors.yellow50} className="grade">B+</Grade>
                      <img src={arrow} alt="arrow" />
                    </Feature>
                    <Featuredetail color={theme.colors.gray700}>{i18n.t("questions.pergunta1.Response")}</Featuredetail>
                  </Response>
                </List>
              </Collapse>
            </Container2>
          </RightColumn>
        </Line>
        <CardContainer>
          <Card>
            <CardIcon>{i18n.t("about.card1.icon")}</CardIcon>
            <CardTitle>{i18n.t("about.card1.title")}</CardTitle>
            <CardParagraph>{i18n.t("about.card1.paragraph")}</CardParagraph>
          </Card>
          <Card>
            <CardIcon>{i18n.t("about.card2.icon")}</CardIcon>
            <CardTitle>{i18n.t("about.card2.title")}</CardTitle>
            <CardParagraph>{i18n.t("about.card2.paragraph")}</CardParagraph>
          </Card>
          <Card>
            <CardIcon>{i18n.t("about.card3.icon")}</CardIcon>
            <CardTitle>{i18n.t("about.card3.title")}</CardTitle>
            <CardParagraph>{i18n.t("about.card3.paragraph")}</CardParagraph>
          </Card>
          <Card>
            <CardIcon>{i18n.t("about.card4.icon")}</CardIcon>
            <CardTitle>{i18n.t("about.card4.title")}</CardTitle>
            <CardParagraph>{i18n.t("about.card4.paragraph")}</CardParagraph>
          </Card>
        </CardContainer>
      </Container>
        <Trusted src="../../images/trusted-by.svg"></Trusted>
    </>
  );
}
