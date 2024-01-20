import {
    Wrapper, MainContainer, ColorBgContainer, F,
    SmallTitle, DContainer, Label, Required, EmailInput,
    CustomSVG, Button, ButtonDiv, EmailInputContainer, SubForm, Formimage, TermsLink
  } from './styled';
  
  import RightArrowIcon from "../../assets/images/arrow-right.svg"
  
  import React, { useState, useEffect } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { setEmail } from '../../actions/pitch';
  import { useTheme } from 'styled-components';
  import { i18n } from "../../translate/i18n";
  import { useNavigate } from 'react-router-dom';
  
  const Email = () => {
    const theme = useTheme();
    const [wizardIndex, setWizardIndex] = useState('email');
    const [emailError, setEmailError] = useState('');
    const [emailEnable, setEmailEnable] = useState('failed');
    const [inputEmail, setInputEmail] = useState('');
    const navigate = useNavigate();
  
    const email = useSelector((state) => state.pitch.email);
    console.log(email);
    const dispatch = useDispatch();
  
    const handleEmailChange = (event) => {
      if (validateEmail(event.target.value)) {
        setEmailEnable('valid')
      } else setEmailEnable('failed')
  
      setInputEmail(event.target.value);
    };
  
    const validateEmail = (emaildata) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emaildata)) {
        setEmailError('Invalid email address');
        return false;
      }
      console.log("true")
      setEmailError('');
      return true;
    };
  
    useEffect(() => {
      if(email){
        navigate('/upload', { state: { email: inputEmail } });
        return;
      }      
      setWizardIndex("email");
      setEmailEnable('failed');
    }, [])

    const handleWizardIndex = (index) => {
      if (!validateEmail(inputEmail)) {
        console.log(emailError)
        return;
      }
      navigate('/upload', { state: { email: inputEmail } });
      setWizardIndex(index);
  
      console.log(wizardIndex)
    };
  
    return (
      <>
        <Wrapper bgcolor={theme.colors.gray50}>
  
          {wizardIndex === "email" &&
            <MainContainer color={theme.colors.gray50}>
              <F>
                <ColorBgContainer>
                  <Formimage></Formimage>
                </ColorBgContainer>
                <EmailInputContainer
                  bgcolor={theme.colors.white}
                >
                  <SubForm>
                    <SmallTitle color="black">{i18n.t("email.textbox.paragraph")}</SmallTitle>
                    <Label color={theme.colors.gray900}>{i18n.t("email.textbox.label")}<Required>*</Required> </Label>
                    <EmailInput type='email' onChange={handleEmailChange} bordercolor={theme.colors.gray300} bgcolor={theme.colors.white}></EmailInput>
                    <Label color='#FF0000'>{emailError}</Label>
                    <Label onClick={() => {window.open('/terms', '_blank')}}>{i18n.t("email.textbox.terms")}<TermsLink style={{ cursor: 'pointer' }}>{i18n.t("email.textbox.termsLink")}</TermsLink></Label>
                    <ButtonDiv>
                      <Button onClick={() => handleWizardIndex("uploading")} isenable={emailEnable} bgcolor={theme.colors.primary}
                        bordercolor={theme.colors.primary} color={theme.colors.white}>
                        <DContainer
                          display="flex"
                          justifycontent="center"
                          alignitems="center"
                        >
                          {i18n.t("email.textbox.button")}
                          <CustomSVG src={RightArrowIcon} alt={RightArrowIcon}></CustomSVG>
                        </DContainer>
                      </Button>
                    </ButtonDiv>
                  </SubForm>
                </EmailInputContainer>
              </F>
            </MainContainer>
          }
        </Wrapper>
      </>
    );
  };
  
  export default Email;