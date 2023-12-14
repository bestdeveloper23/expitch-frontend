import styled, { css } from "styled-components";
import { breakpoint, typography } from "../../theme/theme";
import { ArrowDownTrayIcon, PrinterIcon } from '@heroicons/react/24/outline';

export const Container = styled.div`

  @media (min-width: ${breakpoint.md}) {
    margin: auto;
    padding: 50px 30px 50px 30px;
   }
   @media (min-width: ${breakpoint.lg}) {
    max-width: 1204px;
    margin: auto;
    
    padding: 50px 30px 100px 30px;
   }
   padding: 30px 10px;
   position: relative;
`;

export const Title = styled.h3`
 font-family: ${typography.h3.font};
 font-size: ${typography.h3.size};
 font-weight: ${typography.h3.fontWeight};
 color: ${(props)=> props.color};
 margin: 0 0 16px 0;
`

export const Container2 = styled.div`
 display: flex;
 align-items: start;
 justify-content: space-between;
 @media (max-width: ${breakpoint.md}) {
  flex-direction: column;
 }
`

export const Table = styled.table`
  width: 100%;
  ${'' /* border-collapse: collapse; */}
  border-spacing: 0;
  border-radius: 24px;
  border: 1px solid ${(props)=>props.color};
  overflow: hidden;
`

export const HeaderRow = styled.tr`
  display: flex;
  text-align: left;
  height: 44px;
  padding: 8px 16px;
  align-items: center;
  align-self: stretch;
  border-bottom: 1px solid ${(props)=>props.color};
  background-color: ${(props)=>props.bgcolor};
`

const HeaderCell = css`
    display: flex;
    align-items: center;
    height: 100%;
    border-left: 1px solid #E5E7EB;
    color: #6B7280;
    font-family: ${typography.h5.font};
    font-size: ${typography.h5.size};
    font-weight: ${typography.h5.fontWeight};

    &:first-child {
      border-left: none;
    }
`

export const BodyRow = styled.tr`
  display: flex;
  text-align: left;
  height: 44px;
  padding: 8px 16px;
  align-items: center;
  align-self: stretch;
  border-bottom: 1px solid ${(props)=>props.color};
  background-color: ${(props)=>props.bgcolor};

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: ${breakpoint.md}) {
    height: auto;
  }
`

//---------------- Cells -------------------

export const HeaderCellDate = styled.th`
  ${HeaderCell};
  padding: 8px 16px;
  display: flex;
  justify-content: end;
  width: calc(100% / 3);

  @media (max-width: ${breakpoint.md}) {
    display: none;
  }
`

export const HeaderCellNum = styled.th`
  ${HeaderCell};
  padding: 8px 16px;
  text-align: left;
  width: 5%;

  @media (max-width: ${breakpoint.md}) {
    display: none !important;
  }
`

export const HeaderCellName = styled.th`
  ${HeaderCell};
  padding: 8px 16px;
  text-align: left;
  width: 100%;

  @media (max-width: ${breakpoint.md}) {
    border-left: none;
  }
`

export const HeaderCellScore = styled.th`
  ${HeaderCell};
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  width: calc(100% / 3);

  @media (max-width: ${breakpoint.md}) {
    justify-content: end;
  }
`

export const HeaderCellActions = styled.th`
  ${HeaderCell};
  padding: 8px 16px;
  display: flex;
  justify-content: end;
  width: calc(100% / 3);

  @media (max-width: ${breakpoint.md}) {
    display: none;
  }
`

export const BodyCellDate = styled.td`
  padding: 8px 16px;
  display: flex;
  justify-content: end;
  width: calc(100% / 3);
  color: ${(props)=>props.color};

  @media (max-width: ${breakpoint.md}) {
    display: none;
  }
`

export const BodyCellNum = styled.td`
  padding: 8px 16px;
  text-align: left;
  width: 5%;
  color: ${(props)=>props.color};

  @media (max-width: ${breakpoint.md}) {
    display: none;
  }
`

export const BodyCellName = styled.td`
  padding: 8px 16px;
  text-align: left;
  width: 100%;
`

export const NameLink = styled.a`
  color: ${(props)=>props.color};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const BodyCellScore = styled.td`
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  width: calc(100% / 3);

  @media (max-width: ${breakpoint.md}) {
    justify-content: end;
  }
`

export const BodyCellActions = styled.td`
  display: flex;
  justify-content: end;
  gap: 8px;
  padding: 8px 16px;
  width: calc(100% / 3);

  @media (max-width: ${breakpoint.md}) {
    display: none;
  }
`


//---------------- Icons -------------------

export const DownloadIcon = styled(ArrowDownTrayIcon)`
  height: 18px;
  width: 18px;
`

export const PrintIcon = styled(PrinterIcon)`
  height: 18px;
  width: 18px;
`


//---------------- Actions -------------------

const ActionStyles = css`
  display: flex;
  justify-content: center;
  padding: 8px;
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
  border-radius: 4px;
  color: ${(props)=>props.color};

  &:hover {
    cursor: pointer;
    background-color: ${(props)=>props.bgcolor};
  }
`;

export const IconActionDownload = styled.button`
  ${ActionStyles}
`

export const IconActionPrint = styled.button`
  ${ActionStyles}
`

//---------------------------------------------



export const Grade = styled.div`
    position: ${props => props.position};
    top: 50%;
    transform: ${props => props.transform};
    left: ${props => props.left};
    width: 32px;
    height: 32px;
    border: 1px solid ${props => props.bordercolor || 'green'};
    background-color: ${props => props.backgroundcolor || 'rgba(0,255,0,0.1)'};
    color: ${props => props.color || 'green'};
    font-size: ${props => props.size / 2 || '18'}px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${props => props.size / 5 || '10'}px;
    @media(min-width: ${breakpoint.lg}){
     width: 40px;
     height: 40px
    }
`