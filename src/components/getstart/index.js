/* eslint-disable react/jsx-pascal-case */

import {
  ColorBgContainer,
  Section,
  TitleTag,
  Bgtitle,
  Features,
  F,
  PitchForm,
  ShadowpitchForm,
  Player,
  PlayerProgress,
  PlayerTime,
  FormText,
  TextBox,
  PitchTextFormBottomBar,
  FormTitle,
  Rotate,
  GridRows,
  CustomSVG,
  Grade,
  DContainer,
  PitchTextFormTopBar,
  BigTitle,
  MidTitle,
  FitMeNow,
  Title,
  Avatar,
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


import Avatar1 from '../../assets/images/avatar/1.jpg'
import Avatar2 from '../../assets/images/avatar/2.jpg'
import Avatar3 from '../../assets/images/avatar/3.jpg'
import Avatar4 from '../../assets/images/avatar/4.jpg'

import { i18n } from "../../translate/i18n";
import { theme } from "../../theme/theme";

export default function GetStart() {
  return (
    <ColorBgContainer bg={theme.colors.gray900}
    >
      <Section>
        <Bgtitle/>
        <TitleTag>
          <Title>
            {i18n.t('getstart.title')}
          </Title><br />
          <BigTitle
            color="white"
          >
            {i18n.t('getstart.paragraph')}
          </BigTitle>
        </TitleTag>
      </Section>
      <Features>
        <F>
          <PitchForm>
            <ShadowpitchForm height={"0%"}/>
            <Title>
              {i18n.t('getstart.pitch.title')}
            </Title>
            <Player color={theme.colors.white}>
              <img src={PlayIcon} alt={PlayIcon} />
              <PlayerTime>
                0:05 / 0:56
              </PlayerTime>
              <PlayerProgress
                id="playerprogress"
                value='30'
                max='100'
                color={theme.colors.primary}
              />
              <img src={SpeakerWaveIcon} alt={SpeakerWaveIcon} />
              <img src={MoreIcon} alt={MoreIcon} />
            </Player>
            <FormText>
              <TextBox
                height="300px"
                borderradius="15px 15px 0 0"
                borderbottom = "none"
                color={theme.colors.white} 
              >
                {i18n.t("about.pitch.paragraph")}
                <br />
                <br />
                <br />
              </TextBox>
              <PitchTextFormBottomBar position="absolute"
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
          </PitchForm>
          <GridRows
            rows={2}
          >
            <MidTitle
              color="white"
            >
              {i18n.t("getstart.pitch.paragraph")}
              <MidTitle
                color="#E71561"
              >
                &nbsp;{i18n.t("getstart.pitch.highlight")}
              </MidTitle>
            </MidTitle>
            <DContainer
              position="relative"
              padding="0 10% 0 10%"
            >
              <Rotate
                rotate="-12"
                left="0px"
                top="10%"
              >
                <CustomSVG src={DownloadIcon} width="100px" height="100px" fill="red">
                </CustomSVG>
              </Rotate>
              <Rotate
                rotate="15"
                left="40%"
                top="50%"
              >
                <CustomSVG src={ShareIcon} width="100px" height="100px" fill="red">
                </CustomSVG>
              </Rotate>
            </DContainer>
          </GridRows>
        </F>
        <F>
          <GridRows
            rows={2}
          >
            <MidTitle
              color="white"
            >
              {i18n.t('getstart.analysis.paragraph1')}
              <MidTitle
                color="#E71561"
              >
                {i18n.t('getstart.analysis.highlight1')}
              </MidTitle>
              {i18n.t('getstart.analysis.paragraph2')}
              <MidTitle
                color="#E71561"
              >
                {i18n.t('getstart.analysis.highlight2')}
              </MidTitle>
              {i18n.t('getstart.analysis.paragraph3')}
            </MidTitle>
            <DContainer
              position="relative"
              padding="10% 20% 0 20%"
            >
              <Rotate
                position="absolute"
                rotate="-9"
                left="20%"
                top="15%"
              >
                <Grade>A+</Grade>
              </Rotate>
              <Rotate
                position="absolute"
                rotate="12"
                right="20%"
                top="25%"
              >
                <Grade
                  size={45}
                  color="yellow"
                  backgroundcolor="rgba(255,255,0,0.1)"
                >B-</Grade>
              </Rotate>
              <Rotate
                position="absolute"
                rotate="-10"
                left="30%"
                top="50%"
              >
                <Grade
                  size={40}
                  color="#FF9D04"
                  backgroundcolor="rgba(255, 157, 4, 0.1)"
                >C-</Grade>
              </Rotate>
            </DContainer>
          </GridRows>
          <PitchForm>
            <ShadowpitchForm height={"25%"}/>
            <Title>
              {i18n.t('getstart.analysis.title')}
            </Title>
            <FormText>
              <PitchTextFormTopBar
              >
                <DContainer
                  margin="0 0 0 20px"
                  display="flex"
                  justifycontent="space-between"
                  alignitems="center"
                >
                  <DContainer
                    display="flex"
                    gap="10px"
                  >
                    <FormTitle
                      color="white"
                      fontsizes="18px"
                    >
                      {i18n.t("getstart.analysis.feature.title")}
                    </FormTitle>
                    <CustomSVG src={InformationIcon}></CustomSVG>
                  </DContainer>
                  <CustomSVG src={ChevronIcon}></CustomSVG>
                </DContainer>
                <Grade
                  position="absolute"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  size={30}
                  color="yellow"
                  backgroundcolor="rgba(255,255,0,0.1)"
                >B+</Grade>
              </PitchTextFormTopBar>
              <TextBox
                height="500px"
                bordertop="none"
                borderbottom="none"
                borderradius="0px"
              >
                <FormTitle
                  color="#75A8FF"
                  fontsizes="20px"
                >
                  {i18n.t("getstart.analysis.feature.evaluation")}<br /><br />
                </FormTitle>
                <FormTitle
                  color="white"
                  fontsizes="18px"
                >
                  {i18n.t("getstart.analysis.feature.evaluationtext")}
                </FormTitle><br /><br /><br />
                <FormTitle
                  color="#75A8FF"
                  fontsizes="20px"
                >
                  {i18n.t("getstart.analysis.feature.recommendation")}<br /><br />
                </FormTitle>
                <FormTitle
                  color="white"
                  fontsizes="18px"
                >
                  {i18n.t("getstart.analysis.feature.recommendationtext")}
                </FormTitle>
              </TextBox>
              <PitchTextFormBottomBar
              >
                <DContainer
                  margin="0 0 0 20px"
                  display="flex"
                  justifycontent="space-between"
                  alignitems="center"
                >
                  <DContainer
                    display="flex"
                    gap="10px"
                  >
                    <FormTitle
                      color="white"
                      fontsizes="18px"
                    >
                      {i18n.t("getstart.analysis.readiness.title")}
                    </FormTitle>
                    <CustomSVG src={InformationIcon}></CustomSVG>
                  </DContainer>
                  <Rotate rotate="180" right="5%"><CustomSVG src={ChevronIcon}></CustomSVG></Rotate>
                </DContainer>
                <Grade
                  position="absolute"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  size={30}
                  color="yellow"
                  backgroundcolor="rgba(255,255,0,0.1)"
                >B-</Grade>
              </PitchTextFormBottomBar>
            </FormText>
          </PitchForm>
        </F>
        <F>
          <PitchForm>
            <ShadowpitchForm height={"100%"}/>
            <Title>
              {i18n.t("getstart.public.title")}
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
                    fontsizes="15px"
                  >Oliva Martinez</FormTitle>
                  <FitMeNow
                    color="White"
                  >
                    FitMeNow
                  </FitMeNow>
                </PitchForm>
                <DContainer>
                  <DContainer
                    display="flex"
                    justifycontent="flex-end"
                  >
                    <FitMeNow
                      color="green"
                    >
                      89<FitMeNow color="#415C96">/100</FitMeNow>
                    </FitMeNow></DContainer>
                  <DContainer
                    display="flex"
                    justifycontent="flex-end"
                  >
                    <Grade
                      color="#13B718"
                      backgroundcolor="#1F6E52"
                    >A</Grade>
                  </DContainer>
                </DContainer>
              </DContainer>
            </TextBox>
            <Player color={theme.colors.white}>
              <img src={PlayIcon} alt={PlayIcon} />
              <PlayerTime>
                0:05 / 0:56
              </PlayerTime>
              <PlayerProgress
                id="playerprogress"
                value='30'
                max='100'
                color={theme.colors.primary}
              />
              <img src={SpeakerWaveIcon} alt={SpeakerWaveIcon} />
              <img src={MoreIcon} alt={MoreIcon} />
            </Player>
            <TextBox
              height="200px"
              borderradius="15px"
              color={theme.colors.white}
            >
              {i18n.t('getstart.public.textbox.paragraph1')}<br /><br />
              {i18n.t('getstart.public.textbox.paragraph2')}
            </TextBox>
          </PitchForm>
          <GridRows
            rows="2"
          >
            <MidTitle
              color="white"
            >
              {i18n.t("getstart.public.paragraph1")}
              <MidTitle
                color="#E71561"
              >
                &nbsp;{i18n.t("getstart.public.highlight1")}
              </MidTitle>
              &nbsp;{i18n.t("getstart.public.paragraph2")}
              <MidTitle
                color="#E71561"
              >
                &nbsp;{i18n.t("getstart.public.highlight2")}
              </MidTitle>
            </MidTitle>
            <DContainer
              padding="10% 10% 0px 10%"
              position="relative"
              display="flex"
              gap="10px"
              justifycontent="space-between"
            >
              <DContainer>
                <Avatar
                  imageSrc={Avatar1}
                  avatarTitle="Following"
                  comment={false}
                  titleState={false}
                />
              </DContainer>
              <DContainer top="150px">
                <Avatar
                  imageSrc={Avatar2}
                  avatarTitle=""
                  comment={false}
                  titleState={false}
                />
              </DContainer>
                <Avatar
                  imageSrc={Avatar3}
                  avatarTitle="+ Follow"
                  comment={false}
                  titleState={true}
                />
              <DContainer top="150px">
                <Avatar
                  imageSrc={Avatar4}
                  avatarTitle=""
                  comment={true}
                  titleState={false}
                />
              </DContainer>
            </DContainer>
          </GridRows>
        </F>
      </Features>
    </ColorBgContainer>
  );
}



