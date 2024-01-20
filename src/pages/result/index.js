import {
  Wrapper,
  MainContainer,
  ColorBgContainer,
  F,
  Player,
  TextBox,
  Title,
  SmallTitle,
  FormTitle,
  Grade,
  DContainer,
  Label,
  Required,
  EmailInput,
  ContainerUploading,
  UploadingBox,
  CustomSVG,
  UploadText,
  Button,
  Button1,
  RecordingBox,
  RoundButton,
  ContainerProcessing,
  ProcessingProgress,
  ButtonDiv,
  Collapse,
  List,
  Feature,
  ResponseIcon,
  Response,
  Featuredetail,
  EmailInputContainer,
  SubForm,
  GradeContainer,
  GradeTitle,
  Score,
  ScoreContainer,
  GradeResult,
  PitchTextFormBottomBar,
  FormText,
  Audio,
  Loading,
  Container3,
  Card,
  CardTextDiv,
  CardText,
  CardIcon,
  ProcessingTitle,
  FeatureText,
  ResultContainer,
  ResultMainContainer,
  ResultSubContainer,
  ResultTitleContainer,
  Formimage,
  Tooltip,
  Paragraph2,
  PlayButton,
  Links,
  TermsLink,
  ModalOverlay,
  ModalBox,
  CloseModalButton,
  EditButton,
  FileNameInput,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalBodyLabel,
  ModalBodyInput,
  ModalFooter,
  ModalFooterCloseButton,
  ModalFooterSubmitButton,
  ModalForm,
  ModalElement
} from "./styled";

import RightArrowIcon from "../../assets/images/arrow-right.svg";
import UploadIcon from "../../assets/images/arrow-up-tray.svg";
import MicIcon from "../../assets/images/microphone.svg";
import StopRecording from "../../assets/images/stop_recording.svg";
import arrow from "../../assets/images/arrowprimary.svg";
import DownloadIcon from "../../assets/images/download_result.svg";
import CopyIcon from "../../assets/images/copy_result.svg";
import GradeA from "../../assets/images/grade_a.svg";
import GradeB from "../../assets/images/grade_b.svg";
import GradeC from "../../assets/images/grade_c.svg";
import PrinterIcon from "../../assets/images/printer.svg";
import tooltipIcon from "../../assets/images/tooltip-icon.svg";
import Emoji_robot from "../../assets/images/emoji-robot.svg";
import Play_circle from "../../assets/images/play-circle.svg";
import EditIcon from "../../assets/images/edit_input.svg";

