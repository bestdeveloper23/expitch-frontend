import {
  Section,
  SectionTitle,
  SectionDescription,
  Link,
  Image,
  Brand,
  Span,
  MemberWrapper,
  Member,
  MemberAvatar,
  MemberName,
  MemberTitle,
  MemberDescription,
  Container,
  Right,
  Left,
  SectionTop,
  SectionBottom,
  MemberContent,
} from "./styled";

import { useTheme } from "styled-components";
import { i18n } from "./../../translate/i18n";

import member_1 from "../../assets/images/member/member_1.png";
import member_2 from "../../assets/images/member/member_2.png";
import member_3 from "../../assets/images/member/member_3.png";
import member_4 from "../../assets/images/member/member_4.png";
import arrowIcon from "../../assets/images/arrow-right-circle.svg";
import logos from '../../assets/images/logos.svg';

export default function Research() {
  const theme = useTheme();
  return (
    <Section>
      <Container>
        <SectionTop>
          <Left>
            <SectionTitle>{i18n.t("research.title")}</SectionTitle>
            <SectionDescription color={theme.colors.gray700}>
              {i18n.t("research.paragraph")}
            </SectionDescription>
            <Link color={theme.colors.gray900}>
              <Span>{i18n.t("research.link")}</Span>
              <Image src={arrowIcon} alt="arrowIcon" />
            </Link>
          </Left>
          <Right>
            <Image src={logos} alt="logos" />
          </Right>
        </SectionTop>
        <SectionBottom>
          <MemberWrapper>
            <Member>
              <MemberAvatar src={member_1} />
              <MemberContent>
                <MemberName color={theme.colors.gray900}>{i18n.t("research.member_1.name")}</MemberName>
                <MemberTitle color={theme.colors.primary}>
                  {i18n.t("research.member_1.responsible")}
                </MemberTitle>
                <MemberDescription color={theme.colors.gray700}>
                  {i18n.t("research.member_1.university")}
                </MemberDescription>
              </MemberContent>
            </Member>
            <Member>
              <MemberAvatar src={member_2} />
              <MemberContent>
                <MemberName color={theme.colors.gray900}>{i18n.t("research.member_2.name")}</MemberName>
                <MemberTitle color={theme.colors.primary}>
                  {i18n.t("research.member_2.responsible")}
                </MemberTitle>
                <MemberDescription color={theme.colors.gray700}>
                  {i18n.t("research.member_2.university")}
                </MemberDescription>
              </MemberContent>
            </Member>
            <Member>
              <MemberAvatar src={member_3} />
              <MemberContent>
                <MemberName color={theme.colors.gray900}>{i18n.t("research.member_3.name")}</MemberName>
                <MemberTitle color={theme.colors.primary}>
                  {i18n.t("research.member_3.responsible")}
                </MemberTitle>
                <MemberDescription color={theme.colors.gray700}>
                  {i18n.t("research.member_3.university")}
                </MemberDescription>
              </MemberContent>
            </Member>
            <Member>
              <MemberAvatar src={member_4} />
              <MemberContent>
                <MemberName color={theme.colors.gray900}>{i18n.t("research.member_4.name")}</MemberName>
                <MemberTitle color={theme.colors.primary}>
                  {i18n.t("research.member_4.responsible")}
                </MemberTitle>
                <MemberDescription color={theme.colors.gray700}>
                  {i18n.t("research.member_4.university")}
                </MemberDescription>
              </MemberContent>
            </Member>
          </MemberWrapper>
        </SectionBottom>
      </Container>
    </Section>
  );
}
