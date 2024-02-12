import { Card, CardContent, Typography } from "@mui/material";
import styled from "styled-components";
import { HeadlineTypographyStyles } from "./types";

export const StyledCard = styled(Card)`
&&{
  display: flex;
  width: 99%;
  border-radius: 20px !important; 
  box-shadow: 0px 32px 64px 0px #0000000D;
  margin-bottom: 2%;
  background-color: #FFFFFF;
  height: 250px; //Should be 20%
}
`;

export const StyledCardContent = styled(CardContent)`
&&{
  padding: 1.5% 1.5% 2.3% 2% !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4%;

}
`;

export const NewsImage = styled.img`
    width: 25%;
`;

export const ButtonContainer = styled.div `
    align-self: flex-end;
    
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