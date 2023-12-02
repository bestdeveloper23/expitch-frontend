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
          <Nav >
            <NavLink to={"/About"}>{i18n.t("footer.links.link_4")}</NavLink>
          </Nav>
          <Nav>
            <NavLink to={"/privacy"}>{i18n.t("footer.links.link_5")}</NavLink>
          </Nav>
          <Nav>
            <NavLink to={"/terms"}>{i18n.t("footer.links.link_6")}</NavLink>
          </Nav>
        </Navs>
        <SocialLinks>
          <Nav >
          <a href="https://www.linkedin.com/company/expitch" target="_blank" rel="noopener noreferrer">
            <Image src={LinkedIn} alt="social" />
            </a>
          </Nav>
          <Nav>
          <a href="https://www.instagram.com/expitchai/" target="_blank" rel="noopener noreferrer">
            <Image src={Instagram} alt="social" />
            </a>
          </Nav>
          <Nav>
          <a href="https://www.youtube.com/channel/UCf6kGr8aodilvNpS_qy8xBQ" target="_blank" rel="noopener noreferrer">
            <Image src={Youtube} alt="social" />
            </a>
          </Nav>
          <Nav>
          <a href="https://twitter.com/expitchai" target="_blank" rel="noopener noreferrer">
            <Image src={Twitter} alt="social" />
            </a>
          </Nav>
        </SocialLinks>
        <Content>{i18n.t("footer.content")}</Content>
      </Container>
    </Section>
  );
}
