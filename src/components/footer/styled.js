import styled from "styled-components";
import { breakpoint, typography } from "../../theme/theme";

export const Section = styled.div`
  padding: 64px 0;
  background: ${(props) => props.bg};
  color: ${(props) => props.color};
`;

export const Container = styled.div`
  max-width: 1204px;
  width: 94%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NavWrapper = styled.div``;

export const Navs = styled.ul`
  display: flex;
  gap: 15px;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  @media(max-width: ${breakpoint.sm}){
    flex-direction: column;
    text-align: center;
  }
`;

export const Nav = styled.li`
`;

export const NavLink = styled.a`
  font-size: ${typography.sm.size};
  font-weight: ${typography.sm.fontWeight};
  @media (max-width: 768px) {
    font-size: ${typography.xs.size};
  }
`;

export const SocialLinks = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  column-gap: 24px;
  padding: 0;
`;

export const Image = styled.img``;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${typography.label.size};
  font-weight: ${typography.label.fontWeight};
`;
