import {
 Wrapper, MainContainer, ColorBgContainer, SvgBgContainer, F, PitchForm, Player,
 TextBox, Title, SmallTitle, FormTitle, FitMeNow,
 Grade, DContainer, Label, Required, EmailInput, ContainerUploading, UploadingBox,
 CustomSVG, UploadText, Button, Button1, RecordingBox, RoundButton, ContainerProcessing, ProcessingBox,
 DscrText, TextBoxProcessing, ProcessingProgress, ProcessImage, ProcessError, EmailLeftContainer, ButtonDiv,
 Collapse, List, Feature, ResponseIcon, Response, Featuredetail, EmailInputContainer, SubForm,
 GradeContainer, GradeTitle, Score, ScoreContainer, GradeResult, PitchTextFormBottomBar, FormText, Audio, LoadingDiv, Loading
} from './styled';


import HeartIcon from "../../assets/images/heart.svg"
import ChatIcon from "../../assets/images/chat-bubble-oval-left.svg"
import RightArrowIcon from "../../assets/images/arrow-right.svg"
import UploadIcon from '../../assets/images/arrow-up-tray.svg'
import MicIcon from '../../assets/images/microphone.svg'
import StopRecording from '../../assets/images/stoprecording.png'
import Processimageprimary from '../../assets/images/process_primary.svg'
import Processimagegray from '../../assets/images/process_gray.svg'
import arrow from "../../assets/images/arrowprimary.svg";
import DownloadIcon from "../../assets/images/download_result.svg"
import CopyIcon from "../../assets/images/copy_result.svg"

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setFile } from '../../actions/pitch';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { useTheme } from 'styled-components';
import { i18n } from "./../../translate/i18n";

