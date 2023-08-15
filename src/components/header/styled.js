import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 0;
  margin: 0;
  position: relative;
  border-bottom: 1px solid #E5E7EB;
`;

export const NavBar = styled.div`

  @media (min-width: 600px) {
    min-height: 80px;
    padding-inline: 30px;
  }
  
  @media (min-width: 1400px) {
    max-width: 1204px;
    min-height: 94px;
  }
  padding-inline: 10px;
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
`
export const Notice = styled.div`
  background-color: #000;
  color: #fff;
  padding: 10px;
  padding-inline: 35px;
  border: none;
  position: relative;
  text-align: center;
  display: ${(props)=> props.isopen=="yes"? "block" : "none"};
`

export const LinkDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const Links = styled.a`
  text-decoration: none;
  display: flex;
  cursor: pointer;
  color: ${(props) => props.color};
  align-items: center;
  a {
    margin-right: 1rem;
    padding: 0.7rem 1rem;
    font-size: 0.9rem;
    @media (max-width: 800px) {
      margin: 1.4rem;
    }
  }
`;

export const CloseButton = styled.button`
  display: ${(props)=> props.isopen=="yes"? "block" : "none"};
  position: absolute;
  top: 13.25px;
  
  background: transparent;
  cursor: pointer;
  border: none;
  @media (min-width: 600px) {
    right: 20px;
  }
  
  @media (min-width: 1400px) {
    right: 40px;
  }
`
export const TestButton = styled.button`
  background-color: #E71561;
  color: #FFFFFF;
  padding: 12px 26px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`