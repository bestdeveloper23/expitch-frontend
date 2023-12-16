import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
`;

export const Title = styled.h1`
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
`;

export const SubTitle = styled.h2`
    font-size: 20px;
    color: #444;
    margin-top: 20px;
    margin-bottom: 15px;
`;

export const SectionTitle = styled.h3`
    font-size: 18px;
    color: #555;
    margin-top: 15px;
    margin-bottom: 10px;
`;

export const Text = styled.p`
    font-size: 16px;
    color: #666;
    line-height: 1.5;
    margin-bottom: 15px;
`;

export const Link = styled.a`
    color: #0077cc;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

export const Footer = styled.footer`
    margin-top: 30px;
    font-size: 14px;
    color: #888;
`;