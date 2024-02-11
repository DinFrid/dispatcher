import { Card, CardContent, Typography } from "@mui/material";
import styled from "styled-components";
import { HeadlineTypographyStyles } from "./types";

export const StyledCard = styled(Card)`
  display: flex;
  width: 986px;
  height: 242px;
  border-radius: 20px !important; 
  box-shadow: 0px 32px 64px 0px #0000000D;
  margin-bottom: 24px;
`;

export const StyledCardContent = styled(CardContent)`
  padding: 16px !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NewsImage = styled.img`
    width: 244px;
    height: 242px;
`;

export const StyledTypography = styled(Typography)<{ styles: HeadlineTypographyStyles }>`
&& {
  font-family: ${({ styles }) => styles.fontFamily };
  font-size: ${({ styles }) => styles.fontSize };
  font-weight: ${({ styles }) => styles.fontWeight };
  color: ${({ styles }) => styles.color };
  height: ${({ styles }) => styles.height };
  width: ${({ styles }) => styles.width };
  line-height: ${({ styles }) => styles.lineHeight || 'none' };
  letter-spacing: ${({ styles }) => styles.letterSpacing };

}
`;