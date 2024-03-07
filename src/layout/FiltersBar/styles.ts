import styled from "styled-components";
import { Box } from "@mui/material";

export const FiltersContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 44px;
    width: 100%;
    /* background-color: #FFFFFF; */
    border: 1px solid #D9DBE9;
    padding: 4px 0;
    justify-content: flex-end;
    margin-right: 5px;

    ${({ theme }) => theme.breakpoints.between('sm','md')} {
        
        gap: 20px;
        box-shadow: 0px 32px 64px 0px #0000000D;
        justify-content: space-between;
        padding: 8px 0;
        margin-right: none;    }

    ${({ theme }) => theme.breakpoints.up('md')} {
        height: 67px;
        width: 75%;
        display: flex;
        justify-content: flex-start;
        gap: 20px;
        border-left: none;
        border-top: none;
        border-right: none;
        border-bottom: 1px solid #D9DBE9;
        margin-top: 20px;
        margin-right: none;
        background-color: transparent;
        box-shadow: none;
        padding: 0px;
    }
`;

export const FiltersIconWrapper = styled(Box)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 12px;
`;

export const FiltersWrapper = styled(Box)`
    display: flex;

    ${({ theme }) => theme.breakpoints.down('sm')} {
        justify-content: space-between;
        width: 100%;
    }
    
    ${({ theme }) => theme.breakpoints.up('sm')} {
        gap: 10px;
    }

    ${({ theme }) => theme.breakpoints.between('sm','md')} {
        margin-left: 30px;
    }
`;

export const StyledDiv = styled.div `
    margin-left: 25px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`