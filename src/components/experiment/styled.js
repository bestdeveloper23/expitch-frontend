import styled from "styled-components";

export const Section = styled.div`
  background: ${(props) => props.bg};
  padding: 156px 0;
`;

export const Container = styled.div`
  width: 94%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  row-gap: 64px;
`;

export const Title = styled.div`
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  line-height: 66px;
  color: ${(props) => props.color};
  @media (max-width: 768px) {
    font-size: 40px;
    text-align: center;
  }
`;

export const Button = styled.button`
  display: flex;
  padding: 12px 26px;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.bg};
  color: ${(props) => props.color};
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  border-radius: 12px;
  &:hover {
    background: ${(props) => props.bg};
  }
`;

export const Content = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  color: ${(props) => props.color};
`;
