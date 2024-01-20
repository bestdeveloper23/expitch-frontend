import {
  Wrapper,
  F,
  Player,
  TextBox,
  Title,
  FormTitle,
  Grade,
  DContainer,
  CustomSVG,
  ButtonDiv,
  Collapse,
  List,
  Feature,
  ResponseIcon,
  Response,
  Featuredetail,
  Featuredetailtitle,
  GradeContainer,
  GradeTitle,
  Score,
  ScoreContainer,
  GradeResult,
  PitchTextFormBottomBar,
  FormText,
  Audio,
  Container3,
  Card,
  CardTextDiv,
  CardText,
  CardIcon,
  ProcessingTitle,
  FeatureText,
  SectionContainer,
  ResultContainer,
  ResultMainContainer,
  ResultSubContainer,
  ResultTitleContainer,
  Tooltip,
  SectionTitle,
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

import arrow from "../../assets/images/arrowprimary.svg";
import DownloadIcon from "../../assets/images/download_result.svg";
import CopyIcon from "../../assets/images/copy_result.svg";
import GradeA from "../../assets/images/grade_a.svg";
import GradeB from "../../assets/images/grade_b.svg";
import GradeC from "../../assets/images/grade_c.svg";
import PrinterIcon from "../../assets/images/printer.svg";
import tooltipIcon from "../../assets/images/tooltip-icon.svg";
import EditIcon from "../../assets/images/edit_input.svg";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "styled-components";
import { i18n } from "./../../translate/i18n";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRecaptcha } from "../../core/hooks/useRecaptcha";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Results = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [result, setResult] = useState([]);
  const [pitchcontent, setPicthcontent] = useState("");
  const [totalScore, setTotalScore] = useState("");
  const [pitchTitle, setPitchTitle] = useState("Pitch title");
  const [showModal, setShowModal] = useState(false);
  const [pitchId, setPitchId] = useState("");

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const contentRef = useRef(null);

  const location = useLocation();
  const PitchesList = useSelector((state) => state.pitch.pitchesList);

  const showResults = () => {
    if (PitchesList && PitchesList.length > 0) {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get("id");
      const responseData = PitchesList.find((item) => item._id === id);
      setPitchId(id);
      setPicthcontent(responseData.pitchText);
      if(responseData.fileName !== 'noFile'){
        setPitchTitle(responseData.fileName);  
      }
      
      let i = 0;
      let item = [];
      let scores = 0;
      const valuesArray = [
        responseData.featureBenefits.letterGrade,
        responseData.featureBenefits.evaluation,
        responseData.featureBenefits.recommendations,
        responseData.readiness.letterGrade,
        responseData.readiness.evaluation,
        responseData.readiness.recommendations,
        responseData.barrierToEntry.letterGrade,
        responseData.barrierToEntry.evaluation,
        responseData.barrierToEntry.recommendations,
        responseData.adoption.letterGrade,
        responseData.adoption.evaluation,
        responseData.adoption.recommendations,
        responseData.supplyChain.letterGrade,
        responseData.supplyChain.evaluation,
        responseData.supplyChain.recommendations,
        responseData.marketSize.letterGrade,
        responseData.marketSize.evaluation,
        responseData.marketSize.recommendations,
        responseData.entrepreneurExperience.letterGrade,
        responseData.entrepreneurExperience.evaluation,
        responseData.entrepreneurExperience.recommendations,
        responseData.financialExpectations.letterGrade,
        responseData.financialExpectations.evaluation,
        responseData.financialExpectations.recommendations,
      ];
      valuesArray.forEach((element) => {
        item.push(element);
        i++;
        if (i % 3 === 1) {
          switch (element) {
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
        }
      });

      setResult(valuesArray);
      setTotalScore(scores);
    } else {
      console.log("Can not find the pitch:");
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

  const pitchNamechanged = (event) => {
    var key = event.key;
    console.log('Key:', key);
  }

  const submitChangeName = async () => {
    const changedFileName = document.querySelector("#pitchfileName").value;
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
                      <ModalBodyInput id="pitchfileName" type="text" onKeyDown={pitchNamechanged} />
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
              <ButtonDiv
                bghover={theme.colors.gray100}
                gap="5px"
                onClick={() => saveAsPdf()}
              >
                <CustomSVG src={DownloadIcon}></CustomSVG>
                <FormTitle color={theme.colors.gray500}>Save PDF</FormTitle>
              </ButtonDiv>
              <ButtonDiv
                bghover={theme.colors.gray100}
                gap="5px"
                onClick={() => handlePrint()}
              >
                <CustomSVG src={PrinterIcon}></CustomSVG>
                <FormTitle color={theme.colors.gray500}>Print</FormTitle>
              </ButtonDiv>
            </ScoreContainer>
          </GradeContainer>
        </ResultTitleContainer>

        <ResultContainer ref={contentRef}>
          <ResultMainContainer gap="32px">
            <TextBox
              borderradius="15px"
              width="calc(100% - 40px)"
              bgcolor={theme.colors.white}
              color={theme.colors.gray500}
              bordercolor={theme.colors.gray200}
            >
              <GradeContainer bgcolor={theme.colors.white}>
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

            <SectionContainer>
              <SectionTitle>
                <Title color={theme.colors.gray900}>
                  {i18n.t("result.titleL")}
                </Title>
                <Title color={theme.colors.gray500}>
                  {i18n.t("result.titleR")}
                </Title>
              </SectionTitle>

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
                      {createGradeBadge(result[0] && result[0])}
                      <ResponseIcon src={arrow} alt="arrow" />
                    </Feature>
                    <Featuredetailtitle color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.evaluation.title")}
                    </Featuredetailtitle>
                    <Featuredetail color={theme.colors.gray500}>
                      {result[1] && result[1]}
                    </Featuredetail>
                    <Featuredetailtitle color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.recommendation.title")}
                    </Featuredetailtitle>
                    <Featuredetail color={theme.colors.gray500}>
                      {result[2] && result[2]}
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
                      {createGradeBadge(result[3] && result[3])}
                      <ResponseIcon src={arrow} alt="arrow" />
                    </Feature>
                    <Featuredetailtitle color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.evaluation.title")}
                    </Featuredetailtitle>
                    <Featuredetail color={theme.colors.gray500}>
                      {result[4] && result[4]}
                    </Featuredetail>
                    <Featuredetailtitle color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.recommendation.title")}
                    </Featuredetailtitle>
                    <Featuredetail color={theme.colors.gray500}>
                      {result[5] && result[5]}
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
                      {createGradeBadge(result[6] && result[6])}
                      <ResponseIcon src={arrow} alt="arrow" />
                    </Feature>
                    <Featuredetailtitle color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.evaluation.title")}
                    </Featuredetailtitle>
                    <Featuredetail color={theme.colors.gray500}>
                      {result[7] && result[7]}
                    </Featuredetail>
                    <Featuredetailtitle color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.recommendation.title")}
                    </Featuredetailtitle>
                    <Featuredetail color={theme.colors.gray500}>
                      {result[8] && result[8]}
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
                      {createGradeBadge(result[9] && result[9])}
                      <ResponseIcon src={arrow} alt="arrow" />
                    </Feature>
                    <Featuredetailtitle color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.evaluation.title")}
                    </Featuredetailtitle>
                    <Featuredetail color={theme.colors.gray500}>
                      {result[10] && result[10]}
                    </Featuredetail>
                    <Featuredetailtitle color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.recommendation.title")}
                    </Featuredetailtitle>
                    <Featuredetail color={theme.colors.gray500}>
                      {result[11] && result[11]}
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
                      {createGradeBadge(result[12] && result[12])}
                      <ResponseIcon src={arrow} alt="arrow" />
                    </Feature>
                    <Featuredetailtitle color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.evaluation.title")}
                    </Featuredetailtitle>
                    <Featuredetail color={theme.colors.gray500}>
                      {result[13] && result[13]}
                    </Featuredetail>
                    <Featuredetailtitle color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.recommendation.title")}
                    </Featuredetailtitle>
                    <Featuredetail color={theme.colors.gray500}>
                      {result[14] && result[14]}
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
                      {createGradeBadge(result[15] && result[15])}
                      <ResponseIcon src={arrow} alt="arrow" />
                    </Feature>
                    <Featuredetailtitle color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.evaluation.title")}
                    </Featuredetailtitle>
                    <Featuredetail color={theme.colors.gray500}>
                      {result[16] && result[16]}
                    </Featuredetail>
                    <Featuredetailtitle color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.recommendation.title")}
                    </Featuredetailtitle>
                    <Featuredetail color={theme.colors.gray500}>
                      {result[17] && result[17]}
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
                      {createGradeBadge(result[18] && result[18])}
                      <ResponseIcon src={arrow} alt="arrow" />
                    </Feature>
                    <Featuredetailtitle color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.evaluation.title")}
                    </Featuredetailtitle>
                    <Featuredetail color={theme.colors.gray500}>
                      {result[19] && result[19]}
                    </Featuredetail>
                    <Featuredetailtitle color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.recommendation.title")}
                    </Featuredetailtitle>
                    <Featuredetail color={theme.colors.gray500}>
                      {result[20] && result[20]}
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
                      {createGradeBadge(result[21] && result[21])}
                      <ResponseIcon src={arrow} alt="arrow" />
                    </Feature>
                    <Featuredetailtitle color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.evaluation.title")}
                    </Featuredetailtitle>
                    <Featuredetail color={theme.colors.gray500}>
                      {result[22] && result[22]}
                    </Featuredetail>
                    <Featuredetailtitle color={theme.colors.gray700}>
                      {i18n.t("about.analysis.readiness.recommendation.title")}
                    </Featuredetailtitle>
                    <Featuredetail color={theme.colors.gray500}>
                      {result[23] && result[23]}
                    </Featuredetail>
                  </Response>
                </List>
              </Collapse>
            </SectionContainer>

            <SectionContainer>
              <Title color={theme.colors.gray900}>
                {i18n.t("email.pitch.title")}
              </Title>

              <FormText>
                <TextBox
                  height="200px"
                  borderradius="15px 15px 0 0"
                  bgcolor={theme.colors.white}
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
                    <ButtonDiv
                      bghover={theme.colors.gray200}
                      gap="5px"
                      onClick={() => downloadTextAsWordFile(pitchcontent)}
                      style={{ cursor: "pointer" }}
                    >
                      <CustomSVG
                        src={DownloadIcon}
                        alt="downloadIcon"
                      ></CustomSVG>
                      <FormTitle color={theme.colors.gray500}>
                        {i18n.t("getstart.analysis.button.download")}
                      </FormTitle>
                    </ButtonDiv>

                    <ButtonDiv
                      bghover={theme.colors.gray200}
                      gap="5px"
                      onClick={() => CopytoClipboard(pitchcontent)}
                      style={{ cursor: "pointer" }}
                    >
                      <CustomSVG src={CopyIcon} alt={CopyIcon}></CustomSVG>
                      <FormTitle color={theme.colors.gray500}>
                        {i18n.t("getstart.analysis.button.copy")}
                      </FormTitle>
                    </ButtonDiv>
                  </DContainer>
                </PitchTextFormBottomBar>
              </FormText>
            </SectionContainer>
          </ResultMainContainer>
          <ResultSubContainer>
            <Container3
              bordercolor={theme.colors.gray200}
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
      </Wrapper>
    </>
  );
};

export default Results;
