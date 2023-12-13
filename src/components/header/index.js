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
  ButtonDiv,
  ProfileMenuContainer,
  ProfileImageContainer,
  ProfileImage,
  Menu,
  MenuItem,
  Item,
} from "./styled";
import { useState, useEffect } from "react";
import { i18n } from "./../../translate/i18n";
import { useTheme } from "styled-components";
import LogoImage from "../../assets/images/expitchLogo.svg"
import { DContainer } from "../login/styled";
import { useRecaptcha } from "../../core/hooks/useRecaptcha";

export default function Header() {

  const theme = useTheme();
  const [menuopened, setMenuopened] = useState(false);
  const [isOpen_notice, setIsOpennotice] = useState("yes");

  const [user, setUser] = useState(null);
  const { getToken } = useRecaptcha('evaluatePitchRequest');

  useEffect(() => {
    const userInfo = localStorage.getItem('user_info');
    userInfo ? setUser(userInfo) : setUser(null);
    console.log(user)
  }, []);

  const handleClick = () => {
    console.log('Button clicked!', isOpen_notice);
    setIsOpennotice("no");
    // Perform any desired logic or state updates here
  };

  const handleLogout = async (event) => {
    const recaptcha = process.env.REACT_APP_NODE_ENV === 'development' ? '' : await getToken();
    console.log(recaptcha)
    // const userInfo = localStorage.getItem('user_info');
    
    try {
      const response = await fetch(`${process.env.REACT_APP_API_ENDPOINTS}/auth/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ recaptchaToken: recaptcha, sessionJwt: user.sessionJwt, sessionToken: user.session_token }),
      });
      console.log(user)
      if (response.ok) {

        const result = await response.json();
        if (result.message == 'Success') {
          localStorage.removeItem('user_info');
          console.log("Success")
        }

      } else {
        console.error(response);
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
      <DContainer>
        <NavBar>
          <Links href="/"><Logo src={LogoImage} /></Links>
          <LinkDiv>
            <Links href={"/about"} color={theme.colors.gray900}>{i18n.t("routes.about")}</Links>
            <Links href={"/workflow"} color={theme.colors.gray900}>{i18n.t("routes.workflow")}</Links>
          </LinkDiv>
          <ButtonDiv>
            {!user &&
              <LoginButton href={"/login"} color={theme.colors.gray900} bgcolor={theme.colors.white}  >{i18n.t("routes.login")}</LoginButton>
            }
            <TestButton href={"/email"} color={theme.colors.white} bgcolor={theme.colors.primary}>{i18n.t("routes.test")}</TestButton>
            {user &&
              <Menu className="dropdown" >
                <ProfileMenuContainer className="dropdown-toggle user-menu-combination" data-toggle="dropdown" href={"/login"} color={theme.colors.gray900} bgcolor={theme.colors.white} bordercolor={theme.colors.gray900} onClick={() => setMenuopened(!menuopened)} >
                  <ProfileImageContainer>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.9846 14.604C12.8434 13.0979 11.0353 12.125 9 12.125C6.96467 12.125 5.15658 13.0979 4.01539 14.604M13.9846 14.604C15.5279 13.2303 16.5 11.2287 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 11.2287 2.47208 13.2303 4.01539 14.604M13.9846 14.604C12.6596 15.7834 10.9135 16.5 9 16.5C7.08653 16.5 5.34042 15.7834 4.01539 14.604M11.5 7.125C11.5 8.50571 10.3807 9.625 9 9.625C7.61929 9.625 6.5 8.50571 6.5 7.125C6.5 5.74429 7.61929 4.625 9 4.625C10.3807 4.625 11.5 5.74429 11.5 7.125Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </ProfileImageContainer>
                </ProfileMenuContainer>
                {menuopened &&
                  <MenuItem className="dropdown-menu ani-acc-menu" id="userdropdown" role="menu" bordercolor={theme.colors.gray200}>
                    <Item className="wo_user_name" color={theme.colors.gray900}>
                      {i18n.t("routes.profile.settings")}
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18 10.1562C18 14.5745 14.4183 18.1562 10 18.1562C5.58172 18.1562 2 14.5745 2 10.1562C2 5.73797 5.58172 2.15625 10 2.15625C14.4183 2.15625 18 5.73797 18 10.1562ZM12.5 7.65625C12.5 9.03696 11.3807 10.1562 10 10.1562C8.61929 10.1562 7.5 9.03696 7.5 7.65625C7.5 6.27554 8.61929 5.15625 10 5.15625C11.3807 5.15625 12.5 6.27554 12.5 7.65625ZM10 12.1562C8.04133 12.1562 6.30187 13.0948 5.20679 14.5466C6.39509 15.8433 8.1026 16.6562 10 16.6562C11.8974 16.6562 13.6049 15.8433 14.7932 14.5467C13.6981 13.0948 11.9587 12.1562 10 12.1562Z" fill="#6B7280" />
                      </svg>
                    </Item>

                    <Item bordercolor={theme.colors.gray200} color={theme.colors.gray900}>
                      {i18n.t("routes.profile.pitchlist")}
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 4.65625C2 3.27554 3.11929 2.15625 4.5 2.15625H15.5C16.8807 2.15625 18 3.27554 18 4.65625C18 6.03696 16.8807 7.15625 15.5 7.15625H4.5C3.11929 7.15625 2 6.03696 2 4.65625Z" fill="#6B7280" />
                        <path d="M2.75 9.23962C2.33579 9.23962 2 9.57541 2 9.98962C2 10.4038 2.33579 10.7396 2.75 10.7396H17.25C17.6642 10.7396 18 10.4038 18 9.98962C18 9.57541 17.6642 9.23962 17.25 9.23962H2.75Z" fill="#6B7280" />
                        <path d="M2.75 12.8196C2.33579 12.8196 2 13.1554 2 13.5696C2 13.9838 2.33579 14.3196 2.75 14.3196H17.25C17.6642 14.3196 18 13.9838 18 13.5696C18 13.1554 17.6642 12.8196 17.25 12.8196H2.75Z" fill="#6B7280" />
                        <path d="M2.75 16.4063C2.33579 16.4063 2 16.7421 2 17.1563C2 17.5705 2.33579 17.9063 2.75 17.9063H17.25C17.6642 17.9063 18 17.5705 18 17.1563C18 16.7421 17.6642 16.4063 17.25 16.4063H2.75Z" fill="#6B7280" />
                      </svg>
                    </Item>

                    <Item color={theme.colors.gray900} onClick={() => handleLogout()}>
                      {i18n.t("routes.profile.logout")}
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3 4.40625C3 3.16361 4.00736 2.15625 5.25 2.15625H10.75C11.9926 2.15625 13 3.16361 13 4.40625V6.40625C13 6.82046 12.6642 7.15625 12.25 7.15625C11.8358 7.15625 11.5 6.82046 11.5 6.40625V4.40625C11.5 3.99204 11.1642 3.65625 10.75 3.65625H5.25C4.83579 3.65625 4.5 3.99204 4.5 4.40625V15.9062C4.5 16.3205 4.83579 16.6562 5.25 16.6562H10.75C11.1642 16.6562 11.5 16.3205 11.5 15.9062V13.9062C11.5 13.492 11.8358 13.1562 12.25 13.1562C12.6642 13.1562 13 13.492 13 13.9062V15.9062C13 17.1489 11.9926 18.1562 10.75 18.1562H5.25C4.00736 18.1562 3 17.1489 3 15.9062V4.40625Z" fill="#6B7280" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M6 10.1562C6 9.74204 6.33579 9.40625 6.75 9.40625H16.2955L15.2483 8.46372C14.9404 8.18663 14.9154 7.71241 15.1925 7.40453C15.4696 7.09664 15.9438 7.07168 16.2517 7.34878L18.7517 9.59878C18.9098 9.74101 19 9.94363 19 10.1562C19 10.3689 18.9098 10.5715 18.7517 10.7137L16.2517 12.9637C15.9438 13.2408 15.4696 13.2159 15.1925 12.908C14.9154 12.6001 14.9404 12.1259 15.2483 11.8488L16.2955 10.9062H6.75C6.33579 10.9062 6 10.5705 6 10.1562Z" fill="#6B7280" />
                      </svg>

                    </Item>
                  </MenuItem>
                }
              </Menu>
            }
          </ButtonDiv>
        </NavBar>
      </DContainer>
    </Container>
  );
}
