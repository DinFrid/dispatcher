import { Card, Typography } from "@mui/material";
import styled from "styled-components";

export const PieGraphContainer = styled(Card)`
&&{
    width: 400px;
    height: 370px;
    border-radius: 20px;
    border: 1px solid #D9DBE9;
    padding: 25px 15px 25px 25px;
    box-sizing: border-box;
    box-shadow: 0px 32px 64px 0px #0000000D;
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