import { Box } from "@mui/material";
import { styled } from "styled-components";

export const StyledBox = styled(Box) (({theme}) => ({


    [theme.breakpoints.up('md')] : {
        marginLeft: 'calc(12.5% - 25px)'
    },
  
    [theme.breakpoints.up('sm')] : {
        
    }
  }));