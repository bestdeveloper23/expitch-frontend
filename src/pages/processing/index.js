import {
  Wrapper, SmallTitle, ContainerProcessing, ProcessingProgress, Loading,
  Container3, Card, CardTextDiv, CardText, CardIcon, ProcessingTitle
} from './styled';

import GradeA from "../../assets/images/grade_a.svg"
import GradeB from "../../assets/images/grade_b.svg"
import GradeC from "../../assets/images/grade_c.svg"
import Emoji_robot from "../../assets/images/emoji-robot.svg"

import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { i18n } from "./../../translate/i18n";

const Processing = () => {
  const theme = useTheme();
  const [wizardIndex] = useState('processing');
  const [processstatus] = useState(i18n.t("process.status_processing"));

  return (
    <>
      <Wrapper bgcolor={theme.colors.gray50}>


        {wizardIndex === "processing" &&
          <ContainerProcessing>
            <SmallTitle color='black'> <CardIcon src={Emoji_robot} /> {processstatus}</SmallTitle>
            <ProcessingProgress>
              <Loading bordercolor={theme.colors.primary} />
            </ProcessingProgress>
            <Container3 bordercolor={theme.colors.gray100} bgcolor={theme.colors.white}
              smwidth='400px' mdwidth='500px' lgwidth='586px'
            >
              <ProcessingTitle>{i18n.t("process.title")}</ProcessingTitle>
              <Card>
                <CardIcon src={GradeA}></CardIcon>
                <CardTextDiv>
                  <CardText>{i18n.t("process.paragraph1")}</CardText>
                </CardTextDiv>
              </Card>
              <Card>
                <CardIcon src={GradeB}></CardIcon>
                <CardTextDiv>
                  <CardText>{i18n.t("process.paragraph2")}</CardText>
                </CardTextDiv>
              </Card>
              <Card>
                <CardIcon src={GradeC}></CardIcon>
                <CardTextDiv>
                  <CardText>{i18n.t("process.paragraph3")}</CardText>
                </CardTextDiv>
              </Card>
            </Container3>

          </ContainerProcessing>
        }
      </Wrapper>
    </>
  );
};

export default Processing;