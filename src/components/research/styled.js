import styled from "styled-components";
import { breakpoint, typography } from "../../theme/theme";

export const Section = styled.div`
  padding: 156px 0;
  @media (max-width: ${breakpoint.md}) {
    padding: 30px 0;
  }
`;

export const Container = styled.div`
  max-width: 1204px;
  width: 94%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const SectionTop = styled.div`
  display: flex;
  margin-bottom: 128px;
  @media (max-width: ${breakpoint.md}) {
    display: block;
    width: 94%;
    margin: auto;
    margin-bottom: 50px;
  }
`;

export const SectionBottom = styled.div`
  display: flex;
  @media (max-width: ${breakpoint.md}) {
    display: block;
    width: 94%;
    margin: auto;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 40px;
  width: 50%;
  @media (max-width: ${breakpoint.md}) {
    width: 100%;
  }
`;

export const Right = styled.div`
  text-align: right;
  width: 50%;
  @media (max-width: ${breakpoint.md}) {
    width: 100%;
    text-align: center;
    margin-top: 30px;
    img {
      width: 100%;
    }
  }
`;

export const Brand = styled.div``;

export const Span = styled.span`
  margin-right: 8px;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  font-size: ${typography.sm_bold.size};
  font-weight: ${typography.sm_bold.fontWeight};
  color: ${(props) => props.color};
`;

export const Image = styled.img``;

export const SectionTitle = styled.div`
  padding: 8px;
  font-size: ${typography.h2.size};
  font-weight: ${typography.h2.fontWeight};
  font-family: ${typography.h2.font};
  @media (max-width: ${breakpoint.md}) {
    font-size: ${typography.h3.size};
  }
`;

export const SectionDescription = styled.div`
  font-size: ${typography.lg.size};
  font-weight: ${typography.lg.fontWeight};
  color: ${(props) => props.color};
  @media (max-width: ${breakpoint.md}) {
    font-size: ${typography.sm.size};
  }
`;

export const MemberWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
`;

export const Member = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  row-gap: 32px;
  width: 24%;
  @media (max-width: ${breakpoint.md}) {
    width: 50%;
    margin-bottom: 30px;
  }
`;
export const MemberAvatar = styled.img`
  width: 200px;
  height: 200px;
  @media(max-width: ${breakpoint.sm}){
    width: 120px;
    height: 120px;
  }
`;
export const MemberContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 12px;
`;
export const MemberName = styled.div`
  font-family: ${typography.h4.font};
  font-size: ${typography.h4.size};
  font-weight: ${typography.h4.fontWeight};
  color: ${(props) => props.color};
`;
export const MemberTitle = styled.div`
  font-size: ${typography.sm.size};
  font-style: normal;
  font-weight: ${typography.sm.fontWeight};
  color: ${(props) => props.color};
`;
export const MemberDescription = styled.div`
  font-size: ${typography.sm.size};
  font-style: normal;
  font-weight: ${typography.sm.fontWeight};
  color: ${(props) => props.color};
`;
