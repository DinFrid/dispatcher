import styled from "styled-components";
import { Card, InputBase } from "@mui/material";

export const recentSearchesMenuProps = {
  PaperProps: {
    style: {
      marginTop: '6px',
      width: '60px', 
      marginLeft: '0px',
      height: '70px',  
    },
  }
};

export const SearchIconWrapper = styled('div')`
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 17px; 
`;


export const SearchBarCard = styled(Card)`
  &&& {
    display: flex;
    align-items: center; 
    justify-content: space-between; 
    width: 663px;
    height: 50px;
    border-radius: 10px;
    box-shadow: none;
  }
`;


export const StyledInputBase = styled(InputBase)`
color: inherit;
flex-grow: 1; 

.MuiInputBase-input {
  width: calc(100% - 55px);
  padding-left: 55px;
}
`;