const Test = () => {
 const theme = useTheme();
 const [wizardIndex, setWizardIndex] = useState('email');
 const [responseProgress, setResponseProgress] = useState(0);
 const [emailError, setEmailError] = useState('');
 const [emailEnable, setEmailEnable] = useState('failed');
 const [noticeMessage, setNoticeMessage] = useState('');
 const [processstatus, setProcessstatus] = useState('Processing...');
 const [result, setResult] = useState([]);
 const [pitchcontent, setPicthcontent] = useState('');
 const [totalScore, setTotalScore] = useState('');
 const [pitchURL, setPitchURL] = useState('');

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

 const handleWizardIndex = (index) => {
  if (!validateEmail()) {
   console.log(emailError)
   return;
  }
  setWizardIndex(index);
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

 const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'audio/*', multiple: false, noClick: true, });
 const handleSubmit = (file) => {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('pitchFile', file);
  const fileUrl = URL.createObjectURL(file);
  console.log(email, file)
  axios
   .post('https://api-staging-dot-sustained-vial-393016.uc.r.appspot.com/open-ai/getPitchEvalForAudio', formData, {
    onUploadProgress: (progressEvent) => {
     const progress = Math.round(
      (progressEvent.loaded * 100) / progressEvent.total
     );
     setResponseProgress(progress);
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
     var i = 0;
     let item = [];
     var scores = 0;
     for (const key in second_json["evaluation"]) {
      const value = second_json["evaluation"][key]
      item.push(value)
      i++
      if (i % 3 == 1) {
       switch (value) {
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
     }
     setResult(item);
    }
    setTotalScore(scores);
    setNoticeMessage(i18n.t("result.noticeResult"));
    setTimeout(() => {
     setNoticeMessage('')
    }, 3000);
    setWizardIndex("result")
   })
   .catch((error) => {
    console.error('Error:', error.message, formData);
    setProcessstatus(error.message);

   });
 };

 const createGradeBadge = (grade) => {
  var color = '';
  if (grade[0] === 'A') {
   color = 'green';
  } else if (grade[0] === 'B') {
   color = 'yellow';
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

 const createResponsive = (title, grade, evaluation, recommendation) => {
  var color = '';
  if (grade[0] === 'A+' || grade[0] === 'A-') {
   color = 'green';
  } else if (grade[0] === 'B+' || grade[0] === 'B-') {
   color = 'yellow';
  } else if (grade[0] === 'C+' || grade[0] === 'C-') {
   color = 'orange';
  } else {
   color = 'red';
  }
  return (
   <List bordercolor={theme.colors.transparent}>
    <Response>
     <Feature color={theme.colors.gray800} onClick={handleClick}>
      {title}
      <GradeResult color={color + '200'} bordercolor={color + '200'} bgcolor={color + '50'}>{grade}</GradeResult>
      <ResponseIcon src={arrow} alt="arrow" />
     </Feature>
     <Featuredetail color={theme.colors.primary}>{i18n.t("about.analysis.readiness.evaluation.title")}</Featuredetail>
     <Featuredetail color={theme.colors.gray700}>{evaluation}</Featuredetail>
     <Featuredetail color={theme.colors.primary}>{i18n.t("about.analysis.readiness.recommendation.title")}</Featuredetail>
     <Featuredetail color={theme.colors.gray700}>{recommendation}</Featuredetail>
    </Response>
   </List>
  )
 }

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
    setNoticeMessage('Copied!');
    setTimeout(() => {
     setNoticeMessage('')
    }, 2000);
   })
   .catch(function (error) {
    console.error('Error copying text to clipboard:', error);
   });
 }

 const downloadTextAsWordFile = (text) => {

  // Convert the text to a Blob
  const blob = new Blob([text], { type: 'text/plain' });

  // Create a temporary URL for the Blob
  const url = URL.createObjectURL(blob);

  // Create a link element
  const link = document.createElement('a');
  link.href = url;
  link.download = 'pitch.txt'; // Specify the file name with the .docx extension

  // Append the link to the document body
  document.body.appendChild(link);

  // Trigger the download
  link.click();

  // Clean up by removing the link and revoking the URL
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
 }

 let mediaRecorder;
  let chunks = [];

  const startRecording = () => {
    console.log('Started the recording');
    chunks = [];
    document.getElementById('stopButton').style.display = 'block';
    document.getElementById('startButton').style.display = 'none';
    mediaRecorder.start();
  };

  const stopRecording = () => {
    console.log('Stopped the recording');
    mediaRecorder.stop();
    document.getElementById('stopButton').style.display = 'none';
    document.getElementById('startButton').style.display = 'block';
  };
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  
   navigator.mediaDevices
     .getUserMedia({ audio: true })
     .then(function (stream) {
       mediaRecorder = new MediaRecorder(stream);

       mediaRecorder.addEventListener('dataavailable', function (e) {
         chunks.push(e.data);
       });

       mediaRecorder.addEventListener('stop', function () {
         const blob = new Blob(chunks, { type: 'audio/mp3' });
         dispatch(setFile(blob));
         setPitchURL(URL.createObjectURL(blob));
         setWizardIndex('processing');
         handleSubmit(blob);
       });
     })
     .catch(function (error) {
       console.error('Error accessing microphone:', error);
     });
    } else {
     console.log('getUserMedia is not supported in this browser');
    }
    
 useEffect(() => {
  setWizardIndex("email");
  setProcessstatus('Processing...');
  setResponseProgress(0);
  setEmailEnable('failed');
 }, [])

 return (
  <>
   <Wrapper>

    {wizardIndex === "email" &&
     <MainContainer color={theme.colors.gray50}>
      <F>
       <ColorBgContainer
        backgroundcolor={theme.colors.gray900}
       >
        <SvgBgContainer>
         <EmailLeftContainer
         >
          <Title>
           {i18n.t("email.pitch.title")}
          </Title>
          <TextBox
           borderradius="15px"
           width="calc(100% - 60px)"
          >
           <DContainer
            display="flex"
            justifycontent="space-between"
            width="100%"
           >
            <PitchForm>
             <FormTitle
              color={theme.colors.primary}
              fontsizes="15px"
             >{i18n.t("email.form.name")}</FormTitle>
             <FitMeNow
              color="White"
             >
              {i18n.t("email.form.title")}
             </FitMeNow>
             <DContainer
              display="flex"
              gap="20px"
             >
              <DContainer
               display="flex"
              >
               <CustomSVG src={HeartIcon} width="20px" height="20px"></CustomSVG>
               <FormTitle color={theme.colors.white} fontsizes="18px">{i18n.t("email.form.favorite")}</FormTitle>
              </DContainer>
              <DContainer
               display="flex"
              >
               <CustomSVG src={ChatIcon} width="20px" height="20px"></CustomSVG>
               <FormTitle color={theme.colors.white} fontsizes="18px">{i18n.t("email.form.comment")}</FormTitle>
              </DContainer>
             </DContainer>
            </PitchForm>
            <DContainer>
             <DContainer
              display="flex"
              justifycontent="flex-end"
             >
              <FitMeNow
               color={theme.colors.green600}
              >
               {i18n.t("email.form.score")}<FitMeNow color="#415C96">{i18n.t("email.form.total")}</FitMeNow>
              </FitMeNow></DContainer>
             <DContainer
              display="flex"
              justifycontent="flex-end"
             >
              <Grade
               color={theme.colors.green600}
               backgroundcolor={theme.colors.green200}
              >A</Grade>
             </DContainer>
            </DContainer>
           </DContainer>
          </TextBox>
          <Player padding='0px'>
           <Audio controls>

            <source src={pitchURL}></source>
           </Audio>
          </Player>
          <TextBox
           height="200px"
           borderradius="15px"
          >
           {i18n.t("email.pitch.paragraph")}
          </TextBox>
         </EmailLeftContainer>
        </SvgBgContainer>
       </ColorBgContainer>
       <EmailInputContainer
        display="flex"
        alignitems="center"
        justifycontent="center"
        padding="0 5% 0 5%"
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
       <UploadText color={theme.colors.gray900}>{i18n.t("uploading.recording.button")}</UploadText>
       <RoundButton width={64} height={64} bordercolor={theme.colors.primary} bgcolor={theme.colors.gray50} id='startButton' onClick={() => startRecording()}>
        <CustomSVG src={MicIcon}></CustomSVG>
       </RoundButton>
       <RoundButton width={64} height={64} bordercolor={theme.colors.primary} bgcolor={theme.colors.gray50} id='stopButton' style={{display: 'none'}} onClick={() => stopRecording()}>
        <CustomSVG src={StopRecording}></CustomSVG>
       </RoundButton>
       <UploadText color={theme.colors.gray500}>{i18n.t("uploading.recording.hint1")} <br />{i18n.t("uploading.recording.hint2")}</UploadText>
      </RecordingBox>
     </ContainerUploading>
    }

    {wizardIndex === "processing" &&
     <ContainerProcessing>
      <SmallTitle color='black'>🤖 {processstatus} <Loading /></SmallTitle>
      <ProcessingBox bordercolor={theme.colors.gray200} bgcolor={theme.colors.white}>
       <ProcessingProgress>
        <TextBoxProcessing>
         <ProcessImage src={Processimagegray}></ProcessImage>
        </TextBoxProcessing>
        <TextBoxProcessing>
         <ProcessImage src={Processimageprimary} percent={100 - responseProgress}></ProcessImage>
        </TextBoxProcessing>
       </ProcessingProgress>
      </ProcessingBox>
      <TextBox bgcolor={theme.colors.white} bordercolor={theme.colors.white}>
       <DscrText
        color={theme.colors.gray900}
       >{i18n.t("process.paragraph")}</DscrText>
      </TextBox>
     </ContainerProcessing>
    }

    {wizardIndex === "result" &&
     <MainContainer>
      <EmailLeftContainer
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

          <FormTitle
           color={theme.colors.gray500}
          >Your Grade</FormTitle>
          <Grade color={totalScore >= 60 ? theme.colors.green600 : totalScore >= 40 ? theme.colors.yellow600 : totalScore >= 20 ? theme.coors.orange600 : theme.colors.red600}>
           {totalScore >= 70 ? 'A+' : totalScore >= 65 ? 'A' : totalScore >= 60 ? 'A-' : totalScore >= 50 ? 'B+' : totalScore >= 45 ? 'B' : totalScore >= 40 ? 'B-' : totalScore >= 30 ? 'C+' : totalScore >= 25 ? 'C' : 'C-'}
          </Grade>
         </GradeTitle>
         <ScoreContainer>
          <Score color={totalScore >= 60 ? theme.colors.green600 : totalScore >= 40 ? theme.colors.yellow600 : totalScore >= 20 ? theme.colors.orange600 : theme.colors.red600}>
           {totalScore}
          </Score>
          <Score color={theme.colors.gray500}>
           /80
          </Score>
         </ScoreContainer>
        </GradeContainer>
       </TextBox>

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
         bgcolor={theme.colors.gray200}
         bordercolor={theme.colors.gray200}
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
           style={{cursor: 'pointer'}}
          >
           <img src={DownloadIcon} alt="downloadIcon" />
           <FormTitle
            color="white"
            fontsizes="18px"
           >{i18n.t("getstart.analysis.button.download")}</FormTitle>
          </DContainer>
          <DContainer
           display="flex"
           gap="10px"
           onClick={() => CopytoClipboard(pitchcontent)}
           style={{cursor: 'pointer'}}
          >
           <img src={CopyIcon} alt={CopyIcon} />
           <FormTitle
            color="white"
            fontsizes="18px"
           >{i18n.t("getstart.analysis.button.copy")}</FormTitle>
          </DContainer>
         </DContainer>
        </PitchTextFormBottomBar>
       </FormText>

       <Collapse id='results'>
        <ProcessError message={noticeMessage}>{noticeMessage}</ProcessError>
        <List bordercolor={theme.colors.gray200}>
         <Response>
          <Feature color={theme.colors.gray800} onClick={handleClick}>
           Features and Benefits
           {/* <Grade2 color={theme.colors.yellow600} bgcolor={theme.colors.yellow50} className="grade">{result[0]}</Grade2> */}

           { result[0] && createGradeBadge(result[0])}
           <ResponseIcon src={arrow} alt="arrow" />
          </Feature>
          <Featuredetail color={theme.colors.primary}>{i18n.t("about.analysis.readiness.evaluation.title")}</Featuredetail>
          <Featuredetail color={theme.colors.gray700}>{result[1]}</Featuredetail>
          <Featuredetail color={theme.colors.primary}>{i18n.t("about.analysis.readiness.recommendation.title")}</Featuredetail>
          <Featuredetail color={theme.colors.gray700}>{result[2]}</Featuredetail>
         </Response>
        </List>

        <List bordercolor={theme.colors.gray200}>
         <Response>
          <Feature color={theme.colors.gray800} onClick={handleClick}>
           Readiness
           {/* <Grade2 color={theme.colors.yellow600} bgcolor={theme.colors.yellow50} className="grade">{result[3]}</Grade2> */}
           {createGradeBadge(result[3])}
           <ResponseIcon src={arrow} alt="arrow" />
          </Feature>
          <Featuredetail color={theme.colors.primary}>{i18n.t("about.analysis.readiness.evaluation.title")}</Featuredetail>
          <Featuredetail color={theme.colors.gray700}>{result[4]}</Featuredetail>
          <Featuredetail color={theme.colors.primary}>{i18n.t("about.analysis.readiness.recommendation.title")}</Featuredetail>
          <Featuredetail color={theme.colors.gray700}>{result[5]}</Featuredetail>
         </Response>
        </List>

        <List bordercolor={theme.colors.gray200}>
         <Response>
          <Feature color={theme.colors.gray800} onClick={handleClick}>
           Barrier To Entry
           {/* <Grade2 color={theme.colors.yellow600} bgcolor={theme.colors.yellow50} className="grade">{result[6]}</Grade2> */}
           {createGradeBadge(result[6])}
           <ResponseIcon src={arrow} alt="arrow" />
          </Feature>
          <Featuredetail color={theme.colors.primary}>{i18n.t("about.analysis.readiness.evaluation.title")}</Featuredetail>
          <Featuredetail color={theme.colors.gray700}>{result[7]}</Featuredetail>
          <Featuredetail color={theme.colors.primary}>{i18n.t("about.analysis.readiness.recommendation.title")}</Featuredetail>
          <Featuredetail color={theme.colors.gray700}>{result[8]}</Featuredetail>
         </Response>
        </List>

        <List bordercolor={theme.colors.gray200}>
         <Response>
          <Feature color={theme.colors.gray800} onClick={handleClick}>
           Adoption
           {/* <Grade2 color={theme.colors.yellow600} bgcolor={theme.colors.yellow50} className="grade">{result[9]}</Grade2> */}
           {createGradeBadge(result[9])}
           <ResponseIcon src={arrow} alt="arrow" />
          </Feature>
          <Featuredetail color={theme.colors.primary}>{i18n.t("about.analysis.readiness.evaluation.title")}</Featuredetail>
          <Featuredetail color={theme.colors.gray700}>{result[10]}</Featuredetail>
          <Featuredetail color={theme.colors.primary}>{i18n.t("about.analysis.readiness.recommendation.title")}</Featuredetail>
          <Featuredetail color={theme.colors.gray700}>{result[11]}</Featuredetail>
         </Response>
        </List>

        <List bordercolor={theme.colors.gray200}>
         <Response>
          <Feature color={theme.colors.gray800} onClick={handleClick}>
           Supply Chain
           {/* <Grade2 color={theme.colors.yellow600} bgcolor={theme.colors.yellow50} className="grade">{result[12]}</Grade2> */}
           {createGradeBadge(result[12])}
           <ResponseIcon src={arrow} alt="arrow" />
          </Feature>
          <Featuredetail color={theme.colors.primary}>{i18n.t("about.analysis.readiness.evaluation.title")}</Featuredetail>
          <Featuredetail color={theme.colors.gray700}>{result[13]}</Featuredetail>
          <Featuredetail color={theme.colors.primary}>{i18n.t("about.analysis.readiness.recommendation.title")}</Featuredetail>
          <Featuredetail color={theme.colors.gray700}>{result[14]}</Featuredetail>
         </Response>
        </List>

        <List bordercolor={theme.colors.gray200}>
         <Response>
          <Feature color={theme.colors.gray800} onClick={handleClick}>
           Market Size
           {/* <Grade2 color={theme.colors.yellow600} bgcolor={theme.colors.yellow50} className="grade">{result[15]}</Grade2> */}
           {createGradeBadge(result[15])}
           <ResponseIcon src={arrow} alt="arrow" />
          </Feature>
          <Featuredetail color={theme.colors.primary}>{i18n.t("about.analysis.readiness.evaluation.title")}</Featuredetail>
          <Featuredetail color={theme.colors.gray700}>{result[16]}</Featuredetail>
          <Featuredetail color={theme.colors.primary}>{i18n.t("about.analysis.readiness.recommendation.title")}</Featuredetail>
          <Featuredetail color={theme.colors.gray700}>{result[17]}</Featuredetail>
         </Response>
        </List>

        <List bordercolor={theme.colors.gray200}>
         <Response>
          <Feature color={theme.colors.gray800} onClick={handleClick}>
           Entrepreneur Experience
           {/* <Grade2 color={theme.colors.yellow600} bgcolor={theme.colors.yellow50} className="grade">{result[18]}</Grade2> */}
           {createGradeBadge(result[18])}
           <ResponseIcon src={arrow} alt="arrow" />
          </Feature>
          <Featuredetail color={theme.colors.primary}>{i18n.t("about.analysis.readiness.evaluation.title")}</Featuredetail>
          <Featuredetail color={theme.colors.gray700}>{result[19]}</Featuredetail>
          <Featuredetail color={theme.colors.primary}>{i18n.t("about.analysis.readiness.recommendation.title")}</Featuredetail>
          <Featuredetail color={theme.colors.gray700}>{result[20]}</Featuredetail>
         </Response>
        </List>

        <List bordercolor={theme.colors.transparent}>
         <Response>
          <Feature color={theme.colors.gray800} onClick={handleClick}>
           Financial Expectation
           {/* <Grade2 color={theme.colors.yellow600} bgcolor={theme.colors.yellow50} className="grade">{result[21]}</Grade2> */}
           {createGradeBadge(result[21])}
           <ResponseIcon src={arrow} alt="arrow" />
          </Feature>
          <Featuredetail color={theme.colors.primary}>{i18n.t("about.analysis.readiness.evaluation.title")}</Featuredetail>
          <Featuredetail color={theme.colors.gray700}>{result[22]}</Featuredetail>
          <Featuredetail color={theme.colors.primary}>{i18n.t("about.analysis.readiness.recommendation.title")}</Featuredetail>
          <Featuredetail color={theme.colors.gray700}>{result[23]}</Featuredetail>
         </Response>
        </List>


       </Collapse>
      </EmailLeftContainer>

     </MainContainer>
    }
   </Wrapper>
  </>
 );
};

export default Test;