import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setFile } from "../../actions/pitch";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { useTheme } from "styled-components";
import { i18n } from "./../../translate/i18n";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRecaptcha } from "../../core/hooks/useRecaptcha";
import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const { responseData } = location.state || {};
  // console.log(responseData);
  const theme = useTheme();
  const [pitchcontent, setPitchContent] = useState("");
  const [totalScore, setTotalScore] = useState("");
  const contentRef = useRef(null);

  const [featuresArray, setFeaturesArray] = useState([]);
  const [readinessArray, setReadinessArray] = useState([]);
  const [barrierToEntryArray, setBarrierToEntryArray] = useState([]);
  const [adoptionArray, setAdoptionArray] = useState([]);
  const [supplyChainArray, setSupplyChainArray] = useState([]);
  const [marketSizeArray, setMarketSizeArray] = useState([]);
  const [entrepreneurExperienceArray, setEntrepreneurExperienceArray] =
    useState([]);
  const [financialExpectationArray, setFinancialExpectationArray] = useState(
    []
  );
  const [pitchTitle, setPitchTitle] = useState(i18n.t("result.title"));
  const [pitchId, setPitchId] = useState("");

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const pitchNamechanged = (event) => {
    var key = event.key;
    console.log('Key:', key);
  }

  const submitChangeName = async () => {
    const changedFileName = document.querySelector("#resultpitchfileName").value;
    axios
      .post(
        `${process.env.REACT_APP_API_ENDPOINTS}/pitch/updatePitchFileName`,
        {_id:pitchId, fileName: changedFileName},
        {}
      )
      .then((response) => {
        // Handle the successful response
        
        setPitchTitle(changedFileName);
        setShowModal(false);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }

  const showResults = () => {
    if (responseData) {
      const pitchObjectId = responseData.pitch._id;
      setPitchId(pitchObjectId);
      console.log(responseData.pitch._id)
      setPitchContent(responseData.pitch.pitchText);
      const evaluationSections = responseData.evaluation;
      let scores = 0;
      let valuesArray = [];

      // window.history.pushState({}, '', '/result?success=true');

      // Loop through each section of the evaluation
      Object.keys(evaluationSections).forEach((section) => {
        const currentSection = evaluationSections[section];

        switch (section) {
          case "FeatureBenefits":
            setFeaturesArray([
              currentSection.LetterGrade,
              currentSection.Evaluation,
              currentSection.Recommendations,
            ]);
            break;

          case "Readiness":
            setReadinessArray([
              currentSection.LetterGrade,
              currentSection.Evaluation,
              currentSection.Recommendations,
            ]);
            break;

          case "BarrierToEntry":
            setBarrierToEntryArray([
              currentSection.LetterGrade,
              currentSection.Evaluation,
              currentSection.Recommendations,
            ]);
            break;

          case "Adoption":
            setAdoptionArray([
              currentSection.LetterGrade,
              currentSection.Evaluation,
              currentSection.Recommendations,
            ]);
            break;

          case "SupplyChain":
            setSupplyChainArray([
              currentSection.LetterGrade,
              currentSection.Evaluation,
              currentSection.Recommendations,
            ]);
            break;

          case "MarketSize":
            setMarketSizeArray([
              currentSection.LetterGrade,
              currentSection.Evaluation,
              currentSection.Recommendations,
            ]);
            break;

          case "EntrepreneurExperience":
            setEntrepreneurExperienceArray([
              currentSection.LetterGrade,
              currentSection.Evaluation,
              currentSection.Recommendations,
            ]);
            break;

          case "FinancialExpectations":
            setFinancialExpectationArray([
              currentSection.LetterGrade,
              currentSection.Evaluation,
              currentSection.Recommendations,
            ]);
            break;

          default:
            console.log("Invalid section");
            break;
        }

        // Add scores based on letter grades
        switch (currentSection.LetterGrade) {
          case "A+":
            scores += 10;
            break;
          case "A":
            scores += 9;
            break;
          case "A-":
            scores += 8;
            break;
          case "B+":
            scores += 6;
            break;
          case "B":
            scores += 5;
            break;
          case "B-":
            scores += 4;
            break;
          case "C+":
            scores += 2;
            break;
          case "C":
            scores += 1;
            break;
          default:
            break;
        }
      });

      //console.log(valuesArray);
      //setResult(valuesArray);
      setTotalScore(scores);
    } else {
      console.log(
        "Unexpected data format:",
        JSON.stringify(responseData, null, 2)
      );
    }
  };
  const createGradeBadge = (grade) => {
    var color = "";
    if (grade === undefined) return null;
    if (grade[0] === "A") {
      color = "green";
    } else if (grade[0] === "B") {
      color = "orange";
    } else if (grade[0] === "C") {
      color = "red";
    } else {
      color = "red";
    }

    const gradeColor = theme.colors[color + "600"];
    const gradeBorderColor = theme.colors[color + "200"];
    const gradeBgColor = theme.colors[color + "50"];

    return (
      <GradeResult
        color={gradeColor}
        bordercolor={gradeBorderColor}
        bgcolor={gradeBgColor}
      >
        {grade}
      </GradeResult>
    );
  };

  const handleClick = (e) => {
    if (e.target.children[2]) {
      if (e.target.children[2].style.transform === "rotateX(180deg)") {
        e.target.children[2].style.transform = "rotateX(0deg)";
      } else {
        e.target.children[2].style.transform = "rotateX(180deg)";
      }
    } else if (e.target.parentElement.children[1]) {
      if (
        e.target.parentElement.children[2].style.transform === "rotateX(180deg)"
      ) {
        e.target.parentElement.children[2].style.transform = "rotateX(0deg)";
      } else {
        e.target.parentElement.children[2].style.transform = "rotateX(180deg)";
      }
    } else if (e.target.parentElement.parentElement.parentElement.children[1]) {
      if (
        e.target.parentElement.parentElement.parentElement.children[2].style
          .transform === "rotateX(180deg)"
      ) {
        e.target.parentElement.parentElement.parentElement.children[2].style.transform =
          "rotateX(0deg)";
      } else {
        e.target.parentElement.parentElement.parentElement.children[2].style.transform =
          "rotateX(180deg)";
      }
    }
    console.log(e);
  };

  const CopytoClipboard = (textToCopy) => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(function () {
        console.log("Text copied to clipboard successfully");
      })
      .catch(function (error) {
        console.error("Error copying text to clipboard:", error);
      });
  };

  const downloadTextAsWordFile = (text) => {
    const blob = new Blob([text], { type: "text/plain" });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "pitch.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const saveAsPdf = () => {
    window.scrollTo(0, 0);

    const accordions = document.querySelectorAll("details");
    accordions.forEach((accordion) => {
      accordion.setAttribute("open", "");
    });

    setTimeout(() => {
      html2canvas(document.body, {
        windowWidth: document.body.scrollWidth,
        windowHeight: document.body.scrollHeight,
        scale: 1,
      }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        const pages = Math.ceil(pdfHeight / pdf.internal.pageSize.getHeight());

        for (let i = 0; i < pages; i++) {
          if (i > 0) pdf.addPage();

          pdf.addImage(
            imgData,
            "PNG",
            0,
            -i * pdf.internal.pageSize.getHeight(),
            pdfWidth, // Adjusted width to fit the pdf page width
            pdfHeight // Adjusted height to maintain aspect ratio
          );
        }

        pdf.save("Expitch-CFA-Analysis.pdf");

        accordions.forEach((accordion) => {
          accordion.removeAttribute("open");
        });
      });
    }, 0);
  };

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    showResults();
  }, []);

  useEffect(() => {
    function noBack() {
      // Push the start page onto the history stack twice
      window.history.pushState({ page: "startPage" }, "", window.location.href);
      window.history.pushState({ page: "startPage" }, "", window.location.href);

      window.onpopstate = function (event) {
        if (event.state && event.state.page === "startPage") {
          // If we are on the start page, push it again onto the stack
          window.history.pushState(
            { page: "startPage" },
            "",
            window.location.href
          );
        }
      };
    }

    noBack();
    return () => {
      window.onpopstate = null;
    };
  });

  return (
    <>
      <Wrapper bgcolor={theme.colors.gray50}>
        <>
          <ResultTitleContainer>
            <GradeContainer bgcolor="transparent">
              <GradeTitle bgcolor={theme.colors.white}>
                <FormTitle
                  fontsizes={theme.typography.h4.size}
                  color={theme.colors.gray900}
                  fontweights={theme.typography.h4.fontWeight}
                  font={theme.typography.h4.font}
                >
                  {pitchTitle}
                </FormTitle>

                <EditButton src={EditIcon} onClick={openModal}></EditButton>

                {/* Modal part */}

                <ModalOverlay isOpen={showModal} onClick={closeModal}>
                  <ModalBox onClick={e => e.stopPropagation()}>
                    <ModalHeader>
                      <ModalTitle>Change FileName</ModalTitle>
                      <CloseModalButton onClick={closeModal}>×</CloseModalButton>
                    </ModalHeader>
                    <ModalBody>
                      <ModalElement>
                        <ModalBodyLabel>PitchFileName : </ModalBodyLabel>
                        <ModalBodyInput id="resultpitchfileName" type="text" onKeyDown={pitchNamechanged} />
                      </ModalElement>
                    </ModalBody>
                    <ModalFooter>
                      <ModalFooterCloseButton onClick={closeModal}>Close</ModalFooterCloseButton>
                      <ModalFooterSubmitButton onClick={submitChangeName}>Save</ModalFooterSubmitButton>
                    </ModalFooter>


                  </ModalBox>
                </ModalOverlay>

                {/* Modal part */}

              </GradeTitle>
              <ScoreContainer gap="20px">
                <ButtonDiv gap="5px" onClick={() => saveAsPdf()}>
                  <CustomSVG src={DownloadIcon}></CustomSVG>
                  <FormTitle color={theme.colors.gray500}>Save PDF</FormTitle>
                </ButtonDiv>
                <ButtonDiv gap="5px" onClick={() => handlePrint()}>
                  <CustomSVG src={PrinterIcon}></CustomSVG>
                  <FormTitle color={theme.colors.gray500}>Print</FormTitle>
                </ButtonDiv>
              </ScoreContainer>
            </GradeContainer>
          </ResultTitleContainer>

          <ResultContainer ref={contentRef}>
            <ResultMainContainer gap="20px">
              <TextBox
                borderradius="15px"
                width="calc(100% - 60px)"
                bgcolor={theme.colors.gray50}
                color={theme.colors.gray500}
                bordercolor={theme.colors.gray200}
              >
                <GradeContainer bgcolor={theme.gray50}>
                  <GradeTitle>
                    <Grade
                      color={
                        totalScore >= 64
                          ? theme.colors.green600
                          : totalScore >= 32
                            ? theme.colors.orange600
                            : theme.colors.red600
                      }
                      bordercolor={
                        totalScore >= 64
                          ? theme.colors.green200
                          : totalScore >= 32
                            ? theme.colors.orange200
                            : theme.colors.red200
                      }
                      backgroundcolor={
                        totalScore >= 64
                          ? theme.colors.green50
                          : totalScore >= 32
                            ? theme.colors.orange50
                            : theme.colors.red50
                      }
                    >
                      {totalScore >= 80
                        ? "A+"
                        : totalScore >= 72
                          ? "A"
                          : totalScore >= 64
                            ? "A-"
                            : totalScore >= 48
                              ? "B+"
                              : totalScore >= 40
                                ? "B"
                                : totalScore >= 32
                                  ? "B-"
                                  : totalScore >= 16
                                    ? "C+"
                                    : totalScore >= 8
                                      ? "C"
                                      : "C-"}
                    </Grade>
                    <FormTitle
                      color={
                        totalScore >= 64
                          ? theme.colors.green600
                          : totalScore >= 32
                            ? theme.colors.orange600
                            : theme.colors.red600
                      }
                      padding="10px"
                    >
                      {totalScore >= 64
                        ? i18n.t("result.slogonA")
                        : totalScore >= 32
                          ? i18n.t("result.slogonB")
                          : i18n.t("result.slogonC")}
                    </FormTitle>
                  </GradeTitle>
                  <ScoreContainer>
                    <Score
                      color={
                        totalScore >= 64
                          ? theme.colors.green600
                          : totalScore >= 32
                            ? theme.colors.orange600
                            : theme.colors.red600
                      }
                    >
                      {Math.round(totalScore / 0.8) + "%"}
                    </Score>
                  </ScoreContainer>
                </GradeContainer>
              </TextBox>

              <p>
                <Title color={theme.colors.gray900}>
                  {i18n.t("result.titleL")}
                </Title>
                <Title color={theme.colors.gray500}>
                  {i18n.t("result.titleR")}
                </Title>
              </p>

              <Collapse id="results" bordercolor={theme.colors.gray200}>
                <List bordercolor={theme.colors.gray200}>
                  <Response>
                    <Feature color={theme.colors.gray500} onClick={handleClick}>
                      <FeatureText>
                        {i18n.t("result.features.title")}
                        <Tooltip tooltip={i18n.t("result.features.tooltip")}>
                          <CustomSVG src={tooltipIcon} />
                        </Tooltip>
                      </FeatureText>
                      {createGradeBadge(featuresArray[0] && featuresArray[0])}
                      <ResponseIcon src={arrow} alt="arrow" />
                    </Feature>
                    <Featuredetail color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.evaluation.title")}
                    </Featuredetail>
                    <Featuredetail color={theme.colors.gray500}>
                      {featuresArray[1] && featuresArray[1]}
                    </Featuredetail>
                    <Featuredetail color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.recommendation.title")}
                    </Featuredetail>
                    <Featuredetail color={theme.colors.gray500}>
                      {featuresArray[2] && featuresArray[2]}
                    </Featuredetail>
                  </Response>
                </List>

                <List bordercolor={theme.colors.gray200}>
                  <Response>
                    <Feature
                      color={theme.colors.gray500}
                      onClick={handleClick}
                      tooltip={i18n.t("result.readiness.tooltip")}
                    >
                      <FeatureText>
                        {i18n.t("result.readiness.title")}
                        <Tooltip tooltip={i18n.t("result.readiness.tooltip")}>
                          <CustomSVG src={tooltipIcon} />
                        </Tooltip>
                      </FeatureText>
                      {createGradeBadge(readinessArray[0] && readinessArray[0])}
                      <ResponseIcon src={arrow} alt="arrow" />
                    </Feature>
                    <Featuredetail color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.evaluation.title")}
                    </Featuredetail>
                    <Featuredetail color={theme.colors.gray500}>
                      {readinessArray[1] && readinessArray[1]}
                    </Featuredetail>
                    <Featuredetail color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.recommendation.title")}
                    </Featuredetail>
                    <Featuredetail color={theme.colors.gray500}>
                      {readinessArray[2] && readinessArray[2]}
                    </Featuredetail>
                  </Response>
                </List>

                <List bordercolor={theme.colors.gray200}>
                  <Response>
                    <Feature
                      color={theme.colors.gray500}
                      onClick={handleClick}
                      tooltip={i18n.t("result.barrier.tooltip")}
                    >
                      <FeatureText>
                        {i18n.t("result.barrier.title")}
                        <Tooltip tooltip={i18n.t("result.barrier.tooltip")}>
                          <CustomSVG src={tooltipIcon} />
                        </Tooltip>
                      </FeatureText>
                      {createGradeBadge(
                        barrierToEntryArray[0] && barrierToEntryArray[0]
                      )}
                      <ResponseIcon src={arrow} alt="arrow" />
                    </Feature>
                    <Featuredetail color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.evaluation.title")}
                    </Featuredetail>
                    <Featuredetail color={theme.colors.gray500}>
                      {barrierToEntryArray[1] && barrierToEntryArray[1]}
                    </Featuredetail>
                    <Featuredetail color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.recommendation.title")}
                    </Featuredetail>
                    <Featuredetail color={theme.colors.gray500}>
                      {barrierToEntryArray[2] && barrierToEntryArray[2]}
                    </Featuredetail>
                  </Response>
                </List>

                <List bordercolor={theme.colors.gray200}>
                  <Response>
                    <Feature
                      color={theme.colors.gray500}
                      onClick={handleClick}
                      tooltip={i18n.t("result.adoption.tooltip")}
                    >
                      <FeatureText>
                        {i18n.t("result.adoption.title")}
                        <Tooltip tooltip={i18n.t("result.adoption.tooltip")}>
                          <CustomSVG src={tooltipIcon} />
                        </Tooltip>
                      </FeatureText>
                      {createGradeBadge(adoptionArray[0] && adoptionArray[0])}
                      <ResponseIcon src={arrow} alt="arrow" />
                    </Feature>
                    <Featuredetail color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.evaluation.title")}
                    </Featuredetail>
                    <Featuredetail color={theme.colors.gray500}>
                      {adoptionArray[1] && adoptionArray[1]}
                    </Featuredetail>
                    <Featuredetail color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.recommendation.title")}
                    </Featuredetail>
                    <Featuredetail color={theme.colors.gray500}>
                      {adoptionArray[2] && adoptionArray[2]}
                    </Featuredetail>
                  </Response>
                </List>

                <List bordercolor={theme.colors.gray200}>
                  <Response>
                    <Feature
                      color={theme.colors.gray500}
                      onClick={handleClick}
                      tooltip={i18n.t("result.supplychain.tooltip")}
                    >
                      <FeatureText>
                        {i18n.t("result.supplychain.title")}
                        <Tooltip tooltip={i18n.t("result.supplychain.tooltip")}>
                          <CustomSVG src={tooltipIcon} />
                        </Tooltip>
                      </FeatureText>
                      {createGradeBadge(
                        supplyChainArray[0] && supplyChainArray[0]
                      )}
                      <ResponseIcon src={arrow} alt="arrow" />
                    </Feature>
                    <Featuredetail color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.evaluation.title")}
                    </Featuredetail>
                    <Featuredetail color={theme.colors.gray500}>
                      {supplyChainArray[1] && supplyChainArray[1]}
                    </Featuredetail>
                    <Featuredetail color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.recommendation.title")}
                    </Featuredetail>
                    <Featuredetail color={theme.colors.gray500}>
                      {supplyChainArray[2] && supplyChainArray[2]}
                    </Featuredetail>
                  </Response>
                </List>

                <List bordercolor={theme.colors.gray200}>
                  <Response>
                    <Feature
                      color={theme.colors.gray500}
                      onClick={handleClick}
                      tooltip={i18n.t("result.market.tooltip")}
                    >
                      <FeatureText>
                        {i18n.t("result.market.title")}
                        <Tooltip tooltip={i18n.t("result.market.tooltip")}>
                          <CustomSVG src={tooltipIcon} />
                        </Tooltip>
                      </FeatureText>
                      {createGradeBadge(
                        marketSizeArray[0] && marketSizeArray[0]
                      )}
                      <ResponseIcon src={arrow} alt="arrow" />
                    </Feature>
                    <Featuredetail color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.evaluation.title")}
                    </Featuredetail>
                    <Featuredetail color={theme.colors.gray500}>
                      {marketSizeArray[1] && marketSizeArray[1]}
                    </Featuredetail>
                    <Featuredetail color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.recommendation.title")}
                    </Featuredetail>
                    <Featuredetail color={theme.colors.gray500}>
                      {marketSizeArray[2] && marketSizeArray[2]}
                    </Featuredetail>
                  </Response>
                </List>

                <List bordercolor={theme.colors.gray200}>
                  <Response>
                    <Feature
                      color={theme.colors.gray500}
                      onClick={handleClick}
                      tooltip={i18n.t("result.entrepreneur.tooltip")}
                    >
                      <FeatureText>
                        {i18n.t("result.entrepreneur.title")}
                        <Tooltip
                          tooltip={i18n.t("result.entrepreneur.tooltip")}
                        >
                          <CustomSVG src={tooltipIcon} />
                        </Tooltip>
                      </FeatureText>
                      {createGradeBadge(
                        entrepreneurExperienceArray[0] &&
                        entrepreneurExperienceArray[0]
                      )}
                      <ResponseIcon src={arrow} alt="arrow" />
                    </Feature>
                    <Featuredetail color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.evaluation.title")}
                    </Featuredetail>
                    <Featuredetail color={theme.colors.gray500}>
                      {entrepreneurExperienceArray[1] &&
                        entrepreneurExperienceArray[1]}
                    </Featuredetail>
                    <Featuredetail color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.recommendation.title")}
                    </Featuredetail>
                    <Featuredetail color={theme.colors.gray500}>
                      {entrepreneurExperienceArray[2] &&
                        entrepreneurExperienceArray[2]}
                    </Featuredetail>
                  </Response>
                </List>

                <List bordercolor={theme.colors.transparent}>
                  <Response>
                    <Feature
                      color={theme.colors.gray500}
                      onClick={handleClick}
                      tooltip={i18n.t("result.financial.tooltip")}
                    >
                      <FeatureText>
                        {i18n.t("result.financial.title")}
                        <Tooltip tooltip={i18n.t("result.financial.tooltip")}>
                          <CustomSVG src={tooltipIcon} />
                        </Tooltip>
                      </FeatureText>
                      {createGradeBadge(
                        financialExpectationArray[0] &&
                        financialExpectationArray[0]
                      )}
                      <ResponseIcon src={arrow} alt="arrow" />
                    </Feature>
                    <Featuredetail color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.evaluation.title")}
                    </Featuredetail>
                    <Featuredetail color={theme.colors.gray500}>
                      {financialExpectationArray[1] &&
                        financialExpectationArray[1]}
                    </Featuredetail>
                    <Featuredetail color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.recommendation.title")}
                    </Featuredetail>
                    <Featuredetail color={theme.colors.gray500}>
                      {financialExpectationArray[2] &&
                        financialExpectationArray[2]}
                    </Featuredetail>
                  </Response>
                </List>
              </Collapse>
              <Title color={theme.colors.gray900}>
                {i18n.t("email.pitch.title")}
              </Title>
              {/*
      <Player
                  color={theme.colors.gray900}
                  bgcolor={theme.colors.gray50}
                  bordercolor={theme.colors.gray200}
                  padding='0px'
                >
                  <Audio controls id="myAudio">
                    <source src={pitchURL}></source>
                  </Audio>
                </Player>
*/}
              <FormText>
                <TextBox
                  height="200px"
                  borderradius="15px 15px 0 0"
                  bgcolor={theme.colors.gray50}
                  color={theme.colors.gray900}
                  bordercolor={theme.colors.gray200}
                  borderbottom="none"
                >
                  {pitchcontent}
                </TextBox>
                <PitchTextFormBottomBar
                  bgcolor={theme.colors.gray100}
                  bordercolor={theme.colors.gray100}
                >
                  <DContainer
                    display="flex"
                    justifycontent="flex-end"
                    alignitems="center"
                    gap="20px"
                  >
                    <DContainer
                      display="flex"
                      gap="10px"
                      onClick={() => downloadTextAsWordFile(pitchcontent)}
                      style={{ cursor: "pointer" }}
                    >
                      <img src={DownloadIcon} alt="downloadIcon" />
                      <FormTitle color={theme.colors.gray500} fontsizes="18px">
                        {i18n.t("getstart.analysis.button.download")}
                      </FormTitle>
                    </DContainer>
                    <DContainer
                      display="flex"
                      gap="10px"
                      onClick={() => CopytoClipboard(pitchcontent)}
                      style={{ cursor: "pointer" }}
                    >
                      <img src={CopyIcon} alt={CopyIcon} />
                      <FormTitle color={theme.colors.gray500} fontsizes="18px">
                        {i18n.t("getstart.analysis.button.copy")}
                      </FormTitle>
                    </DContainer>
                  </DContainer>
                </PitchTextFormBottomBar>
              </FormText>
            </ResultMainContainer>
            <ResultSubContainer>
              <Container3
                bordercolor={theme.colors.gray100}
                bgcolor={theme.colors.white}
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
            </ResultSubContainer>
          </ResultContainer>
        </>
      </Wrapper>
    </>
  );
};

export default Result;
