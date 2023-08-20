import {
 ContainerEmail, ColorBgContainer, SvgBgContainer, F, PitchForm, Player,
 PlayerProgress, PlayerTime, TextBox, Title, SmallTitle, FormTitle, FitMeNow,
 Grade, DContainer, Label, Required, EmailInput, ContainerUploading, UploadingBox,
 CustomSVG, UploadText, Button, Button1, RecordingBox, RoundButton, ContainerProcessing, ProcessingBox,
 DscrText, TextBoxProcessing, ProcessingProgress, ProcessImage
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

import React, { useReducer, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setFile } from '../../actions/pitch';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { useTheme } from 'styled-components';

const Test = () => {
  const theme = useTheme();
  const [wizardIndex, setWizardIndex] = useState('email');
  const [responseProgress, setResponseProgress] = useState(0);
  const [emailError, setEmailError] = useState('');
  const [emailEnable, setEmailEnable] = useState(false);

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

  const handleFileChange = (event) => {
    dispatch(setFile(event.target.files[0]));
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
   dispatch(setFile(acceptedFiles));
   // setFile(acceptedFiles);
   console.log(acceptedFiles);
   setWizardIndex("processing");
   handleSubmit();
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
 const handleSubmit = () => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('file', file);
  
    axios
      .post('https://api-stagin-dot-sustained-vial-393016.uc.r.appspot.com/open-ai/getPitchEvalForAudio', formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setResponseProgress(progress);
          console.log(`Upload Progress: ${progress}%`);
          // Perform any progress-related actions or update UI
        },
      })
      .then((response) => {
        // Handle the successful response
        console.log('Response:', response.data);
        // Perform any further actions with the response data
      })
      .catch((error) => {
        // Handle the error
        console.error('Error:', error.message);
        
        // Perform any error handling or display error messages
      });
  };

  useEffect(() => {
   setWizardIndex("email");
   console.log(wizardIndex, "useeffect")
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
               backgroundcolor="#111827"
           >
               <SvgBgContainer>
                   <PitchForm
                       padding="10%"
                   >
                       <Title>
                           Pitch
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
                                   color="#E71561"
                                   fontsize="15px"
                                   >Oliva Martinez</FormTitle>
                                   <FitMeNow
                                   color="White"
                                   >
                                   FitMeNow
                                   </FitMeNow>
                                   <DContainer
                                       display="flex"
                                       gap="20px"
                                   >
                                       <DContainer
                                           display="flex"
                                       >
                                           <CustomSVG src={HeartIcon} width="20px" height="20px"></CustomSVG>
                                           <FormTitle color={theme.colors.white} fontsize="18px">456</FormTitle>
                                       </DContainer>
                                       <DContainer
                                           display="flex"
                                       >
                                           <CustomSVG src={ChatIcon} width="20px" height="20px"></CustomSVG>
                                           <FormTitle color={theme.colors.white} fontsize="18px">1k</FormTitle>
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
                                       89<FitMeNow color="#415C96">/100</FitMeNow>
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
                           0:05 / 0:56
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
                           Hi everyone! My name is Olivia, and I'm here to introduce you to FitMeNow, the revolutionary fitness app designed to transform your workout routine. Are you tired of feeling unmotivated and struggling to reach your fitness goals? FitMeNow is here to change that!<br/><br/>
                           We've identified a common problem among individuals who want to lead a healthier lifestyle: lack of personalized guidance and motivation. Many people find it challenging to stay consistent with their exercise routines or don't know where to begin. FitMeNow is the solution to these obstacles.
                       </TextBox>
                   </PitchForm>
               </SvgBgContainer>
           </ColorBgContainer>
           <DContainer
               display="flex"
               alignitems="center"
               justifycontent="center"
               padding="0 5% 0 5%"
           >
               <PitchForm>
                   <SmallTitle color="black">Please enter your email address to which we will send the results</SmallTitle>
                   <Label color={theme.colors.gray900}>Your email address <Required>*</Required> </Label>
                   <EmailInput type='email' onChange={handleEmailChange} bordercolor={theme.colors.gray300} bgcolor={theme.colors.white}></EmailInput>
                   <Label color='#FF0000'>{emailError}</Label>
                   <DContainer
                       display="flex"
                       justifycontent="flex-end"
                       width="100%"
                   >
                       <Button onClick={() => handleWizardIndex("uploading")} isenable={emailEnable} bgcolor={theme.colors.primary}
                        bordercolor={theme.colors.primary} color={theme.colors.white}>
                           <DContainer
                               display="flex"
                               justifycontent="center"
                               alignitems="center"
                           >
                               Uploader
                               <CustomSVG src={RightArrowIcon} alt={RightArrowIcon}></CustomSVG>
                           </DContainer>
                       </Button>
                   </DContainer>
               </PitchForm>
           </DContainer>
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
                       Drag & drop or choose file to upload
                   </SmallTitle> : 
                     <SmallTitle
                     color={theme.colors.primary}
                       >
                       Drop file...
                   </SmallTitle> 
                 }
              <UploadText
                  color={theme.colors.gray500}
              >
              Upload a 2-5 minute pitch of your startup.<br/>MP3, MP4, WAV, up to 20 MB, up to 5 MIN
              </UploadText>
              <Button1 onClick={() => document.getElementById('fileInput').click()} bordercolor={theme.colors.primary}
               bgcolor={theme.colors.white} color={theme.colors.gray900}>Choose file</Button1>
          </UploadingBox>
          <RecordingBox>
              <UploadText color={theme.colors.gray900}>Or record your voice</UploadText>
              <RoundButton width={32} height={32} bordercolor={theme.colors.primary} bgcolor={theme.colors.gray50}>
                  <CustomSVG src={MicIcon}></CustomSVG>
              </RoundButton>
              <UploadText color={theme.colors.gray500} fontsize={16}>Just click on the button and start talking. <br/>You have 5 minutes.</UploadText>
          </RecordingBox>
      </ContainerUploading>
    }

    {wizardIndex === "processing" && 
         <ContainerProcessing>
             <SmallTitle color='black'>🤖 Processing...</SmallTitle>
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
                 <DscrText fontsize={22}
                  color={theme.colors.gray900} 
                 >Sit tight as we unleash a team of eager investor robots to dissect your pitch... Beep-boop... our supercomputing overlords began crunching numbers!</DscrText>
             </TextBox>
         </ContainerProcessing>
     
    }

   </>
  );
};

export default Test;