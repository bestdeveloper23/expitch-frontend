import {
  Container,
  LoginContainer,
  LoginForm,
  LoginTitleDiv,
  Title,
  FormContainer,
  GrayArea,
  Form378,
  ButtonDiv,
  Button,
  DContainer,
} from "./styled";

import { useTheme } from "styled-components";
import { i18n } from "./../../translate/i18n";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecaptcha } from "../../core/hooks/useRecaptcha";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../actions/auth";
import { setEmail } from "../../actions/pitch";

export default function VerifyUser() {
  const theme = useTheme();
  const [urlToken, setToken] = useState(null);
  const [verifyMessage, setVerifyMessage] = useState("Success");
  const navigate = useNavigate();
  const { getToken } = useRecaptcha("evaluatePitchRequest");
  const dispatch = useDispatch();

  useEffect(() => {
    // Parse the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const tokenValue = urlParams.get("token");
    setToken(tokenValue);
    verifyToken(tokenValue);
  }, []);

  const verifyToken = async (passedToken) => {
    if (passedToken) {
      try {
        const recaptcha =
          process.env.REACT_APP_NODE_ENV === "development"
            ? ""
            : await getToken();

        const response = await fetch(
          `${process.env.REACT_APP_API_ENDPOINTS}/auth/verify-user`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              token: passedToken,
              recaptchaToken: recaptcha,
            }),
          }
        );
        if (response.ok) {
          const result = await response.json();
          if (result.message === "Success") {
            //success, now store session in cookie
            localStorage.setItem(
              "userInfo",
              JSON.stringify({
                email: result.data.email,
                session_token: result.data.sessionToken,
                sessionJwt: result.data.sessionJwt,
                user_id: result.data.user_id,
              })
            );

            dispatch(setEmail(result.data.email));
            dispatch(
              setCurrentUser(
                {
                  email: result.data.email,
                  session_token: result.data.sessionToken,
                  sessionJwt: result.data.sessionJwt,
                  user_id: result.data.user_id,
                }
              )
            );
            setVerifyMessage("Success");
            navigate("/upload", { state: { email: result.data.email } });
          }
        } else {
          console.error(response);
          setVerifyMessage(response);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <>
      <Container>
        <LoginContainer>
          <LoginForm>
            <FormContainer>
              <GrayArea>
                <LoginTitleDiv></LoginTitleDiv>

                {verifyMessage === "Success" ? (
                  <Form378>
                    <ButtonDiv>
                      <Title color="black"> Success</Title>
                      <Button
                        isenable={"valid"}
                        bgcolor={theme.colors.primary}
                        bordercolor={theme.colors.primary}
                        color={theme.colors.white}
                      >
                        <DContainer
                          display="flex"
                          justifycontent="center"
                          alignitems="center"
                        >
                          {i18n.t("login.loginbutton")}
                        </DContainer>
                      </Button>
                    </ButtonDiv>
                  </Form378>
                ) : (
                  <Form378>
                    {" "}
                    <Title color="black">
                      Something went wrong... Please try again or contact us 😊
                    </Title>{" "}
                  </Form378>
                )}
              </GrayArea>
            </FormContainer>
          </LoginForm>
        </LoginContainer>
      </Container>
    </>
  );
}
