import {
 ContainerEmail, ColorBgContainer, SvgBgContainer, F, PitchForm, Player,
 PlayerProgress, PlayerTime, TextBox, Title, SmallTitle, FormTitle, FitMeNow,
 Grade, DContainer, Label, Required, EmailInput, ContainerUploading, UploadingBox,
 CustomSVG, UploadText, Button, Button1, RecordingBox, RoundButton, ContainerProcessing, ProcessingBox,
 DscrText, TextBoxProcessing, ProcessingProgress, ProcessImage, ProcessError, EmailLeftContainer, ButtonDiv,
 Collapse, List, Feature, ResponseIcon, Response, Featuredetail, Grade2, EmailInputContainer, SubForm
} from './styled';

import SpeakerWaveIcon from "../../assets/images/speaker-wave.svg"
import PlayIcon from "../../assets/images/play-circle.svg"
import MoreIcon from "../../assets/images/ellipsis-horizontal.svg"
import HeartIcon from "../../assets/images/heart.svg"
import ChatIcon from "../../assets/images/chat-bubble-oval-left.svg"
import RightArrowIcon from "../../assets/images/arrow-right.svg"
import UploadIcon from '../../assets/images/arrow-up-tray.svg'
import MicIcon from '../../assets/images/microphone.svg'
import Processimageprimary from '../../assets/images/process_primary.svg'
import Processimagegray from '../../assets/images/process_gray.svg'
import arrow from "../../assets/images/arrow.svg";

