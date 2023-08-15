/* eslint-disable react/jsx-pascal-case */

import { 
  Container,
  Title,
  Features,
  F,
  PitchForm,
  Player,
  PlayerProgress,
  PlayerTime,
  TextBox,
  PitchTextFormBottomBar,
  FormTitle,
  Rotate,
  GridRows,
  CustomSVG,
  Grade,
  DContainer,
  PitchTextFormTopBar,
  GridColumns,
  Avatar
} from "./styled";
// import About from "./../../components/about"

import SpeakerWaveIcon from "../../assets/images/speaker-wave.svg"
import PlayIcon from "../../assets/images/play-circle.svg"
import MoreIcon from "../../assets/images/ellipsis-horizontal.svg"
import DownloadIcon from "../../assets/images/arrow-down-tray.svg"
import ShareIcon from "../../assets/images/share.svg"
import CopyIcon from "../../assets/images/document-duplicate.svg"
import InformationIcon from "../../assets/images/information-circle.svg"
import ChevronIcon from "../../assets/images/chevron-down.svg"
import BackgroundSVG from "../../assets/images/background.svg"

import Avatar1 from '../../assets/images/avatar/1.jpg'
import Avatar2 from '../../assets/images/avatar/2.jpg'
import Avatar3 from '../../assets/images/avatar/3.jpg'
import Avatar4 from '../../assets/images/avatar/4.jpg'

import { i18n } from "../../translate/i18n";
import { Form } from "react-router-dom";

