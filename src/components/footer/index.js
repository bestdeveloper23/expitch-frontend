import {
  Section,
  Container,
  Navs,
  SocialLinks,
  Nav,
  NavLink,
  Image,
  Content,
} from "./styled";

import { useTheme } from "styled-components";
import { i18n } from "./../../translate/i18n";
import LinkedIn from "../../assets/images/social/linkedin.svg";
import Instagram from "../../assets/images/social/instagram.svg";
import Youtube from "../../assets/images/social/youtube.svg";
import Twitter from "../../assets/images/social/twitter.svg";

export default function Footer() {
  const theme = useTheme();

  return (
    <Section bg={theme.colors.gray900} color={theme.colors.white}>
      <Container>
        <Navs color={theme.colors.white}>
          <Nav>
            <NavLink>{i18n.t("footer.links.link_1")}</NavLink>
          </Nav>
          <Nav>
            <NavLink>{i18n.t("footer.links.link_2")}</NavLink>
          </Nav>
          <Nav>
            <NavLink>{i18n.t("footer.links.link_3")}</NavLink>
          </Nav>
          <Nav>
            <NavLink>{i18n.t("footer.links.link_4")}</NavLink>
          </Nav>
        </Navs>
        <SocialLinks>
          <Nav>
            <Image src={LinkedIn} alt="social" />
          </Nav>
          <Nav>
            <Image src={Instagram} alt="social" />
          </Nav>
          <Nav>
            <Image src={Youtube} alt="social" />
          </Nav>
          <Nav>
            <Image src={Twitter} alt="social" />
          </Nav>
        </SocialLinks>
        <Content>{i18n.t("footer.content")}</Content>
      </Container>
    </Section>
  );
}
