import {
  Wrapper, MainContainer, ColorBgContainer, F, Player,
  TextBox, Title, SmallTitle, FormTitle, Grade, DContainer, Label, Required, EmailInput, ContainerUploading, UploadingBox,
  CustomSVG, UploadText, Button, Button1, RecordingBox, RoundButton, ContainerProcessing, ProcessingProgress, ButtonDiv,
  Collapse, List, Feature, ResponseIcon, Response, Featuredetail, EmailInputContainer, SubForm,
  GradeContainer, GradeTitle, Score, ScoreContainer, GradeResult, PitchTextFormBottomBar, FormText, Audio, Loading,
  Container3, Card, CardTextDiv, CardText, CardIcon, ProcessingTitle,
  ResultContainer, ResultMainContainer, ResultSubContainer, ResultTitleContainer, Formimage
} from './styled';

import RightArrowIcon from "../../assets/images/arrow-right.svg"
import UploadIcon from '../../assets/images/arrow-up-tray.svg'
import MicIcon from '../../assets/images/microphone.svg'
import StopRecording from '../../assets/images/stop_recording.svg'
import arrow from "../../assets/images/arrowprimary.svg"
import DownloadIcon from "../../assets/images/download_result.svg"
import CopyIcon from "../../assets/images/copy_result.svg"
import GradeA from "../../assets/images/grade_a.svg"
import GradeB from "../../assets/images/grade_b.svg"
import GradeC from "../../assets/images/grade_c.svg"
import PrinterIcon from "../../assets/images/printer.svg"

