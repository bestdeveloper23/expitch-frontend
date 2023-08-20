import styled from "styled-components";

export const Container =  styled.div`
    max-width: 1204px;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
export const PitchForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
`
export const Title = styled.span`
    color: ${props => props.color || "white"};
    font-size: 25px;
    @media (min-width: 800px) {
        font-size: 37px;
    };
    @media (min-width: 1400px) {
        font-size: 42px;
    };
`
export const TextBox = styled.div`
    width: ${props => props.width};
    max-width: 100%;
    height: ${props => props.height};
    border: 1px solid #405A94;
    background-color: #1E2A45;
    border-top: ${props => props.bordertop};
    border-left: ${props => props.borderleft};
    border-right: ${props => props.borderright};
    border-bottom: ${props => props.borderbottom};
    padding: 20px 30px 20px 30px;
    white-space: pre-line;
    word-wrap: break-word;
    border-radius: ${props => props.borderradius};
    overflow: scroll;
    color: white;
    font-size: 18px;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 20px;
        
    }
    &::-webkit-scrollbar-track {
    background: transparent;
    margin-top: 10px;
    margin-bottom: 30px;
    }
    &::-webkit-scrollbar-button {
        display: none;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #9CA3AF;
        border-radius: 10px;
        border: 8px solid #1E2A45;
    }
`
export const CustomSVG = styled.img`
    width: ${props => props.width || '24px'};
    height: ${props => props.height || '24px'};
    path {
        fill: ${props => props.fill || '#000'};
    }
`
export const Grade = styled.div`
    position: ${props => props.position};
    top: 50%;
    transform: ${props => props.transform};
    left: ${props => props.left};
    width: ${props => props.size || '50'}px;
    height: ${props => props.size || '50'}px;
    border: 1px solid ${props => props.color || 'green'};
    background-color: ${props => props.backgroundcolor || 'rgba(0,255,0,0.1)'};
    color: ${props => props.color || 'green'};
    font-size: ${props => props.size / 2 || '25'}px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${props => props.size / 5 || '10'}px;
`

export const DContainer = styled.div`
    width: ${props => props.width};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    display: ${props => props.display || "block"};
    justify-content: ${props => props.justifycontent};
    align-items: ${props => props.alignitems};
    flex-direction: ${props =>props.flexdirection};
    flex-wrap: ${props =>props.flexWrap};
    align-content: ${props =>props.aligncontent};
    gap: ${props =>props.gap};
    position: ${props =>props.position};
`
export const FitMeNow = styled.span`
    color: ${props => props.color};
    font-size: 25px;
    @media (min-width: 800px) {
        font-size: 37px;
    };
    @media (min-width: 1400px) {
        font-size: 42px;
       };
`

export const Player = styled.div`
    color: white;
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    height: 25px;
    border-radius: 12px;
    border: 1px solid #405A94;
    background: #1E2A45;
    background-blend-mode: color-dodge;
`

export const PlayerProgress = styled.progress`
    width: 100%;
    height: 10px;
    appearance: none;
    border: none;
    background-color: #ddd;
    border-radius: 10px;
    overflow: hidden;

    &::-webkit-progress-bar {
    background-color: #ddd;
    border-radius: 10px;
    }

    &::-webkit-progress-value {
    background-color: #E71561;
    border-radius: 10px;
    }

    &::-moz-progress-bar {
    background-color: #E71561;
    border-radius: 10px;
    }
`
export const PlayerTime = styled.div`
    width: 200px;
`
export const FormTitle = styled.span`
    color: ${props => props.color};
    font-size: ${props => props.fontsize};
`