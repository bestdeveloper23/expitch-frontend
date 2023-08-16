import styled from "styled-components";

export const Section = styled.div`
  padding: 156px 0;
`;

export const SectionWrap = styled.div`
  max-width: 1204px;
  width: 100%;
  margin: auto;
  padding-bottom: 50px;
  @media (max-width: 800px){
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
  @media (max-width: 1024px){
    width: 94%;
  }
`;

export const SectionTitle = styled.div`
  padding: 8px;
  font-size: 56px;
  line-height: 56px;
  font-weight: 600;
  color: ${(props) => props.color};
  @media (max-width: 768px) {
    font-size: 50px;
    text-align: center;
  }
`;

export const RedText = styled.div`
  color: var(--primary, #e71561);
`;

export const CardGrid = styled.div`
  width: 24%;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  @media (max-width: 1024px) {
    width: 48%;
  }

  @media (max-width: 768px) {
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
  @media (max-width: 1024px){
    display: none;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 64px;
  max-height: 64px;
  width: 100%;
  height: 100%;
`;

export const CardContent = styled.p`
  color: var(--gray-900, #111827);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  font-family: "DM Sans", sans-serif;
`;

export const CardUserName = styled.p`
  color: var(--gray-500, #6b7280);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  font-family: "Darker Grotesque", sans-serif;
`;
