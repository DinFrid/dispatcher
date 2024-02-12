import { Card, Typography } from "@mui/material";
import styled from "styled-components";

export const PieGraphContainer = styled(Card)`
&&{
    width: 412px;
    height: 378px;
    border-radius: 20px;
    border: 1px solid #D9DBE9;
    padding: 25px 15px 25px 25px;
    box-sizing: border-box;
    box-shadow: 0px 32px 64px 0px #0000000D;

        
    .recharts-default-legend{
        display: flex;
        flex-direction: column;
        gap: 11px;
        padding-left: 10px !important;
        overflow-y: auto;
        max-height: 120px;
        width: 100%;
    }
  }
`;

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