import styled from "styled-components";
import { breakpoint, typography } from "../../theme/theme";

export const Container = styled.section`
  width: 100%;
  padding: 0;
  margin: 0;
  position: relative;
  border-bottom: 1px solid ${(props) => props.color};
  background-color: white;
`;

export const DContainer = styled.div`
    width: 100%;
    padding: 0;
    margin: 0;
`

export const NavBar = styled.div`

  @media (min-width: ${breakpoint.md}) {
    min-height: 80px;
    padding: 10px 30px;
  }
  
  @media (min-width: ${breakpoint.lg}) {
    max-width: 1204px;
    min-height: 94px;
  }
  padding: 10px 10px;
  max-width: 1204px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Logo = styled.img`
  width: 82px;
  height: auto;
  cursor: pointer;
  @media (max-width: ${breakpoint.md}){
    width: 20vw;
  }
`
export const Notice = styled.div`
  background-color: ${(props) => props.bgcolor} !important;
  color: ${(props) => props.color};
  padding: 10px;
  padding-right: 45px;
  border: none;
  position: relative;
  text-align: center;
  font-size: 14px;
  display: ${(props) => props.isopen === "yes" ? "block" : "none"};
`

export const LinkDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  @media(max-width: ${breakpoint.md}){
    display: none;
  }
`;

export const Links = styled.a`
  text-decoration: none;
  display: flex;
  cursor: pointer;
  color: ${(props) => props.color};
  font-size: ${typography.sm.size};
  font-weight: ${typography.sm.fontWeight};
  align-items: center;
  @media (max-width: ${breakpoint.md}){
    font-size: ${typography.xs.size};
  }
`;

export const CloseButton = styled.button`
  display: ${(props) => props.isopen === "yes" ? "block" : "none"};
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  cursor: pointer;
  border: none;
  @media (min-width: ${breakpoint.md}) {
    right: 20px;
    top: 13.25px;
  }
  
  @media (min-width: ${breakpoint.lg}) {
    right: 40px;
  }
`
export const TestButton = styled.a`
  text-decoration: none;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  padding: 12px 26px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: ${typography.sm_bold.size};
  font-weight: ${typography.sm_bold.fontWeight};
  line-height: 22px;
  @media (max-width: ${breakpoint.md}){
    padding: 10px 16px;
    border-radius: 12px;
    font-size: ${typography.text.size};
  }
`
export const LoginButton = styled.a`
  text-decoration: none;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  padding: 12px 26px;
  border-radius: 12px;
  border: 1px solid var(--primary, #E71561);
  cursor: pointer;
  font-size: ${typography.sm_bold.size};
  font-weight: ${typography.sm_bold.fontWeight};
  line-height: 22px;
  @media (max-width: ${breakpoint.md}){
    padding: 10px 16px;
    border-radius: 12px;
    font-size: ${typography.text.size};
  } 
`

export const ButtonDiv = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`

export const ProfileMenuContainer = styled.div`
  display: block;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  padding: 12px 12px;
  border-radius: 12px;
  border: 1px solid ${(props) => props.bordercolor};
  cursor: pointer;
  font-size: ${typography.sm_bold.size};
  font-weight: ${typography.sm_bold.fontWeight};
  @media (max-width: ${breakpoint.md}){
    padding: 12px 12px;
    border-radius: 12px;
    font-size: ${typography.sm_bold.size};
  }

  &:hover {
    color: var(--primary, #E71561);
    border-color: var(--primary, #E71561);
  }
`

export const ProfileImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
`

export const Menu = styled.div`
  position: relative;
`

export const MenuItem = styled.div`
  position: absolute;
  right: 0;
  transform: translateY(5px);
  display: flex;
  flex-direction: column;
  color: ${(props) => props.color};
  border-radius: 12px;
  border: 1px solid ${(props) => props.bordercolor};
  cursor: pointer;
  font-size: ${typography.sm_bold.size};
  font-weight: ${typography.sm_bold.fontWeight};
  z-index: 99;

  @media (max-width: ${breakpoint.md}){
    border-radius: 12px;
    font-size: ${typography.sm_bold.size};
  }
`

export const Item = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  padding: 12px 12px;
  border: ${(props) => props.bordercolor ? "1px solid" + props.bordercolor : "none"};
  border-left: none;
  border-right: none;
  cursor: pointer;
  font-size: ${typography.sm_bold.size};
  font-weight: ${typography.sm_bold.fontWeight};
  @media (max-width: ${breakpoint.md}){
    padding: 12px 12px;
    font-size: ${typography.sm_bold.size};
  }
  
  &:hover {
    color: var(--primary, #E71561);
  }
`