import React, { useReducer, useState, useEffect } from 'react';
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
  const [emailEnable, setEmailEnable] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [processstatus, setProcessstatus] = useState('Processing...');

  const { email, file } = useSelector((state) => ({
   email: state.email,
   file: state.file
  }));
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    if(validateEmail()){
     setEmailEnable(true)
    } else setEmailEnable(false)

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
   // setFile(acceptedFiles);
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

 const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'audio/*', multiple: false, noClick: true,});
 const handleSubmit = (file) => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('pitchFile', file);
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
        setWizardIndex("result")
      })
      .catch((error) => {
        console.error('Error:', error.message, formData);
        setErrorMessage(error.message);
        setProcessstatus(error.message);

      });
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

  useEffect(() => {
   setWizardIndex("email");
   setProcessstatus('Processing...');
   setResponseProgress(0);
  },[])

  return (
   <>
    {/* {wizardIndex === "email" && <Email />}
    {wizardIndex === "uploading" && <Uploading />}
    {wizardIndex === "processing" && <Processing />}
    {wizardIndex === "results" && <Results />} */}

    {wizardIndex === "email" && 
       <ContainerEmail>
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
                                   fontsize="15px"
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
                                           <FormTitle color={theme.colors.white} fontsize="18px">{i18n.t("email.form.favorite")}</FormTitle>
                                       </DContainer>
                                       <DContainer
                                           display="flex"
                                       >
                                           <CustomSVG src={ChatIcon} width="20px" height="20px"></CustomSVG>
                                           <FormTitle color={theme.colors.white} fontsize="18px">{i18n.t("email.form.comment")}</FormTitle>
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
                       <Player>
                           <img src={PlayIcon} alt={PlayIcon}/>
                           <PlayerTime>
                           {i18n.t("email.player.time")}
                           </PlayerTime>
                           <PlayerProgress
                           id="playerprogress"
                           value='30'
                           max='100'
                           color={theme.colors.primary}
                           />
                           <img src={SpeakerWaveIcon} alt={SpeakerWaveIcon}/>
                           <img src={MoreIcon} alt={MoreIcon}/>
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
   </ContainerEmail>
    }

    {wizardIndex === "uploading" && 
          <ContainerUploading>
          <UploadingBox {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`} 
           bordercolor={theme.colors.gray300} bgcolor={theme.colors.white}>
                     <input {...getInputProps()} />
                   <input id="fileInput" type="file" onChange={(e) => onDrop(e.target.files)} style={{ display: 'none' }} accept=".mp3, .mp4, .wav"/>
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
              {i18n.t("uploading.recording.paragraph1")}<br/>{i18n.t("uploading.recording.paragraph2")}
              </UploadText>
              <Button1 onClick={() => document.getElementById('fileInput').click()} bordercolor={theme.colors.primary}
               bgcolor={theme.colors.white} color={theme.colors.gray900}>{i18n.t("uploading.submit.button")}</Button1>
          </UploadingBox>
          <RecordingBox>
              <UploadText color={theme.colors.gray900}>{i18n.t("uploading.recording.button")}</UploadText>
              <RoundButton width={32} height={32} bordercolor={theme.colors.primary} bgcolor={theme.colors.gray50}>
                  <CustomSVG src={MicIcon}></CustomSVG>
              </RoundButton>
              <UploadText color={theme.colors.gray500} fontsize={16}>{i18n.t("uploading.recording.hint1")} <br/>{i18n.t("uploading.recording.hint2")}</UploadText>
          </RecordingBox>
      </ContainerUploading>
    }

    {wizardIndex === "processing" && 
         <ContainerProcessing>
             <SmallTitle color='black'>🤖 {processstatus}</SmallTitle>
             <ProcessingBox bordercolor={theme.colors.gray200} bgcolor={theme.colors.white}>
              <ProcessingProgress>
               <TextBoxProcessing>
                <ProcessImage src={Processimagegray}></ProcessImage>
               </TextBoxProcessing>
               <TextBoxProcessing>
                <ProcessImage src={Processimageprimary}  percent={100-responseProgress}></ProcessImage>
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
         <ContainerEmail>
          <ColorBgContainer>
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
                                   fontsize="15px"
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
                                           <FormTitle color={theme.colors.white} fontsize="18px">{i18n.t("email.form.favorite")}</FormTitle>
                                       </DContainer>
                                       <DContainer
                                           display="flex"
                                       >
                                           <CustomSVG src={ChatIcon} width="20px" height="20px"></CustomSVG>
                                           <FormTitle color={theme.colors.white} fontsize="18px">{i18n.t("email.form.comment")}</FormTitle>
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
                       <Player>
                           <img src={PlayIcon} alt={PlayIcon}/>
                           <PlayerTime>
                           {i18n.t("email.player.time")}
                           </PlayerTime>
                           <PlayerProgress
                           id="playerprogress"
                           value='30'
                           max='100'
                           color={theme.colors.primary}
                           />
                           <img src={SpeakerWaveIcon} alt={SpeakerWaveIcon}/>
                           <img src={MoreIcon} alt={MoreIcon}/>
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
          <Collapse>
            <List bordercolor={theme.colors.gray200}>
                  <Response>
                    <Feature color={theme.colors.gray800} onClick={handleClick}>
                      {i18n.t("about.analysis.barrier.title")}
                      <Grade2 color={theme.colors.green600} bgcolor={theme.colors.green50} className="grade">A+</Grade2>
                      <ResponseIcon src={arrow} alt="arrow" />
                    </Feature>
                    <Featuredetail color={theme.colors.gray700}>{i18n.t("about.analysis.barrier.evaluation.paragraph")}</Featuredetail>
                  </Response>
                </List>
                <List bordercolor={theme.colors.transparent}>
                  <Response>
                    <Feature color={theme.colors.gray800} onClick={handleClick}>
                      {i18n.t("about.analysis.readiness.title")}
                      <Grade2 color={theme.colors.yellow600} bgcolor={theme.colors.yellow50} className="grade">B+</Grade2>
                      <ResponseIcon src={arrow} alt="arrow" />
                    </Feature>
                    <Featuredetail color={theme.colors.primary}>{i18n.t("about.analysis.readiness.evaluation.title")}</Featuredetail>
                    <Featuredetail color={theme.colors.gray700}>{i18n.t("about.analysis.readiness.evaluation.paragraph")}</Featuredetail>
                    <Featuredetail color={theme.colors.primary}>{i18n.t("about.analysis.readiness.recommendation.title")}</Featuredetail>
                    <Featuredetail color={theme.colors.gray700}>{i18n.t("about.analysis.readiness.recommendation.paragraph")}</Featuredetail>
                  </Response>
                </List>
          </Collapse>
         </ContainerEmail>
    }
   </>
  );
};

export default Test;