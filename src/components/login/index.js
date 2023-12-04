import {
  Container, LoginContainer, LoginForm, LoginTitleDiv, Title, RegisterLabel, FormContainer, GrayArea, Form378, Form,
  InputWithLabel, InputField, InputLabel, InputDiv, PasswordDiv, CustomSVG, EmailField, ButtonDiv, Button,
  DContainer, SmallTitle, Label, Required, EmailInput, TermsLink, Text
} from "./styled";

import EyeSlash from "../../assets/images/eye-slash.svg"
import RightArrowIcon from "../../assets/images/arrow-right.svg"
import { useTheme } from "styled-components";
import { i18n } from "./../../translate/i18n";
import React, { useState, useEffect } from 'react';
import { useRecaptcha } from '../../core/hooks/useRecaptcha';





export default function Login() {
  const theme = useTheme();
  const [emailError, setEmailError] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [finalEmail, setFinalEmail] = useState('');
  const [stytchStatus, setStytchStatus] = useState('default');
  const { getToken } = useRecaptcha('evaluatePitchRequest')




  const handleEmailSubmit = async (event) => {
    //setInputEmail(event.target.value);
    if (validateEmail()) {
      try {
        const recaptcha = process.env.REACT_APP_NODE_ENV === 'development' ? '' : await getToken();
        console.log(recaptcha);
        const response = await fetch(`${process.env.REACT_APP_API_ENDPOINTS}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: inputEmail, recaptchaToken: recaptcha }),
        });
        if (response.ok) {

          const result = await response.json();
          if (result.message == 'Success') {
            setFinalEmail(inputEmail);
            setStytchStatus('success');
          }

        } else {
          console.error(response);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputEmail)) {
      setEmailError('Enter valid email address');
      return false;
    }
    setEmailError('');
    return true;
  };







  return (
    <>

      <Container>
        <LoginContainer>
          <LoginForm>
            <FormContainer>

              <GrayArea>
                {stytchStatus === 'default' && (
                  <>
                    <LoginTitleDiv>
                    </LoginTitleDiv>
                    <Form378>
                      <Form>

                        <Title color="black">{i18n.t("login.title")}</Title>
                        <InputWithLabel>
                          <InputField type='email' onChange={(e) => setInputEmail(e.target.value)} placeholder="example@email.com" bordercolor={theme.colors.gray300} bgcolor={theme.colors.white} ></InputField>
                          <Label color='#FF0000'>{emailError}</Label>
                        </InputWithLabel>

                        <ButtonDiv>
                          <Button onClick={handleEmailSubmit} isenable={'valid'} bgcolor={theme.colors.primary}
                            bordercolor={theme.colors.primary} color={theme.colors.white}>
                            <DContainer
                              display="flex"
                              justifycontent="center"
                              alignitems="center"
                            >
                              {i18n.t("login.loginbutton")}

                            </DContainer>
                          </Button>
                        </ButtonDiv>
                        <Label onClick={() => { window.open('/terms', '_blank'); }}>{i18n.t("email.textbox.terms")}<TermsLink style={{ cursor: 'pointer' }}>{i18n.t("email.textbox.termsLink")}</TermsLink></Label>
                      </Form>

                    </Form378></>
                )}
                {stytchStatus === 'success' && (
                  <>
                    <Form>
                      <Title color="black">{i18n.t("login.success")}</Title>
                      <Text color="black">{i18n.t("login.checkemail")}<Text color="#E71561">{finalEmail}</Text></Text>

                    </Form>
                  </>
                )}
              </GrayArea>
            </FormContainer>

          </LoginForm>
        </LoginContainer>
      </Container>

    </>
  );
}
