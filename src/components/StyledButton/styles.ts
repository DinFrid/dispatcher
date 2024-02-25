import { Button } from "@mui/material";
import styled from "styled-components";

export const CustomStyledButton = styled(Button)`
  && {
    color: '#FFF';
    font-family: 'Roboto';
    font-size: 14px;
    line-height: 26px; 
    background-color: #0058B9; 
    border-radius: 20px; 
    padding: 5px 20px; 
    white-space: nowrap; 
    box-shadow: none;
    width: 100%;

    &:hover {
      box-shadow: none; 
    }

    &:active {
      box-shadow: none; 
    }

    ${({ theme }) => theme.breakpoints.down('sm')} {
      padding: 5px 0px 5px 20px;
  }
  }
`;

export const StyledImg = styled.img `
  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-left: 15px;
  }
   
`;