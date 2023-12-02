import {
  ColorBgContainer,
  Section,
  TitleTag,
  Bgtitle,
  Features,
  F,
  PitchForm,
  Freverse,
  Rotate,
  GridRows,
  CustomSVG,
  Grade,
  DContainer,
  BigTitle,
  MidTitle,
  Title,
  Formimage
} from "./styled";

import DownloadIcon from "../../assets/images/arrow-down-tray.svg"
import ShareIcon from "../../assets/images/share.svg"
import pitchImage from "../../assets/images/feature-1.webp"
import analysisImage from "../../assets/images/feature-2.webp"

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
        <Freverse>
          <PitchForm>
            <Formimage src={pitchImage}></Formimage>
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
        </Freverse>
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
          <PitchForm custompb="50px">
            <Formimage src={analysisImage}/>
          </PitchForm>
        </F>
      </Features>
    </ColorBgContainer>
  );
}



