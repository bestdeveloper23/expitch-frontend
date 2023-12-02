import {
  Section,
  SectionTitle,
  Card,
  CardContent,
  // Image,
  Container,
  CardUserName,
  CardGrid,
  Empty,
  SectionWrap,
} from "./styled";
import { i18n } from "./../../translate/i18n";
import avatar_1 from "../../assets/images/avatar/avatar_1.png";
import avatar_2 from "../../assets/images/avatar/avatar_2.png";
import avatar_3 from "../../assets/images/avatar/avatar_3.png";
import avatar_4 from "../../assets/images/avatar/avatar_4.png";
import avatar_5 from "../../assets/images/avatar/avatar_5.png";
import avatar_6 from "../../assets/images/avatar/avatar_6.png";
import avatar_7 from "../../assets/images/avatar/avatar_7.png";
import avatar_8 from "../../assets/images/avatar/avatar_8.png";
import { theme } from "../../theme/theme";

export default function Inspiring() {

  return (
    <Section>
      <SectionWrap>
        <SectionTitle color={theme.colors.gray900}>{i18n.t("inspiring.title")}</SectionTitle>
        <SectionTitle color={theme.colors.primary}>{i18n.t("inspiring.red_title")}</SectionTitle>
      </SectionWrap>
      <Container>
        <CardGrid>
        <Empty/>
          <Card>
            {/* <Image src={avatar_1} /> */}
            <CardContent color={theme.colors.gray900}>{i18n.t("inspiring.card1.content")}</CardContent>
            <CardUserName color={theme.colors.gray500}>{i18n.t("inspiring.card1.name")}</CardUserName>
          </Card>
          <Card>
            {/* <Image src={avatar_5} /> */}
            <CardContent color={theme.colors.gray900}>{i18n.t("inspiring.card5.content")}</CardContent>
            <CardUserName color={theme.colors.gray500}>{i18n.t("inspiring.card5.name")}</CardUserName>
          </Card>
        </CardGrid>
        <CardGrid>
          <Card>
            {/* <Image src={avatar_2} /> */}
            <CardContent color={theme.colors.gray900}>{i18n.t("inspiring.card2.content")}</CardContent>
            <CardUserName color={theme.colors.gray500}>{i18n.t("inspiring.card2.name")}</CardUserName>
          </Card>
          <Card>
            {/* <Image src={avatar_6} /> */}
            <CardContent color={theme.colors.gray900}>{i18n.t("inspiring.card6.content")}</CardContent>
            <CardUserName color={theme.colors.gray500}>{i18n.t("inspiring.card6.name")}</CardUserName>
          </Card>
          <Empty/>
        </CardGrid>
        <CardGrid>
          <Empty/>
          <Card>
            {/* <Image src={avatar_3} /> */}
            <CardContent color={theme.colors.gray900}>{i18n.t("inspiring.card3.content")}</CardContent>
            <CardUserName color={theme.colors.gray500}>{i18n.t("inspiring.card3.name")}</CardUserName>
          </Card>
          <Card>
            {/* <Image src={avatar_7} /> */}
            <CardContent color={theme.colors.gray900}>{i18n.t("inspiring.card7.content")}</CardContent>
            <CardUserName color={theme.colors.gray500}>{i18n.t("inspiring.card7.name")}</CardUserName>
          </Card>
        </CardGrid>
        <CardGrid>
          <Card>
            {/* <Image src={avatar_4} /> */}
            <CardContent color={theme.colors.gray900}>{i18n.t("inspiring.card4.content")}</CardContent>
            <CardUserName color={theme.colors.gray500}>{i18n.t("inspiring.card4.name")}</CardUserName>
          </Card>
          <Card>
            {/* <Image src={avatar_8} /> */}
            <CardContent color={theme.colors.gray900}>{i18n.t("inspiring.card8.content")}</CardContent>
            <CardUserName color={theme.colors.gray500}>{i18n.t("inspiring.card8.name")}</CardUserName>
          </Card>
          <Empty/>
        </CardGrid>

      </Container>
    </Section>
  );
}
