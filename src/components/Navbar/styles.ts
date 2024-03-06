import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledNavbar = styled(Box) (({theme}) => ({
  display: 'flex',
  borderRadius: '1px',
  backgroundColor: '#262146',
  boxShadow: '0px 32px 64px 0px #0000000D',
  height: '74px',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',

  [theme.breakpoints.up('md')] : {
    justifyContent: 'flex-start',
  },
  [theme.breakpoints.up('sm')] : {
    justifyContent: 'space-between',
  }
}));

export const StyledBox = styled(Box) (({theme}) => ({
  display: 'flex',
  width: '100%',


  [theme.breakpoints.down('sm')] : {
    justifyContent: 'space-between',
  },

  [theme.breakpoints.up('md')] : {
  },
}));

export const StyledImage = styled.img `
  height: fit-content;
  margin-left: 16px;

  ${({ theme }) => theme.breakpoints.up('sm')} {
      margin-left: 20px;
  }
`;

export const ImageWrapper = styled(Box) `
  display: flex;
  
  ${({ theme }) => theme.breakpoints.up('md')} {
      
      width: 14.5%;
  }
  
`;