export default function GetStart() {
  return (
    <Container>
      <CustomSVG src={BackgroundSVG} width="100vh" height="100%"></CustomSVG>
      <Title>
        <FormTitle
          color='white'
          fontSize="25px"
        >
          {i18n.t('getstart.title')}
        </FormTitle><br/>
        <FormTitle
          color="white"
          fontSize="70px"
        >
          {i18n.t('getstart.paragraph')}
        </FormTitle>
      </Title>
      <Features>
        <F>
          <PitchForm>
            <FormTitle
              color="white"
              fontSize="20px"
            >
              {i18n.t('getstart.pitch.title')}
            </FormTitle>
            <Player>
              <img src={PlayIcon} alt={PlayIcon}/>
              <PlayerTime>
                0:05 / 0:56
              </PlayerTime>
              <PlayerProgress
                id="playerprogress"
                value='30'
                max='100'
              />
              <img src={SpeakerWaveIcon} alt={SpeakerWaveIcon}/>
              <img src={MoreIcon} alt={MoreIcon}/>
            </Player>
            <TextBox
              height="300px"
              borderRadius="15px"
            >
            We believe in the power of exceptional user experiences. Our UX/UI agency is dedicated to creating visually stunning and intuitive digital products that captivate users and drive business growth. Through our meticulous design process, we blend creativity, user-centricity, and technical expertise to craft interfaces that not only look beautiful but also deliver seamless interactions. Join us on a journey to transform your digital presence and leave a lasting impression on your audience.
            In today's digital landscape, user experience has become a critical factor in the success of any business. However, many companies struggle to provide seamless and intuitive user interfaces that effectively meet the needs and expectations of their target audience. Outdated designs, confusing navigation, and lack of user-centered approaches often result in frustrated users, decreased conversion rates, and missed opportunities for growth.
            We believe in the power of exceptional user experiences. Our UX/UI agency is dedicated to creating visually stunning and intuitive digital products that captivate users and drive business growth. Through our meticulous design process, we blend creativity, user-centricity, and technical expertise to craft interfaces that not only look beautiful but also deliver seamless interactions. Join us on a journey to transform your digital presence and leave a lasting impression on your audience.
            In today's digital landscape, user experience has become a critical factor in the success of any business. However, many companies struggle to provide seamless and intuitive user interfaces that effectively meet the needs and expectations of their target audience. Outdated designs, confusing navigation, and lack of user-centered approaches often result in frustrated users, decreased conversion rates, and missed opportunities for growth.
            <br/>
            <br/>
            <br/>
            </TextBox>
            <PitchTextFormBottomBar
              top="-43px"
            >
              <DContainer
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
              >
                <DContainer
                  display="flex"
                  gap="10px"
                >
                  <img src={DownloadIcon} alt={DownloadIcon}/>
                  <FormTitle
                    color="white"
                    fontSize="18px"
                  >Download</FormTitle>
                </DContainer>
                <DContainer
                  display="flex"
                  gap="10px"
                >
                  <img src={CopyIcon} alt={CopyIcon}/>
                  <FormTitle
                    color="white"
                    fontSize="18px"
                  >Copy</FormTitle>
                </DContainer>
              </DContainer>
            </PitchTextFormBottomBar>
          </PitchForm>
          <GridRows
            rows={2}
          >
            <FormTitle
              color="white"
              fontSize="40px"
            >
              {i18n.t("getstart.pitch.paragraph")}<br/>
              <FormTitle 
                color="#E71561"
                fontSize="40px"
              >
                {i18n.t("getstart.pitch.highlight")}
              </FormTitle>
            </FormTitle>
            <div>
              <Rotate
                rotate="-12"
                left="10px"
                top="10px"
                >
                <CustomSVG src={DownloadIcon} width="100px" height="100px" fill="red">
                </CustomSVG>
              </Rotate>
              <Rotate
                rotate="15" 
                left="120px"
                top="-10px"
                >
                <CustomSVG src={ShareIcon} width="100px" height="100px" fill="red">
                </CustomSVG>
              </Rotate>
            </div>
          </GridRows>
        </F>
        <F>
          <GridRows
            rows={2}
          >
            <FormTitle
              color="white"
              fontSize="40px"
            >
              {i18n.t("getstart.analysis.paragraph1")}&nbsp;
              <FormTitle
                color="#E71561"
                fontSize="40px"
              >
                &nbsp;{i18n.t("getstart.analysis.highlight1")}&nbsp;
              </FormTitle>
              {i18n.t("getstart.analysis.paragraph2")}
              <FormTitle
                color="#E71561"
                fontSize="40px"
              >
                &nbsp;{i18n.t("getstart.analysis.highlight2")}&nbsp;
              </FormTitle>
              {i18n.t("getstart.analysis.paragraph3")}
            </FormTitle>
            <DContainer
              padding="10% 20% 0 20%"              
            >
              <DContainer>
                <Rotate
                  rotate="-9"
                >
                  <Grade>A+</Grade>
                </Rotate>
              </DContainer>
              <DContainer 
                margin= "10px 0 0 0"
                display="flex"
                justifyContent="flex-end"
              >
                <Rotate
                  rotate="12"
                  right="20%"
                >
                  <Grade
                    size={45}
                    color="yellow"
                    backgroundColor="rgba(255,255,0,0.1)"
                  >B-</Grade>
              </Rotate>
              </DContainer>
              <DContainer
                margin="10px 0 0 0"
              >
                <Rotate
                  rotate="-10"
                  left="10%"
                >
                  <Grade
                    size={40}
                    color="#FF9D04"
                    backgroundColor="rgba(255, 157, 4, 0.1)"
                  >C-</Grade>
                </Rotate>
              </DContainer>
            </DContainer>
          </GridRows>
          <PitchForm>
            <FormTitle
              color="white"
            >
              {i18n.t('getstart.analysis.title')}
            </FormTitle>
            <PitchTextFormTopBar>
              <DContainer
                margin="0 0 0 20px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <DContainer
                  display="flex"
                  gap="10px"
                >
                  <FormTitle
                    color="white"
                    fontSize="18px"
                  >
                    {i18n.t("getstart.analysis.feature.title")}
                  </FormTitle>
                  <CustomSVG src={InformationIcon}></CustomSVG>
                </DContainer>
                <Grade
                  size={30}
                  color="yellow"
                  backgroundColor="rgba(255,255,0,0.1)"
                >B+</Grade>
                <CustomSVG src={ChevronIcon}></CustomSVG>
              </DContainer>
            </PitchTextFormTopBar>
            <TextBox
              height="500px"
              borderTop="none"
              borderBottom="none"
              borderRadius="0px"
            >
            <FormTitle
              color="#75A8FF"
              fontSize="20px"
            >
              {i18n.t("getstart.analysis.feature.evaluation")}<br/><br/>
            </FormTitle>
            <FormTitle
              color="white"
              fontSize="18px"
            >
              While you touched on the features of your agency, you did not sufficiently emphasize the specific benefits that clients can expect from working with you. To make this section more impactful, it is important to clearly articulate the advantages and value proposition your agency offers, highlighting how your features directly address the pain points and needs of potential clients.
            </FormTitle><br/><br/><br/>
            <FormTitle
              color="#75A8FF"
              fontSize="20px"
            >
              {i18n.t("getstart.analysis.feature.recommendation")}<br/><br/>
            </FormTitle>
            <FormTitle
              color="white"
              fontSize="18px"
            >
              Try to focus more on the unique benefits that clients will gain from your agency's features. Clearly communicate how your features translate into tangible advantages, such as enhanced user experiences, increased user engagement, improved conversion rates, streamlined workflows, and the achievement of clients' business goals. By doing so, you can effectively differentiate your agency from competitors and persuade potential clients to choose your services.
            </FormTitle>
            </TextBox>
            <PitchTextFormBottomBar
              top="-8px"
            >
              <DContainer
                margin="0 0 0 20px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <DContainer
                  display="flex"
                  gap="10px"
                >
                  <FormTitle
                    color="white"
                    fontSize="18px"
                  >
                    {i18n.t("getstart.analysis.readiness.title")}
                  </FormTitle>
                  <CustomSVG src={InformationIcon}></CustomSVG>
                </DContainer>
                <Grade
                  size={30}
                  color="yellow"
                  backgroundColor="rgba(255,255,0,0.1)"
                >B-</Grade>
                <Rotate rotate={180}><CustomSVG src={ChevronIcon}></CustomSVG></Rotate>
              </DContainer>
            </PitchTextFormBottomBar>
          </PitchForm>
        </F>
        <F>
          <PitchForm>
            <FormTitle
              color="white"
              fontSize="20px"
            >{i18n.t("getstart.public.title")}
            </FormTitle>
            <TextBox
              borderRadius="15px"
            >
              <DContainer
                display="flex"
                justifyContent="space-between"
                width="100%"
              >
                <PitchForm>
                  <FormTitle
                    color="#E71561"
                    fontSize="15px"
                  >Oliva Martinez</FormTitle>
                  <FormTitle
                    color="White"
                    fontSize="35px"
                  >FitMeNow</FormTitle>
                </PitchForm>
                <DContainer>
                  <DContainer
                    display="flex"
                    justifyContent="flex-end"
                  >
                    <FormTitle
                      color="green"
                      fontSize="40px"
                    >
                      89<FormTitle color="#415C96" fontSize="40px">/100</FormTitle>
                  </FormTitle></DContainer>
                  <DContainer
                    display="flex"
                    justifyContent="flex-end"
                  >
                    <Grade
                      color="#13B718"
                      backgroundColor="#1F6E52"
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
              />
              <img src={SpeakerWaveIcon} alt={SpeakerWaveIcon}/>
              <img src={MoreIcon} alt={MoreIcon}/>
            </Player>
            <TextBox
              height="200px"
              borderRadius="15px"
            >
              Hi everyone! My name is Olivia, and I'm here to introduce you to FitMeNow, the revolutionary fitness app designed to transform your workout routine. Are you tired of feeling unmotivated and struggling to reach your fitness goals? FitMeNow is here to change that!<br/><br/>
              We've identified a common problem among individuals who want to lead a healthier lifestyle: lack of personalized guidance and motivation. Many people find it challenging to stay consistent with their exercise routines or don't know where to begin. FitMeNow is the solution to these obstacles.
            </TextBox>
          </PitchForm>
          <GridRows
            rows="2"
          >
            <FormTitle
              color="white"
              fontSize="40px"
            >
              {i18n.t("getstart.public.paragraph1")}
              <FormTitle
                color="#E71561"
                fontSize="40px"
              >&nbsp;{i18n.t("getstart.public.highlight1")}&nbsp;</FormTitle>
              {i18n.t("getstart.public.paragraph2")}
              <FormTitle
                color="#E71561"
                fontSize="40px"
              >&nbsp;{i18n.t("getstart.public.highlight2")}&nbsp;</FormTitle>
            </FormTitle>
            <DContainer
              padding="10% 10% 0px 10%"
            >
              <DContainer
                display="flex"
                justifyContent="flex-start"
                gap="20%"
              >
                <Avatar 
                  imageSrc={Avatar1}
                  avatarTitle="Following"
                  comment={false}
                  titleState={false}
                />
                <Rotate
                  top="-20px"
                >
                  <Avatar 
                    imageSrc={Avatar2}
                    avatarTitle=""
                    comment={true}
                    titleState={false}
                />
                </Rotate>
              </DContainer>
              <DContainer
                display="flex"
                justifyContent="flex-end"
                gap="30%"
              >
                <Avatar 
                  imageSrc={Avatar3}
                  avatarTitle="+ Follow"
                  comment={false}
                  titleState={true}
                />
                <Rotate
                  top="-15px"
                >
                  <Avatar 
                    imageSrc={Avatar4}
                    avatarTitle=""
                    comment={false}
                    titleState={false}
                />
                </Rotate>
              </DContainer>
            </DContainer>
          </GridRows>
        </F>
      </Features>
    </Container>
  );
}
