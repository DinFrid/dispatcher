import { Box } from "@mui/material";
import { styled } from "styled-components";

export const StyledBox = styled(Box) (({theme}) => ({


    [theme.breakpoints.up('md')] : {
      display: 'flex',
      width: '100%',
      justifyContent: 'flex-start'
    },
  
    [theme.breakpoints.between('sm','md')] : {
        marginLeft : '50px'
    }
  }));