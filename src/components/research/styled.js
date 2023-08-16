import styled from "styled-components";

export const Section = styled.div`
  padding: 156px 0;
  @media (max-width: 768px) {
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
  @media (max-width: 768px) {
    display: block;
    width: 94%;
    margin: auto;
    margin-bottom: 50px;
  }
`;

export const SectionBottom = styled.div`
  display: flex;
  @media (max-width: 768px) {
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
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Right = styled.div`
  text-align: right;
  width: 50%;
  @media (max-width: 768px) {
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
  font-family: "DM Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  color: ${(props) => props.color};
`;

export const Image = styled.img``;

export const SectionTitle = styled.div`
  padding: 8px;
  font-size: 56px;
  line-height: 56px;
  font-weight: 600;
  font-family: "Darker Grotesque";
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const SectionDescription = styled.div`
  color: var(--gray-700, #374151);
  font-family: "DM Sans";
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  color: ${(props) => props.color};
  @media (max-width: 768px) {
    font-size: 16px;
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
  width: 25%;

  @media (max-width: 1204px) {
    width: 50%;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    width: 94%;
    margin: auto;
    margin-bottom: 30px;
  }
`;
export const MemberAvatar = styled.img`
  width: 200px;
  height: 200px;
`;
export const MemberContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 12px;
`;
export const MemberName = styled.div`
  font-family: "Darker Grotesque";
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  color: ${(props) => props.color};
`;
export const MemberTitle = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  color: ${(props) => props.color};
`;
export const MemberDescription = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  color: ${(props) => props.color};
`;
