import { Typography } from "@mui/material";
import styled from "styled-components";

export const BodyContainer = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F3F3FF;
`;

export const HeadlinesTitle = styled(Typography) `
&& {
    width: 75%;
    height: 32px;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 0px;
    text-align: left;
    color: #262146;
    margin: 20px 0 20px 0;
}
`;

export const DataLayout = styled.div `
    width: 75%;
    height: 1231px;
    display: flex;
    flex-direction: row;
`;

