import { Typography, TypographyStyle } from "@mui/material";
import styled from "styled-components";

export const BodyContainer = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F3F3FF;
`;

export const HeadlinesTitle = styled(Typography)<{titlestyles : TypographyStyle}> `
&& {
    width: ${({ titlestyles }) => titlestyles.width || '75%'};
    height: ${({ titlestyles }) => titlestyles.height || '32px'};
    font-family: Roboto;
    font-size: ${({ titlestyles }) => titlestyles.fontSize || '24px'};
    font-weight: ${({ titlestyles }) => titlestyles.fontWeight || '500'};
    line-height: ${({ titlestyles }) => titlestyles.lineHeight || '32px'};
    letter-spacing: ${({ titlestyles }) => titlestyles.letterSpacing || '0px'};
    text-align: left;
    color: ${({ titlestyles }) => titlestyles.color || '#262146'};
    margin: ${({ titlestyles }) => titlestyles.margin || '20px 0 20px 0'};

    ${({ theme }) => theme.breakpoints.down('md')} {
        width: 95%;
        margin: 12px 0px 12px 18px;
    }
}
`;

export const TopHeadlinesTitleStyles = {
    width : '75%',
    height : '32px',
    fontSize : '24px',
    fontWeight : '500',
    lineHeight : '32px',
    letterSpacing : '0px',
    color: '#262146',
    margin: '20px 0 20px 0'
}

export const totalResultsHeadline = {
    width : '75%',
    height : '20px',
    fontSize : '14px',
    fontWeight : '400',
    lineHeight : '22px',
    letterSpacing : '0.25px',
    color: '#5A5A8980',
    margin: '8px 0 15px 0'
}

export const DataLayout = styled.div `
    width: 95%;
    display: flex;
    flex-direction: row;
    height: 1231px;
    

    ${({ theme }) => theme.breakpoints.up('md')} {
        width: 75%;
        
    }
`;

