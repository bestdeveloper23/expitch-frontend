import styled from "styled-components";
import { breakpoint, typography } from "../../theme/theme";
import { Link as RouterLink } from 'react-router-dom';

export const Section = styled.div`
  padding: 64px 0;
  border-top: 1px solid #1F2937;
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
  gap: 32px;
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

export const NavLink = styled(RouterLink)`
text-decoration: none;
color: inherit;  // Or set to a specific color you'd like
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
  color: #9CA3AF;
  padding-top: 16px;
`;
