import {
  Wrapper,
  SmallTitle,
  ContainerProcessing,
  ProcessingProgress,
  Loading,
  Container3,
  Card,
  CardTextDiv,
  CardText,
  CardIcon,
  ProcessingTitle,
  Button,
  DContainer,
  CustomSVG,
} from "./styled";

import GradeA from "../../assets/images/grade_a.svg";
import GradeB from "../../assets/images/grade_b.svg";
import GradeC from "../../assets/images/grade_c.svg";
import Emoji_robot from "../../assets/images/emoji-robot.svg";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { i18n } from "./../../translate/i18n";
import { useRecaptcha } from "../../core/hooks/useRecaptcha";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import RightArrowIcon from "../../assets/images/arrow-right.svg";

const Waiting = () => {
  const location = useLocation();
  const { email, pitchText, pitchfile } = location.state || {};
  // Todo: Save file
  const { getToken } = useRecaptcha("evaluatePitchRequest");
  const theme = useTheme();
  const [wizardIndex] = useState("waiting");
  const [processstatus, setprocessstatus] = useState(
    i18n.t("process.status_waiting")
  );
  const navigate = useNavigate();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    immediateFunction();
  }, []);

  // Begin POST call
  const immediateFunction = async () => {
    const recaptchaToken =
      process.env.REACT_APP_NODE_ENV === "development" ? "" : await getToken();

    const payload = {
      email: email,
      pitchText: pitchText,
      modelName: "main",
      recaptchaToken: recaptchaToken,
    };
    // const fileUrl = URL.createObjectURL(pitchText);
    axios
      .post(
        `${process.env.REACT_APP_API_ENDPOINTS}/pitch/getPitchEvalForText`,
        payload,
        {}
      )
      .then((response) => {
        // Handle the successful response
        if (response.data && typeof response.data === "object") {
          const responseData = response.data;
          navigate("/result", { state: { responseData } });
        } else {
          console.log(
            "Unexpected data format:",
            JSON.stringify(response, null, 2)
          );
        }
      })
      .catch((error) => {
        // console.error('Error:', error.message, payload);
        // console.log(process.env.REACT_APP_API_ENDPOINTS)
        console.log(error.response.data.message);
        if (error.response.data.message) {
          handleError(error.response.data.message);
        }
      });
  };

  const handleError = (errorMessage) => {
    setprocessstatus(errorMessage);
    setHasError(true);
  };
  // End post call

  const handleUploadAgain = () => {
    navigate("/upload", { state: { email: email } });
  };

  return (
    <>
      <Wrapper bgcolor={theme.colors.gray50}>
        {wizardIndex === "waiting" && (
          <ContainerProcessing>
            <SmallTitle color="black">
              {" "}
              <CardIcon src={Emoji_robot} /> {processstatus}
            </SmallTitle>

            {hasError ? (
              <Button
                onClick={handleUploadAgain}
                isenable={"valid"}
                bgcolor={theme.colors.primary}
                bordercolor={theme.colors.primary}
                color={theme.colors.white}
              >
                <DContainer
                  display="flex"
                  justifycontent="center"
                  alignitems="center"
                >
                  {"Try again"}
                  <CustomSVG
                    src={RightArrowIcon}
                    alt={RightArrowIcon}
                  ></CustomSVG>
                </DContainer>
              </Button>
            ) : (
              <ProcessingProgress>
                <Loading bordercolor={theme.colors.primary} />
              </ProcessingProgress>
            )}

            <Container3
              bordercolor={theme.colors.gray100}
              bgcolor={theme.colors.white}
              smwidth="400px"
              mdwidth="500px"
              lgwidth="586px"
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
        )}
      </Wrapper>
    </>
  );
};

export default Waiting;
