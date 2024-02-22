import { Card, CardContent, Typography } from "@mui/material";
import styled from "styled-components";
import { HeadlineTypographyStyles } from "./types";

export const StyledCard = styled(Card)`
&&{
  height: 450px;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    display: flex;
    flex: 1;
    border-radius: 20px !important; 
    box-shadow: 0px 32px 64px 0px #0000000D;
    background-color: #FFFFFF;
    height: 250px; 
    }
}
`;

export const StyledCardContent = styled(CardContent)`
&&{
  padding: 1.5% 1.5% 2.3% 2% !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4%;
  width: 75%;
}
`;

export const NewsImage = styled.img`
    width: 245px;
    height: 245px;
    object-fit: cover;
    flex: 1;
    
    ${({ theme }) => theme.breakpoints.up('md')} {
      width: 188px;
      height: 250px;
    }
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
  max-height: ${({ styles}) => styles.maxHeight};
  width: ${({ styles }) => styles.width };
  line-height: ${({ styles }) => styles.lineHeight || 'none' };
  letter-spacing: ${({ styles }) => styles.letterSpacing };

  overflow: hidden;
  display: '-webkit-box';
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  ${({ theme }) => theme.breakpoints.up('sm')} {
        width: calc(100% - 32px);
    }

}
`;

export const dateStyles = {
  width:'50%',
  maxHeight:'25px', 
  fontFamily: 'Roboto', 
  fontWeight: '400', 
  fontSize: '14px', 
  lineHeight: '22px', 
  letterSpacing: '0.25px', 
  color: '#5A5A8980'
  
};

export const titleStyles = {
  width:'65%', 
  maxHeight:'60px', 
  fontFamily: 'Roboto', 
  fontWeight: '700', 
  fontSize: '18px', 
  lineHeight: '16.41px', 
  color: '#14142B'
};

export const sourceStyles = {
  width:'30%', 
  maxHeight:'25px', 
  fontFamily: 'Roboto', 
  fontWeight: '400', 
  fontSize: '14px', 
  lineHeight: '22px',
  color: '#5A5A8980'
};

export const contentStyles = {
  width:'100%', 
  maxHeight:'50px',      
  fontFamily: 'Roboto', 
  fontWeight: '400', 
  fontSize: '14px', 
  lineHeight: '16.41px', 
  color: '#5A5A89'
};