import styled from "styled-components";

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
  row-gap: 32px; 
`;

export const NavWrapper = styled.div``;

export const Navs = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0;
`;

export const Nav = styled.li`
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  padding: 8px 20px;
`;

export const NavLink = styled.a`
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  @media (max-width: 768px) {
    font-size: 16px;
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
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;
