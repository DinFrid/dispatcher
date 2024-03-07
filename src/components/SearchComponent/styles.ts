import { Box, IconButton } from "@mui/material";
import { styled } from "styled-components";

export const StyledBox = styled(Box) (({theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',

    [theme.breakpoints.between('xs','sm')] : {
      marginRight: '5px'
    },

    [theme.breakpoints.up('md')] : {
      width: '100%',

      justifyContent: 'flex-start',
    },
  
    [theme.breakpoints.between('sm','md')] : {
        marginLeft : '60px'
    }
  }));

  export const IconsWrapper = styled(Box) `
  display: flex;
  align-items: center;
  margin-right: 5px;

`;

export const StyledIconButton = styled(IconButton) `
  && {
    padding: 0;
  }
`;