import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setFile } from '../../actions/pitch';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { useTheme } from 'styled-components';
import { i18n } from "./../../translate/i18n";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Test = () => {
  const theme = useTheme();
  const [wizardIndex, setWizardIndex] = useState('email');
  const [emailError, setEmailError] = useState('');
  const [emailEnable, setEmailEnable] = useState('failed');
  const [loadingStatus, setLoadingStatus] = useState('initial');
  const [processstatus, setProcessstatus] = useState(i18n.t("process.status"));
  const [result, setResult] = useState([]);
  const [pitchcontent, setPicthcontent] = useState('');
  const [totalScore, setTotalScore] = useState('');
  const [pitchURL, setPitchURL] = useState('');
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [pitchfile, setPItchFile] = useState(null);

  const contentRef = useRef(null);

  const { email, file } = useSelector((state) => ({
    email: state.email,
    file: state.file
  }));
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    if (validateEmail()) {
      setEmailEnable('valid')
    } else setEmailEnable('failed')

    dispatch(setEmail(event.target.value));
  };

  const submitAnalysis = () => {
    setWizardIndex('processing');
    handleSubmit(pitchfile);
  };

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleWizardIndex = (index) => {
    if (!validateEmail()) {
      console.log(emailError)
      return;
    }
    setWizardIndex(index);

    let mediaRecorder;
    let chunks = [];

    const startRecording = () => {
      console.log('Started the recording');
      chunks = [];
      document.getElementById('stopButton').style.display = 'block';
      document.getElementById('startButton').style.display = 'none';
      mediaRecorder.start();
      setIsRunning(true);
      setLoadingStatus('recording');
    };

    const stopRecording = () => {
      console.log('Stopped the recording');
      mediaRecorder.stop();
      document.getElementById('stopButton').style.display = 'none';
      document.getElementById('startButton').style.display = 'none';
      setIsRunning(false);
      setLoadingStatus('completed');
    };

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {

      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(function (stream) {
          mediaRecorder = new MediaRecorder(stream);
          document.getElementById('startButton').addEventListener('click', startRecording);

          document.getElementById('stopButton').addEventListener('click', stopRecording);
          mediaRecorder.addEventListener('dataavailable', function (e) {
            chunks.push(e.data);
          });

          mediaRecorder.addEventListener('stop', function () {
            const blob = new Blob(chunks, { type: 'audio/mpeg' });
            console.log(blob)
            dispatch(setFile(blob));
            const fileName = 'expitch.mp3';
            const file = convertBlobToFile(blob, fileName);
            setPItchFile(file);
            setPitchURL(URL.createObjectURL(blob));
            document.getElementById("recordingAudio").src = URL.createObjectURL(blob);
          });
        })
        .catch(function (error) {
          console.error('Error accessing microphone:', error);
        });
    } else {
      console.log('getUserMedia is not supported in this browser');
    }
    console.log(wizardIndex)
  };

  const onDrop = (acceptedFiles) => {
    dispatch(setFile(acceptedFiles[0]));
    setPitchURL(URL.createObjectURL(acceptedFiles[0]));
    console.log(acceptedFiles[0], "test");
    setWizardIndex("processing");
    setTimeout(() => {
      handleSubmit(acceptedFiles[0]);
    }, 500);
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email address');
      return false;
    }
    console.log("true")
    setEmailError('');
    return true;
  };

  const convertBlobToFile = (blob, fileName) => {
    const file = new File([blob], fileName, { type: blob.type });
    return file;
  }

  const isBlobEmpty = (blob) => {
    return blob.size === 0;
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'audio/*', multiple: false, noClick: true, });
  const handleSubmit = (file) => {
    const formData = new FormData();
    formData.append('email', email);
    console.log(file);
    formData.append('pitchFile', file);
    const fileUrl = URL.createObjectURL(file);
    console.log(email, file)
    axios
      .post(`${process.env.REACT_APP_API_ENDPOINTS}/pitch/getPitchEvalForAudio`, formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          if (progress === 100) {
            // The upload is complete, but the response may still be pending
            setProcessstatus('Waiting for result...')
          }
        },

      })
      .then((response) => {
        // Handle the successful response
        if (typeof (response.data) === 'string') {

          var json_data = response.data.split("}{")

          var first_json = JSON.parse(json_data[0] + "}")
          var second_json = JSON.parse("{" + json_data[1])
          setPicthcontent(first_json['pitch']);
          console.log(second_json.evaluation.featureBenefits.letterGrade);
          var i = 0;
          let item = [];
          var scores = 0;
          const valuesArray = [
            second_json.evaluation.featureBenefits.letterGrade,
            second_json.evaluation.featureBenefits.evaluation,
            second_json.evaluation.featureBenefits.recommendations,
            second_json.evaluation.readiness.letterGrade,
            second_json.evaluation.readiness.evaluation,
            second_json.evaluation.readiness.recommendations,
            second_json.evaluation.barrierToEntry.letterGrade,
            second_json.evaluation.barrierToEntry.evaluation,
            second_json.evaluation.barrierToEntry.recommendations,
            second_json.evaluation.adoption.letterGrade,
            second_json.evaluation.adoption.evaluation,
            second_json.evaluation.adoption.recommendations,
            second_json.evaluation.supplyChain.letterGrade,
            second_json.evaluation.supplyChain.evaluation,
            second_json.evaluation.supplyChain.recommendations,
            second_json.evaluation.marketSize.letterGrade,
            second_json.evaluation.marketSize.evaluation,
            second_json.evaluation.marketSize.recommendations,
            second_json.evaluation.entrepreneurExperience.letterGrade,
            second_json.evaluation.entrepreneurExperience.evaluation,
            second_json.evaluation.entrepreneurExperience.recommendations,
            second_json.evaluation.financialExpectations.letterGrade,
            second_json.evaluation.financialExpectations.evaluation,
            second_json.evaluation.financialExpectations.recommendations
          ];
          valuesArray.forEach(element => {
            item.push(element)
            i++;
            if (i % 3 === 1) {
              switch (element) {
                case 'A+':
                  scores += 10;
                  break;
                case 'A':
                  scores += 9;
                  break;
                case 'A-':
                  scores += 8;
                  break;
                case 'B+':
                  scores += 6;
                  break;
                case 'B':
                  scores += 5;
                  break;
                case 'B-':
                  scores += 4;
                  break;
                case 'C+':
                  scores += 2;
                  break;
                case 'C':
                  scores += 1;
                  break;
                default:
                  break;
              }
            }
          });

          setResult(valuesArray);
        }
        setTotalScore(scores);
        setWizardIndex("result")
      })
      .catch((error) => {
        console.error('Error:', error.message, formData);
        setProcessstatus(error.message);
        console.log(process.env.REACT_APP_API_ENDPOINTS)
      });
  };

  const createGradeBadge = (grade) => {
    var color = '';
    if (grade === undefined)
      return null;
    if (grade[0] === 'A') {
      color = 'green';
    } else if (grade[0] === 'B') {
      color = 'orange';
    } else if (grade[0] === 'C') {
      color = 'orange';
    } else {
      color = 'red';
    }

    const gradeColor = theme.colors[color + '600'];
    const gradeBorderColor = theme.colors[color + '200'];
    const gradeBgColor = theme.colors[color + '50'];

    return (
      <GradeResult color={gradeColor} bordercolor={gradeBorderColor} bgcolor={gradeBgColor}>
        {grade}
      </GradeResult>
    );
  };

  const handleClick = (e) => {
    if (e.target.children[1]) {
      if (e.target.children[1].style.transform === "rotateX(180deg)") {
        e.target.children[1].style.transform = "rotateX(0deg)"
      } else {
        e.target.children[1].style.transform = "rotateX(180deg)"
      }

    }
  }

  const CopytoClipboard = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy)
      .then(function () {
        console.log('Text copied to clipboard successfully');
      })
      .catch(function (error) {
        console.error('Error copying text to clipboard:', error);
      });
  }

  const downloadTextAsWordFile = (text) => {

    const blob = new Blob([text], { type: 'text/plain' });

    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'pitch.txt'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  const saveAsPdf = () => {
    const content = contentRef.current;

    html2canvas(content).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('document.pdf');
    });
  };

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    setWizardIndex("email");
    setLoadingStatus('initial')
    setProcessstatus(i18n.t("process.status"));
    setEmailEnable('failed');
    setSeconds(0);
    setResult([]);
  }, [])

  return (
    <>
      <Wrapper bgcolor={theme.colors.gray50}>

        {wizardIndex === "email" &&
          <MainContainer color={theme.colors.gray50}>
            <F>
              <ColorBgContainer>
                <Formimage></Formimage>
              </ColorBgContainer>
              <EmailInputContainer
                bgcolor={theme.colors.white}
              >
                <SubForm>
                  <SmallTitle color="black">{i18n.t("email.textbox.paragraph")}</SmallTitle>
                  <Label color={theme.colors.gray900}>{i18n.t("email.textbox.label")}<Required>*</Required> </Label>
                  <EmailInput type='email' onChange={handleEmailChange} bordercolor={theme.colors.gray300} bgcolor={theme.colors.white}></EmailInput>
                  <Label color='#FF0000'>{emailError}</Label>
                  <ButtonDiv
                  >
                    <Button onClick={() => handleWizardIndex("uploading")} isenable={emailEnable} bgcolor={theme.colors.primary}
                      bordercolor={theme.colors.primary} color={theme.colors.white}>
                      <DContainer
                        display="flex"
                        justifycontent="center"
                        alignitems="center"
                      >
                        {i18n.t("email.textbox.button")}
                        <CustomSVG src={RightArrowIcon} alt={RightArrowIcon}></CustomSVG>
                      </DContainer>
                    </Button>
                  </ButtonDiv>
                </SubForm>
              </EmailInputContainer>
            </F>
          </MainContainer>
        }

        {wizardIndex === "uploading" &&
          <ContainerUploading>
            <UploadingBox {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}
              bordercolor={theme.colors.gray300} bgcolor={theme.colors.white}>
              <input {...getInputProps()} />
              <input id="fileInput" type="file" onChange={(e) => onDrop(e.target.files)} style={{ display: 'none' }} accept=".mp3, .mp4, .wav" />
              <CustomSVG src={UploadIcon} width={64} height={64}></CustomSVG>

              {
                !isDragActive ?
                  <SmallTitle
                    color="black"
                  >
                    {i18n.t("uploading.uploadingbox.hint")}
                  </SmallTitle> :
                  <SmallTitle
                    color={theme.colors.primary}
                  >{i18n.t("uploading.uploadingbox.drop")}
                  </SmallTitle>
              }
              <UploadText
                color={theme.colors.gray500}
              >
                {i18n.t("uploading.recording.paragraph1")}<br />{i18n.t("uploading.recording.paragraph2")}
              </UploadText>
              <Button1 onClick={() => document.getElementById('fileInput').click()} bordercolor={theme.colors.primary}
                bgcolor={theme.colors.white} color={theme.colors.gray900}>{i18n.t("uploading.submit.button")}</Button1>
            </UploadingBox>
            <RecordingBox>
              <UploadText color={theme.colors.gray900}>{loadingStatus === "initial" ? i18n.t("uploading.recording.button") : loadingStatus === "recording" ? i18n.t("uploading.status.recording.text") : i18n.t("uploading.status.analysis.text")}</UploadText>
              <RoundButton width={64} height={64} bordercolor={theme.colors.primary} bgcolor={theme.colors.gray50} id='startButton' >
                <CustomSVG src={MicIcon}></CustomSVG>
              </RoundButton>

              <CustomSVG width={64} height={64} src={StopRecording} id='stopButton' style={{ display: 'none' }}></CustomSVG>

              {loadingStatus === "completed" ? (
                <Player padding='0px'>
                  <Audio controls id="recordingAudio">
                    <source src={pitchURL}></source>
                  </Audio>
                </Player>
              ) : null}
              {loadingStatus === "initial" ? (<UploadText color={theme.colors.gray500}>{i18n.t("uploading.recording.hint1")}</UploadText>) :
                loadingStatus === "recording" ? (<UploadText color={theme.colors.gray900}>{Math.floor(seconds / 3600)}:{String(Math.floor((seconds % 3600) / 60)).padStart(2, '0')}:{String((seconds % 3600) % 60).padStart(2, '0')}</UploadText>) :
                  (
                    <Button onClick={() => submitAnalysis()} isenable={emailEnable} bgcolor={theme.colors.primary}
                      bordercolor={theme.colors.primary} color={theme.colors.white}>
                      <DContainer
                        display="flex"
                        justifycontent="center"
                        alignitems="center"
                      >
                        {i18n.t("uploading.status.analysis.button")}
                        <CustomSVG src={RightArrowIcon} alt={RightArrowIcon}></CustomSVG>
                      </DContainer>
                    </Button>
                  )
              }



            </RecordingBox>
          </ContainerUploading>
        }

        {wizardIndex === "processing" &&
          <ContainerProcessing>
            <SmallTitle color='black'>🤖 {processstatus}</SmallTitle>
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

        {wizardIndex === "result" &&
          <>
            <ResultTitleContainer>
              <GradeContainer
                bgcolor='transparent'
              >
                <GradeTitle>
                  <FormTitle
                    fontsizes={theme.typography.h4.size}
                    color={theme.colors.gray900}
                    fontweights={theme.typography.h4.fontWeight}
                    font={theme.typography.h4.font}
                  >{i18n.t("result.title")}</FormTitle>
                </GradeTitle>
                <ScoreContainer gap='20px'>
                  <ButtonDiv gap='5px' onClick={() => saveAsPdf()}>
                    <CustomSVG src={DownloadIcon}></CustomSVG>
                    <FormTitle color={theme.colors.gray500}>Save PDF</FormTitle>
                  </ButtonDiv>
                  <ButtonDiv gap='5px' onClick={() => handlePrint()}>
                    <CustomSVG src={PrinterIcon}></CustomSVG>
                    <FormTitle color={theme.colors.gray500}>Print</FormTitle>
                  </ButtonDiv>
                </ScoreContainer>
              </GradeContainer>

            </ResultTitleContainer>

            <ResultContainer ref={contentRef}>
              <ResultMainContainer
                gap='20px'
              >
                <TextBox
                  borderradius="15px"
                  width="calc(100% - 60px)"
                  bgcolor={theme.colors.gray50}
                  color={theme.colors.gray500}
                  bordercolor={theme.colors.gray200}
                >
                  <GradeContainer
                    bgcolor={theme.gray50}
                  >
                    <GradeTitle>
                      <Grade color={totalScore >= 49 ? theme.colors.green600 : totalScore >= 17 ? theme.colors.orange600 : theme.colors.red600}
                        bordercolor={totalScore >= 49 ? theme.colors.green200 : totalScore >= 17 ? theme.colors.orange200 : theme.colors.red200}
                        backgroundcolor={totalScore >= 49 ? theme.colors.green50 : totalScore >= 17 ? theme.colors.orange50 : theme.colors.red50}
                      >
                        {totalScore >= 73 ? 'A+' : totalScore >= 65 ? 'A' : totalScore >= 49 ? 'A-' : totalScore >= 41 ? 'B+' : totalScore >= 33 ? 'B' : totalScore >= 17 ? 'B-' : totalScore >= 9 ? 'C+' : totalScore >= 8 ? 'C' : 'C-'}
                      </Grade>
                      <FormTitle
                        color={totalScore >= 49 ? theme.colors.green600 : totalScore >= 17 ? theme.colors.orange600 : theme.colors.red600}
                        padding='10px'
                      >{totalScore >= 49 ? i18n.t("result.slogonA") : totalScore >= 17 ? i18n.t("result.slogonB") : i18n.t("result.slogonC")}</FormTitle>
                    </GradeTitle>
                    <ScoreContainer>
                      <Score color={totalScore >= 53 ? theme.colors.green600 : totalScore >= 17 ? theme.colors.orange600 : theme.colors.red600}>
                        {totalScore}
                      </Score>
                      <Score color={theme.colors.gray500}>
                        /80
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

                <Collapse id='results' bordercolor={theme.colors.gray200}>
                  <List bordercolor={theme.colors.gray200}>
                    <Response>
                      <Feature color={theme.colors.gray500} onClick={handleClick} tooltip={i18n.t("result.features.tooltip")}>
                        {i18n.t("result.features.title")}
                        {/* <Grade2 color={theme.colors.orange600} bgcolor={theme.colors.orange50} className="grade">{result[0]}</Grade2> */}

                        {createGradeBadge(result[0] && result[0])}
                        <ResponseIcon src={arrow} alt="arrow" />
                      </Feature>
                      <Featuredetail color={theme.colors.gray700}>{i18n.t("about.analysis.readiness.evaluation.title")}</Featuredetail>
                      <Featuredetail color={theme.colors.gray500}>{result[1] && result[1]}</Featuredetail>
                      <Featuredetail color={theme.colors.gray700}>{i18n.t("about.analysis.readiness.recommendation.title")}</Featuredetail>
                      <Featuredetail color={theme.colors.gray500}>{result[2] && result[2]}</Featuredetail>
                    </Response>
                  </List>

                  <List bordercolor={theme.colors.gray200}>
                    <Response>
                      <Feature color={theme.colors.gray500} onClick={handleClick} tooltip={i18n.t("result.readiness.tooltip")}>
                        {i18n.t("result.readiness.title")}
                        {/* <Grade2 color={theme.colors.orange600} bgcolor={theme.colors.orange50} className="grade">{result[3]] && result[3]}</Grade2> */}
                        {createGradeBadge(result[3] && result[3])}
                        <ResponseIcon src={arrow} alt="arrow" />
                      </Feature>
                      <Featuredetail color={theme.colors.gray700}>{i18n.t("about.analysis.readiness.evaluation.title")}</Featuredetail>
                      <Featuredetail color={theme.colors.gray500}>{result[4] && result[4]}</Featuredetail>
                      <Featuredetail color={theme.colors.gray700}>{i18n.t("about.analysis.readiness.recommendation.title")}</Featuredetail>
                      <Featuredetail color={theme.colors.gray500}>{result[5] && result[5]}</Featuredetail>
                    </Response>
                  </List>

                  <List bordercolor={theme.colors.gray200}>
                    <Response>
                      <Feature color={theme.colors.gray500} onClick={handleClick} tooltip={i18n.t("result.barrier.tooltip")}>
                        {i18n.t("result.barrier.title")}
                        {createGradeBadge(result[6] && result[6])}
                        <ResponseIcon src={arrow} alt="arrow" />
                      </Feature>
                      <Featuredetail color={theme.colors.gray700}>{i18n.t("about.analysis.readiness.evaluation.title")}</Featuredetail>
                      <Featuredetail color={theme.colors.gray500}>{result[7] && result[7]}</Featuredetail>
                      <Featuredetail color={theme.colors.gray700}>{i18n.t("about.analysis.readiness.recommendation.title")}</Featuredetail>
                      <Featuredetail color={theme.colors.gray500}>{result[8] && result[8]}</Featuredetail>
                    </Response>
                  </List>

                  <List bordercolor={theme.colors.gray200}>
                    <Response>
                      <Feature color={theme.colors.gray500} onClick={handleClick} tooltip={i18n.t("result.adoption.tooltip")}>
                        {i18n.t("result.adoption.title")}
                        {createGradeBadge(result[9] && result[9])}
                        <ResponseIcon src={arrow} alt="arrow" />
                      </Feature>
                      <Featuredetail color={theme.colors.gray700}>{i18n.t("about.analysis.readiness.evaluation.title")}</Featuredetail>
                      <Featuredetail color={theme.colors.gray500}>{result[10] && result[10]}</Featuredetail>
                      <Featuredetail color={theme.colors.gray700}>{i18n.t("about.analysis.readiness.recommendation.title")}</Featuredetail>
                      <Featuredetail color={theme.colors.gray500}>{result[11] && result[11]}</Featuredetail>
                    </Response>
                  </List>

                  <List bordercolor={theme.colors.gray200}>
                    <Response>
                      <Feature color={theme.colors.gray500} onClick={handleClick} tooltip={i18n.t("result.supplychain.tooltip")}>
                        {i18n.t("result.supplychain.title")}
                        {createGradeBadge(result[12] && result[12])}
                        <ResponseIcon src={arrow} alt="arrow" />
                      </Feature>
                      <Featuredetail color={theme.colors.gray700}>{i18n.t("about.analysis.readiness.evaluation.title")}</Featuredetail>
                      <Featuredetail color={theme.colors.gray500}>{result[13] && result[13]}</Featuredetail>
                      <Featuredetail color={theme.colors.gray700}>{i18n.t("about.analysis.readiness.recommendation.title")}</Featuredetail>
                      <Featuredetail color={theme.colors.gray500}>{result[14] && result[14]}</Featuredetail>
                    </Response>
                  </List>

                  <List bordercolor={theme.colors.gray200}>
                    <Response>
                      <Feature color={theme.colors.gray500} onClick={handleClick} tooltip={i18n.t("result.market.tooltip")}>
                        {i18n.t("result.market.title")}
                        {createGradeBadge(result[15] && result[15])}
                        <ResponseIcon src={arrow} alt="arrow" />
                      </Feature>
                      <Featuredetail color={theme.colors.gray700}>{i18n.t("about.analysis.readiness.evaluation.title")}</Featuredetail>
                      <Featuredetail color={theme.colors.gray500}>{result[16] && result[16]}</Featuredetail>
                      <Featuredetail color={theme.colors.gray700}>{i18n.t("about.analysis.readiness.recommendation.title")}</Featuredetail>
                      <Featuredetail color={theme.colors.gray500}>{result[17] && result[17]}</Featuredetail>
                    </Response>
                  </List>

                  <List bordercolor={theme.colors.gray200}>
                    <Response>
                      <Feature color={theme.colors.gray500} onClick={handleClick} tooltip={i18n.t("result.entrepreneur.tooltip")}>
                        {i18n.t("result.entrepreneur.title")}
                        {createGradeBadge(result[18] && result[18])}
                        <ResponseIcon src={arrow} alt="arrow" />
                      </Feature>
                      <Featuredetail color={theme.colors.gray700}>{i18n.t("about.analysis.readiness.evaluation.title")}</Featuredetail>
                      <Featuredetail color={theme.colors.gray500}>{result[19] && result[19]}</Featuredetail>
                      <Featuredetail color={theme.colors.gray700}>{i18n.t("about.analysis.readiness.recommendation.title")}</Featuredetail>
                      <Featuredetail color={theme.colors.gray500}>{result[20] && result[20]}</Featuredetail>
                    </Response>
                  </List>

                  <List bordercolor={theme.colors.transparent}>
                    <Response>
                      <Feature color={theme.colors.gray500} onClick={handleClick} tooltip={i18n.t("result.financial.tooltip")}>
                        {i18n.t("result.financial.title")}
                        {createGradeBadge(result[21] && result[21])}
                        <ResponseIcon src={arrow} alt="arrow" />
                      </Feature>
                      <Featuredetail color={theme.colors.gray700}>{i18n.t("about.analysis.readiness.evaluation.title")}</Featuredetail>
                      <Featuredetail color={theme.colors.gray500}>{result[22] && result[22]}</Featuredetail>
                      <Featuredetail color={theme.colors.gray700}>{i18n.t("about.analysis.readiness.recommendation.title")}</Featuredetail>
                      <Featuredetail color={theme.colors.gray500}>{result[23] && result[23]}</Featuredetail>
                    </Response>
                  </List>


                </Collapse>
                <Title color={theme.colors.gray900}>
                  {i18n.t("email.pitch.title")}
                </Title>
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
                <FormText>
                  <TextBox
                    height="200px"
                    borderradius="15px 15px 0 0"
                    bgcolor={theme.colors.gray50}
                    color={theme.colors.gray900}
                    bordercolor={theme.colors.gray200}
                    borderbottom='none'
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
                        style={{ cursor: 'pointer' }}
                      >
                        <img src={DownloadIcon} alt="downloadIcon" />
                        <FormTitle
                          color={theme.colors.gray500}
                          fontsizes="18px"
                        >{i18n.t("getstart.analysis.button.download")}</FormTitle>
                      </DContainer>
                      <DContainer
                        display="flex"
                        gap="10px"
                        onClick={() => CopytoClipboard(pitchcontent)}
                        style={{ cursor: 'pointer' }}
                      >
                        <img src={CopyIcon} alt={CopyIcon} />
                        <FormTitle
                          color={theme.colors.gray500}
                          fontsizes="18px"
                        >{i18n.t("getstart.analysis.button.copy")}</FormTitle>
                      </DContainer>
                    </DContainer>
                  </PitchTextFormBottomBar>
                </FormText>
              </ResultMainContainer>
              <ResultSubContainer>
                <Container3 bordercolor={theme.colors.gray100} bgcolor={theme.colors.white}>
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

        }
      </Wrapper>
    </>
  );
};

export default Test;