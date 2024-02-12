import { Card, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledTypography = styled(Typography)`
  && {
    position: relative;
    width: 89px;
    height: 32px;
    font-size: 24px;
    line-height: 32px;
    font-family: 'Roboto';
    font-weight: 700;
  }
`;

export const StyledCard = styled(Card)`
    width: 412px;
    height: 355px;
    border-radius: 20px;
    border: 1px solid #D9DBE9;
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
    box-shadow: 0px 32px 64px 0px #0000000D;
`;