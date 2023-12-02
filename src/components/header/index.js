import {
  Container,
  NavBar,
  Logo,
  Notice,
  Links,
  CloseButton,
  TestButton,
  LinkDiv,
  LoginButton,
  ButtonDiv
} from "./styled";
import { useState } from "react";
import { i18n } from "./../../translate/i18n";
import { useTheme } from "styled-components";
import LogoImage from "../../assets/images/expitchLogo.svg"

export default function Header() {

  const theme = useTheme();
  const [isOpen_notice, setIsOpennotice] = useState("yes");

  const handleClick = () => {
    console.log('Button clicked!', isOpen_notice);
    setIsOpennotice("no");
    // Perform any desired logic or state updates here
  };
  return (
    <Container color={theme.colors.gray200}>
      <Notice isopen={isOpen_notice} bgcolor={theme.colors.gray900} color={theme.colors.white}>
        {i18n.t("header.title")}
      </Notice>
      <CloseButton onClick={handleClick} isopen={isOpen_notice}>
        <svg
          width="13.5"
          height="13.5"
          viewBox="0 0 13.5 13.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0" y1="0" x2="13.5" y2="13.5" stroke="#9CA3AF" strokeWidth="2" />
          <line x1="13.5" y1="0" x2="0" y2="13.5" stroke="#9CA3AF" strokeWidth="2" />
        </svg>
      </CloseButton>
      <NavBar>
        <Links href="/"><Logo src={LogoImage} /></Links>
        <LinkDiv>
          <Links href={"/about"} color={theme.colors.gray900}>About{i18n.t("routes.about")}</Links>
          <Links href={"/workflow"} color={theme.colors.gray900}>How it works{i18n.t("routes.workflow")}</Links>
        </LinkDiv>
        <ButtonDiv>
          <LoginButton href={"/login"} color={theme.colors.gray900} bgcolor={theme.colors.white}  >{i18n.t("routes.login")}</LoginButton> 
          <TestButton href={"/email"} color={theme.colors.white} bgcolor={theme.colors.primary}>{i18n.t("routes.test")}</TestButton>      
        </ButtonDiv>
          
        </NavBar>
    </Container>
  );
}
