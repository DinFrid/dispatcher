import styled from "styled-components";
import { Box } from "@mui/material";

export const FiltersContainer = styled.div`

    ${({ theme }) => theme.breakpoints.between('sm','md')} {
        height: 44px;
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 20px;
        box-shadow: 0px 32px 64px 0px #0000000D;
        background-color: #FFFFFF;
        border: 1px solid #D9DBE9;
        justify-content: space-between;
    }

    ${({ theme }) => theme.breakpoints.up('md')} {
        height: 67px;
        width: 80%;
        display: flex;
        flex-direction: row;
        gap: 20px;
        border-bottom: 1px solid #D9DBE9;
        margin-top: 20px;
        margin-left: 5%;
        background-color: transparent;
        box-shadow: none;
    }
`;

export const FiltersIconWrapper = styled(Box)`

    ${({ theme }) => theme.breakpoints.up('sm')} {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 12px;
    }
`;

export const FiltersWrapper = styled(Box)`

    ${({ theme }) => theme.breakpoints.up('sm')} {
        display: flex;
        gap: 10px;
        margin-left: 10px;
    }
`;