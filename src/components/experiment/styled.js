import styled from "styled-components";
import BackgroundSVG from "../../assets/images/grid.svg"

export const Section = styled.div` 
  background: radial-gradient(ellipse at 50% -40%, rgba(231, 21, 97, 0.25), transparent 70%),
              radial-gradient(ellipse at 50% -50%, rgba(17, 24, 39, 0),  rgba(17, 24, 39, 1)90%),
              url(${BackgroundSVG}) 0% 20%/50% auto no-repeat,
              linear-gradient(0deg, rgba(17, 24, 39, 1) 0%, rgba(17, 24, 39, 1) 100%);
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

export const Button = styled.a`
  text-decoration: none;
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
  cursor: pointer;
  &:hover {
    background: ${(props) => props.bg};
  }
  @media (max-width: 800px){
    padding: 3px 5px;
    border-radius: 5px;
    font-size: 12px;
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
