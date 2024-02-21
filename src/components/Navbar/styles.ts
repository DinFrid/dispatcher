import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledNavbar = styled(Box) (({theme}) => ({


  [theme.breakpoints.up('md')] : {
    width: '100%',
    height: '74px',
    borderRadius: '1px',
    display: 'flex',
    backgroundColor: '#262146',
    boxShadow: '0px 32px 64px 0px #0000000D',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  [theme.breakpoints.up('sm')] : {
    width: '100%',
    height: '74px',
    borderRadius: '1px',
    display: 'flex',
    backgroundColor: '#262146',
    boxShadow: '0px 32px 64px 0px #0000000D',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
}));

export const StyledBox = styled(Box) (({theme}) => ({
  display: 'flex',

  [theme.breakpoints.up('md')] : {
    gap: '100px',
  },

  [theme.breakpoints.up('sm')] : {
    justifyContent: 'space-between',
    width: '540px',
    gap: '50px'
  }
}));

export const StyledImage = styled.img `
  height: fit-content;
  margin-left: 1%;

  ${({ theme }) => theme.breakpoints.up('sm')} {
      margin-left: 20px;
  }
`;
