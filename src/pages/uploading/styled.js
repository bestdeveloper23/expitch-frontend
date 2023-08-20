import styled from "styled-components";

export const Container =  styled.div`
    max-width: 1204px;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`
export const UploadingBox = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 32px;
    border-radius: 24px;
    border: 2px dashed var(--gray-300, #D1D5DB);
    background: var(--white, #FFF);
    @media (min-width: 600px){
        width:400px;
        padding: 20px;
    }
    @media (min-width: 800px){
        width:600px;
        padding: 30px;
    }
    @media (min-width: 1400px){
        width:792px;
        padding: 40px;
    }
`
export const CustomSVG = styled.img`
    width: ${props => props.width-20 || 24}px;
    height: ${props => props.height-20 || 24}px;
    path {
        fill: ${props => props.fill || '#000'};
    }
    @media (min-width: 600px) {
        width: ${props => props.width - 10 || 24}px;
        height: ${props => props.height-10 || 24}px;
    }
    @media (min-width: 1400px) {
        width:${props => props.width || 24}px;
        height: ${props => props.height|| 24}px;
    }
`
export const SmallTitle = styled.span`
    color: ${props => props.color || "white"};
    font-size: 18px;
    font-family: Darker Grotesque;
    font-style: normal;
    font-weight: 600;
    line-height: 32px; 
    @media (min-width: 800px) {
        font-size: 25px;
    };
    @media (min-width: 1400px) {
        font-size: 32px;
    };
`
export const UploadText = styled.div`
    color: ${props => props.color};
    font-family: DM Sans;
    font-size: ${props => props.fontsize || 18}px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
    @media (max-width: 600px) {
        font-size: ${props => props.fontsize - 4 || 14}px;
    }
`
export const Button = styled.div`
    display: flex;
    padding: 4px 14px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: 1px solid var(--primary, #E71561);
    background: var(--white, #FFF);
    color: black;
    font-family: 'DM Sans';
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    @media (min-width: 600px) {
        font-size: 14px;
        padding: 8px 20px;
    }
    @media (min-width: 1400px) {
        font-size: 18px;
        padding: 12px 26px;
    }
`

export const RecordingBox = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 16px;
    background: var(--white, #FFF);
    @media (min-width: 600px){
        width:300px;
        padding: 20px;
    }
    @media (min-width: 800px){
        width:500px;
        padding: 30px;
    }
    @media (min-width: 1400px){
        width:586px;
        padding: 40px;
    }
`
export const RoundButton = styled.a`
    display: flex;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    padding: 9px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid var(--primary, #E71561);
    background: var(--gray-50, #F9FAFB);
    @media (min-width: 600px) {
        padding: 12px
    }
    @media (min-width: 1400px) {
        padding: 16px;
    }
`