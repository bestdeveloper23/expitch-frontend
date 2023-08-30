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
  padding-inline: 35px;
  border: none;
  position: relative;
  text-align: center;
  display: ${(props)=> props.isopen==="yes"? "block" : "none"};
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
  display: ${(props)=> props.isopen==="yes"? "block" : "none"};
  position: absolute;
  top: 26.5px;
  
  background: transparent;
  cursor: pointer;
  border: none;
  right: 10px;
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
  @media (max-width: ${breakpoint.md}){
    padding: 12px 20px;
    border-radius: 12px;
    font-size: ${typography.sm_bold.size};
  }
`