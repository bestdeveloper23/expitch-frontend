import styled from "styled-components";
import { breakpoint, typography } from "../../theme/theme";

export const Section = styled.div`
  padding: 156px 0;
`;

export const SectionWrap = styled.div`
  max-width: 1204px;
  width: 100%;
  margin: auto;
  padding-bottom: 50px;
  @media (max-width: ${breakpoint.md}){
    padding-bottom: 30px;
  }
`

export const Container = styled.div`
  max-width: 1204px;
  width: 100%;
  row-gap: 30px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${breakpoint.lg}){
    width: 94%;
  }
`;

export const SectionTitle = styled.h2`
  padding: 8px;
  font-size: ${typography.h2.size};
  font-weight: ${typography.h2.fontWeight};
  color: ${(props) => props.color};
  @media (max-width: ${breakpoint.md}) {
    font-size: ${typography.h3.size};
    text-align: center;
  }
`

export const CardGrid = styled.div`
  width: 24%;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  @media (max-width: ${breakpoint.lg}) {
    width: 48%;
  }

  @media (max-width: ${breakpoint.md}) {
    width: 94%;
    margin: auto;
  }
`;

export const Card = styled.div`
  margin: auto;
  /* width: 90%; */
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 24px;
  background-color: #edeff4;
  min-height: 400px;
`;

export const Empty = styled.div`
  height: 50px;
  @media (max-width: ${breakpoint.lg}){
    display: none;
  }
`

export const Image = styled.img`
  max-width: 64px;
  max-height: 64px;
  width: 100%;
  height: 100%;
`;

export const CardContent = styled.p`
  color: ${(props) => props.color};
  font-size: ${typography.sm_bold.size};
  font-style: normal;
  font-weight: ${typography.sm_bold.fontWeight};
`;

export const CardUserName = styled.p`
  color: ${(props) => props.color};
  font-size: ${typography.h5.size};
  font-style: normal;
  font-weight: ${typography.h5.fontWeight};
  font-family: ${typography.h5.font};
`;
