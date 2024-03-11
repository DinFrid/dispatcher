import { Card, CardContent, Typography } from "@mui/material";
import styled from "styled-components";
import { HeadlineTypographyStyles } from "./types";

export const StyledCard = styled(Card)`
&&{
  overflow: visible;
  height: 450px;
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 20px !important; 
  box-shadow: 0px 32px 64px 0px #0000000D;
  background-color: #FFFFFF;
  margin-left: 16px;
  

  .css-46bh2p-MuiCardContent-root:last-child {
    padding: 0px;
  }

  ${({ theme }) => theme.breakpoints.up('sm')} {
    flex-direction: row;
    height: 250px; 
    margin-left: 0px
  }
}
`;

export const StyledCardContent = styled(CardContent)`
&&{
  gap:10px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px 16px 12px 16px !important; 
  
  ${({ theme }) => theme.breakpoints.down('sm')} {
   height: 250px;
  }

  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: 100%;

  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    gap: 4%;
    padding: 1.5% 1.5% 2.3% 2% !important;
    margin-top: 0px;
  }
}
`;

export const NewsWrapper = styled.div`
  height: 150px;

  ${({ theme }) => theme.breakpoints.between('xs','sm')} {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${({ theme }) => theme.breakpoints.up('sm')} {
    max-width: 245px;
    height: 245px;
  }
    
  ${({ theme }) => theme.breakpoints.up('md')} {
    max-width: 250px;
    height: 250px;
  }
`;

export const NewsImage = styled.img<{ isfallback: string}>`
  object-fit: cover;
  height: 150px;
  width: 100%;
  

  ${(props) => (props.isfallback === 'true') && `
    display: block;
    margin: 0 auto; 
  `}

  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: 245px;
    height: 245px;
  }
    
  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 250px;
    height: 250px;
  }
`;

export const FallbackNewsWrapper = styled.div`
  height: 150px;

  ${({ theme }) => theme.breakpoints.between('xs','sm')} {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 0.5px solid #D9DBE9;

  }

  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: 245px;
    height: 245px;
    border-right: 0.5px solid #D9DBE9;
  }
    
  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 245px;
    height: 250px;
  }
`;

export const FallbackNewsImage = styled.img`
  object-fit: cover;
    height: 150px;
    width: 150px;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: 245px;
    height: 245px;
    padding-left:40px;
  }
    
  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 250px;
    height: 250px;
  }
`;

export const ButtonContainer = styled.div `
    align-self: flex-end;
    

    ${({ theme }) => theme.breakpoints.down('sm')} {
      width: 311px;
  }
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
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  ${({ theme }) => theme.breakpoints.up('sm')} {
        width: 100%;
    }

}
`;

export const dateStyles = {
  maxHeight:'25px', 
  fontFamily: 'Roboto', 
  fontWeight: '400', 
  fontSize: '14px', 
  lineHeight: '22px', 
  letterSpacing: '0.25px', 
  color: '#5A5A8980'
  
};

export const titleStyles = {
  maxHeight:'60px', 
  fontFamily: 'Roboto', 
  fontWeight: '700', 
  fontSize: '18px', 
  lineHeight: '16.41px', 
  color: '#14142B'
};

export const sourceStyles = {
  maxHeight:'25px', 
  fontFamily: 'Roboto', 
  fontWeight: '400', 
  fontSize: '14px', 
  lineHeight: '22px',
  color: '#5A5A8980'
};

export const contentStyles = {
  maxHeight:'50px',      
  fontFamily: 'Roboto', 
  fontWeight: '400', 
  fontSize: '14px', 
  lineHeight: '16.41px', 
  color: '#5A5A89'
};